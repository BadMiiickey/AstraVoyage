LevelEvents.tick(event => {
    
    const { server, level } = event

    //亡灵生物持有嗜血效果时攻击活体生物
    if (global.methods.tickCountCheck(server, 0, 1.5)) {
        
        if (level.entities) {

            let livingUndeads = level.entities
                .filter(/** @param { Internal.LivingEntity } entity */ entity => 
                    entity instanceof $LivingEntity
                    && entity.alive
                    && entity.undead
                )
            let notUndeads = level.entities
                .filter(/** @param { Internal.LivingEntity } entity */ entity => 
                    entity instanceof $LivingEntity
                    && entity.alive
                    && !entity.undead
                    && entity.type != 'dummmmmmy:target_dummy'
                )

            livingUndeads.forEach(/** @param { Internal.AmbientCreature } livingUndead */ livingUndead => {
    
                //判断亡灵生物是否持有嗜血效果
                if (livingUndead.potionEffects.getActive('kubejs:bloodthirsty')) {
                    notUndeads.forEach(notUndead => {
    
                        //检测亡灵生物与活体生物的距离
                        if (notUndead.distanceToEntity(livingUndead) <= 16) {
                            livingUndead.setTarget(notUndead)
                        }
                    }
                )}
            })
        }
    }
    
    //月相预报
    if (
        level.lunarContext != null
        && global.methods.tickCountCheck(server, 1, 60 * 3)
    ) {
        let lunarForecast = level.lunarContext.lunarForecast
        let currentDay = lunarForecast.currentDay
        let nextMoonPhase = lunarForecast.getLunarEventForDay(currentDay + 3).get().toString().substring(
            lunarForecast.getLunarEventForDay(currentDay + 3).toString().indexOf('/ enhancedcelestials:') + 21,
            lunarForecast.getLunarEventForDay(currentDay + 3).toString().indexOf(']=corgitaco')
        )
        let nextMoonPhaseTommorow = lunarForecast.getLunarEventForDay(currentDay + 4).toString().substring(
            lunarForecast.getLunarEventForDay(currentDay + 4).toString().indexOf('/ enhancedcelestials:') + 21,
            lunarForecast.getLunarEventForDay(currentDay + 4).toString().indexOf(']=corgitaco')
        )
        
        if (nextMoonPhase != 'default') {
            server.players.forEach(/** @param { Internal.Player } player */ player => {
                
                //判断预报状态, 防止连续发送
                if (!player.persistentData.hasForeCast) {
                    
                    switch (nextMoonPhase) {
                        case ('blood_moon'):
                            player.tell('§c§l血月§f即将降临')
                            break

                        case ('blue_moon'):
                            player.tell('§b§l蓝月§f即将降临')
                            break

                        case ('harvest_moon'):
                            player.tell('§e§l丰收之月§f即将降临')
                            break
                            
                        case ('default'):
                            if (nextMoonPhaseTommorow != 'default') {
                                player.persistentData.hasForeCast = false
                            }
                    }
    
                    //重置是否预报状态
                    player.persistentData.hasForeCast = true
                }
            })
        }
    }

    //尸潮事件
    
    /**
     * 
     * @param { Internal.AmbientCreature } spawnMob 
     * @param { Internal.MobEffect_ } potionEffect 
     * @param { number } x 
     * @param { number } y 
     * @param { number } z 
     * @param { Internal.LivingEntity | Internal.Player } target 
     */
    function basicSpawnSetting(spawnMob, potionEffect, x, y, z, target) {
        spawnMob.potionEffects.add(potionEffect, 20 * 60 * 3, 0, false, false)
        spawnMob.setPos(x, y, z)
        spawnMob.setTarget(target)
        spawnMob.spawn()
    }

    if (global.methods.tickCountCheck(server, 2, 10)) {

        /** @type { Internal.List<[number, number]>} */
        let allCoordinates = []

        server.players.forEach(/** @param { Internal.Player } player */ player => {
            if (!player.persistentData.hordeCriticalValue) {
                player.persistentData.hordeCriticalValue = 150
            }

            if (
                player.persistentData.mobKillCount >= player.persistentData.hordeCriticalValue
                && level.night
            ) {
                for (let i = 0; i < global.definitionsArray.undeads.length * player.persistentData.hordeCriticalValue / 150; i++) {
                    for (let angle = 0; angle < 360; angle++) {
                        
                        let randian = (angle * KMath.PI) / 180
                        let dx = Math.cos(randian) * 64
                        let dz = Math.sin(randian) * 64
                        let x = Math.floor(player.x + dx)
                        let z = Math.floor(player.z + dz)

                        if (level.getBlock(x, player.y, z).canSeeSky) {
                            allCoordinates.push([x, z])
                        }
                    }
        
                    if (allCoordinates.length >= 1) {

                        let randomUndead = 
                            global.definitionsArray.undeads[Math.floor(Math.random() * global.definitionsArray.undeads.length)]
                        let randomCoordinate = allCoordinates[Math.floor(Math.random() * allCoordinates.length)]
                        /** @type { Internal.AmbientCreature } */
                        let spawnedUndead = level.createEntity(randomUndead)

                        switch (randomUndead) {
                            case ('minecraft:skeleton' || 'minecraft:stray' || 'quark:forgotten') :
                                spawnedUndead.setMainHandItem('minecraft:bow')
                                basicSpawnSetting(
                                spawnedUndead, 'kubejs:bloodthirsty', 
                                randomCoordinate[0], player.y, randomCoordinate[1],
                                player
                                )

                                if (player.persistentData.hordeCriticalValue >= 1350) {
                                    spawnedUndead.setMainHandItem(Item.of('minecraft:bow').enchant('minecraft:power', 2))
                                    basicSpawnSetting(
                                        spawnedUndead, 'kubejs:bloodthirsty',
                                        randomCoordinate[0], player.y, randomCoordinate[1],
                                        player
                                    )
                                }
                                break
                            case ('minecraft:drowned') :
                                spawnedUndead.setMainHandItem('minecraft:trident')
                                basicSpawnSetting(
                                    spawnedUndead, 'kubejs:bloodthirsty',
                                    randomCoordinate[0], player.y, randomCoordinate[1],
                                    player
                                )
                                break
                            default :
                                basicSpawnSetting(
                                    spawnedUndead, 'kubejs:bloodthirsty',
                                    randomCoordinate[0], player.y, randomCoordinate[1],
                                    player
                                )
                        }
                    }
                }

                player.tell('§c空气中酝酿着令人不安的气息……')
                player.persistentData.hordeCriticalValue *= 3
            }
        })
    }

    //亡灵生物暴露于阳光下时自燃
    if (global.methods.tickCountCheck(server, 3, 3)) {
        if (
            level.day
            && !level.raining
        ) {
            let selfBurningUndead = level.entities
                .filter(entity => 
                    entity instanceof $LivingEntity
                    && entity.undead
                    && entity.type != 'minecraft:husk'
                )
            
            selfBurningUndead.forEach(entity => {
                if (global.methods.isUnderSunlight(entity.level, entity.block.down.pos)) {
                    entity.setSecondsOnFire(3)
                }
            })
        }
    }
    
    //营火事件
    if (global.methods.tickCountCheck(server, 4, 3)) {
        if (
            global.mapArray.campfiresMapArray
            && global.mapArray.campfiresMapArray.length > 0
        ) {
            global.mapArray.campfiresMapArray.forEach(campfire => {
                server.players.forEach(/** @param { Internal.Player } player */ player => {
                    if (player.level.dimension.toString() == campfire.dimension.toString()) {

                        //玩家半径16格内存在营火则获得生命恢复Buff
                        if (Math.sqrt(player.getDistanceSq(campfire.pos)) <= 16) {
                            player.potionEffects.add('minecraft:regeneration', 20 * 3, 0, false, false)
                        }

                        //暴露于雨中熄灭
                        let block = player.level.getBlock(campfire.pos)

                        if (
                            block.canSeeSky
                            && block.level.raining
                        ) {
                            let litFalse = block.blockState
                                .setValue($BlockStateProperties.LIT, $Boolean.FALSE)
                    
                            block.level.setBlockAndUpdate(campfire.pos, litFalse)
                        }
                    }
                })
            })
        }
    }
        
    //末地唯一进入方式并创造黑曜石平台
    if (global.methods.tickCountCheck(server, 7, 1.5)) {
        server.players.forEach(/** @param { Internal.Player } player */ player => {
            if (
                player.level.dimension.toString() == 'kubejs:wasteworld'
                && player.y <= -99
            ) {
                player.teleportTo('minecraft:the_end', 100, 51, 0, 0, 0)
            }

            if (player.level.dimension.toString() == 'minecraft:the_end') {
                for (let i = -2; i <= 2; i++) {
                    for (let j = -2; j <= 2; j++) {
                        for (let k = 1; k <= 2; k++) {
                            player.level.getBlock(100 + i, 50 + k, j).set('minecraft:air')
                        }
                        
                        player.level.getBlock(100 + i, 50, j).set('minecraft:obsidian')
                    }
                }
            }
        })
    }
})