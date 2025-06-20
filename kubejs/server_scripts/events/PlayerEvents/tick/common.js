PlayerEvents.tick(event => {
    
    const { player, server } = event
    const { level } = player
    const { dimension } = level

    if (!player.alive) return

    let slotsList = $CuriosApi.getCuriosInventory(player).resolve().get()

    //玩家佩戴饰品事件    
        //磁引衡轮 => 正面Buff: 佩戴时吸引附近物品
        if (global.methods.slotResult(player, 'kubejs:magnet')) {
            
            let playerAABBForItems = player.boundingBox.inflate(8, 8, 8)
            let attractableItems = level.getEntitiesWithin(playerAABBForItems)
                .filter(entity => entity.type == 'minecraft:item')
            
            attractableItems.forEach(item => {
                item.addMotion(
                    (player.x - item.x) / 90, 
                    (player.y - item.y) / 30, 
                    (player.z - item.z) / 90
                )
            })
        }

        //月华流晶 => 正面Buff: 佩戴时若主手持有匠魂镐则获得急迫Buff
        if (global.methods.tickCountCheck(server, 18, 3)) {
            if (
                global.methods.slotResult(player, 'kubejs:luminous_pearl')
                && player.mainHandItem.id == 'tconstruct:pickaxe'
            ) {
                player.potionEffects.add('minecraft:haste', 20 * 3, 0, false, false)
            }
        }

        //寒霜芯核 => 正面Buff: 佩戴时免疫灼烧, 若手中持有熔岩桶则免疫其负面效果, 对攻击的敌对生物造成冰冻DeBuff
        //寒霜芯核 => 负面Buff: 佩戴时若玩家未穿戴具有保暖效果的装备则获得冷冻DeBuff
        function armorInsulationCheck() {
            for (let armor of player.inventory.armor) {
                if (armor.nbt?.insulation != undefined) return true
            }
        }
        
        if (global.methods.tickCountCheck(server, 17, 3)) {
            if (global.methods.slotResult(player, 'kubejs:freezing_core')) {
                if (
                    !armorInsulationCheck()
                    && !player.creative
                    && !player.spectator
                ) {
                    player.ticksFrozen = global.methods.frozenSeconds(3)
                }
            }
        }
        
        //慧泽丝链 => 存储玩家经验, 并将其转化为伤害加成
        //慧泽丝链 => 可选功能: 是否自动存储经验, 默认否, G键切换
            //读取玩家设置按键
            global.other.memoryBraceletModeName = KeyBindUtil.getKeyMapping('memoryBraceletMode').keyCode.name
            global.other.memoryBraceletLowerCase = global.other.memoryBraceletModeName
                .substring(global.other.memoryBraceletModeName.indexOf('key.keyboard.') + 13)
            global.other.memoryBraceletUpperCase = global.other.memoryBraceletLowerCase.slice(0, 1).toUpperCase() 
                + global.other.memoryBraceletLowerCase.slice(1)

            //自动存储玩家经验
            if (global.methods.tickCountCheck(server, 16, 0.5)) {
                for (let i = 0; i < slotsList.slots; i++) {

                    let target = slotsList.equippedCurios.getStackInSlot(i)

                    if (target.id == 'kubejs:memory_bracelet') {
                        target.nbt.AutoStoredXP = player.persistentData.autoMode
                        
                        if (target.nbt.AutoStoredXP == true) {       
                            target.nbt.StoredXP += player.xp
                            player.xp = 0
                        }
                        break
                    }
                }
            }

        //回响晶核 => 佩戴时激活小地图
        if (global.methods.tickCountCheck(server, 14, 3)) {
            if (!global.methods.slotResult(player, 'kubejs:echo_crystal_nucleus')) {
                player.potionEffects.add('xaerominimap:no_minimap', 20 * 3, 0, false, false)
                player.potionEffects.add('xaerominimap:no_entity_radar', 20 * 3, 0, false, false)
            }
        }

        //琥珀金护身符 => 佩戴时获得幸运Ⅰ, 且每隔10秒随机获得一个持续3秒的增益Buff
        if (global.methods.tickCountCheck(server, 13, 3)) {
            if (global.methods.slotResult(player, 'createaddition:electrum_amulet')) {
                player.potionEffects.add('minecraft:luck', 20 * 3, 0, false, false)
            }
        }

        if (global.methods.tickCountCheck(server, 13, 10)) {
            if (global.methods.slotResult(player, 'createaddition:electrum_amulet')) {
                player.potionEffects.add(
                    global.definitionsArray.allBeneficialPotionEffectsArray[
                        Math.floor(Math.random() * global.definitionsArray.allBeneficialPotionEffectsArray.length)
                    ],
                    20 * 3, 0, false, false
                )
            }
        }

        /**
         * 
         * @param { Internal.Player } player 
         */
        function phantomLogic(player) {

            //未佩戴慧泽丝链
            if (!global.methods.slotResult(player, 'kubejs:memory_bracelet')) {

                //玩家经验不为0
                if (player.xp != 0) {
                    player.xp = Math.floor(0, player.xp - 10)
                    return
                }
                
                //玩家经验为0
                player.attack(player.damageSources().magic(), 6)
                return
            }
            
            for (let i = 0; i < slotsList.slots; i++) {

                let target = slotsList.equippedCurios.getStackInSlot(i)

                if (target.id != 'kubejs:memory_bracelet') continue

                //佩戴慧泽丝链
                //玩家经验不为0
                if (player.xp != 0) {
                    player.xp = Math.floor(0, player.xp - 10)
                    return
                }

                //慧泽丝链中存储的经验不为0
                if (target.nbt.StoredXP != 0) {
                    target.nbt.StoredXP = Math.floor(0, target.nbt.StoredXP - 10)
                    return
                }

                //玩家经验和慧泽丝链中存储的经验均为0
                player.attack(player.damageSources().magic(), 6)
                break
            }
        }

        //幻虚手衣 => 佩戴时检测玩家经验或慧泽丝链中存储的经验, 若两者均为0则持续受伤, 反之持续减少经验值
        if (global.methods.tickCountCheck(server, 12, 1.5)) {
            if (global.methods.slotResult(player, 'kubejs:phantom_glove')) {
                phantomLogic(player)
            }
        }

        //曦光缀玉 => 佩戴时若玩家位置光照等级>=7则每隔3秒修复一次装备
        if (global.methods.tickCountCheck(server, 12, 3)) {
            if (global.methods.slotResult(player, 'kubejs:light_crystal')) {
                if (player.block.light >= 7) {
                    player.inventory.allItems.forEach(item => {
                        if (
                            item.damageableItem
                            && item.damaged
                        ) {
                            item.damageValue -= 1
                        }
                    })
                }
            }
        }
        
        //时隙腕璇 => 读取玩家设置按键
        global.other.phaseBraceletModeName = KeyBindUtil.getKeyMapping('phaseBraceletMode').keyCode.name
        global.other.phaseBraceletLowerCase = global.other.phaseBraceletModeName
            .substring(global.other.phaseBraceletModeName.indexOf('key.keyboard.') + 13)
        global.other.phaseBraceletUpperCase = global.other.phaseBraceletLowerCase.slice(0, 1).toUpperCase()
            + global.other.phaseBraceletLowerCase.slice(1)

        if (global.methods.tickCountCheck(server, 11, 3)) {
            if (global.methods.slotResult(player, 'kubejs:phase_bracelet')) {
                for (let i = 0; i < slotsList.slots; i++) {
                    if (slotsList.equippedCurios.getStackInSlot(i).id == 'kubejs:phase_bracelet') {

                        let target = slotsList.equippedCurios.getStackInSlot(i)

                        target.nbt.hasTeleport = player.persistentData.teleportMode

                        if (
                            target.nbt.hasTeleport == true
                            && target.nbt?.Coordinate?.dimension
                            && target.nbt?.Coordinate?.x
                            && target.nbt?.Coordinate?.y
                            && target.nbt?.Coordinate?.z
                        ) {
                            player.teleportTo(
                                target.nbt?.Coordinate?.dimension,
                                target.nbt?.Coordinate?.x,
                                target.nbt?.Coordinate?.y,
                                target.nbt?.Coordinate?.z,
                                0, 0
                            )
                            target.nbt.hasTeleport = false
                            player.persistentData.teleportMode = false
                        }

                        if (
                            player.level.dimension.toString() == target.nbt?.Coordinate?.dimension
                            && player.x == target.nbt?.Coordinate?.x
                            && player.y == target.nbt?.Coordinate?.y
                            && player.z == target.nbt?.Coordinate?.z
                            && player.persistentData.hasSentTeleportMessage == false 
                        ) {
                            player.setStatusMessage(`§a传送完成!`)
                            player.persistentData.hasSentTeleportMessage = true
                        }

                        break
                    }
                }
            }
        }

    if (player.creative || player.spectator) return

    //玩家操作事件
        //玩家死亡惩罚补救
        if (player.maxHealth < 20) {
            if (
                player.foodData?.foodLevel >= 18
                && global.methods.tickCountCheck(server, 13, 3)
            ) {
                player.setMaxHealth(player.maxHealth + 20 * 0.15)
                player.heal(player.maxHealth)
            }
        }
    
        //药水相关
        if (global.methods.tickCountCheck(server, 12, 3)) {

            //玩家高草丛下蹲隐身
            if (
                player.crouching
                && player.block.id == 'minecraft:tall_grass'
            ) {
                player.potionEffects.add('minecraft:invisibility', 20 * 3, 0, false, false)
            }

            //玩家生命值降至阈值触发DeBuff
            if (player.health <= 3) {
                player.setStatusMessage('§c你的伤势已经极其严重, 请赶紧治疗!')
                player.potionEffects.add('minecraft:blindness', 20 * 3, 0, false, false)
                player.potionEffects.add('minecraft:nausea', 20 * 3, 0, false, false)
                player.potionEffects.add('minecraft:weakness', 20 * 3, 2, false, false)
                player.potionEffects.add('minecraft:slowness', 20 * 3, 2, false, false)
            } else if (player.health <= 10) {
                player.setStatusMessage('§e你的伤势开始影响意识, 注意治疗!')
                player.potionEffects.add('minecraft:weakness', 20 * 3, 0, false, false)
                player.potionEffects.add('minecraft:slowness', 20 * 3, 0, false, false)
            }

            //玩家在黑暗环境下获得缓慢及挖掘疲劳DeBuff
            if (
                player.block.light <= 7
                && !global.methods.slotResult(player, 'kubejs:luminous_pearl')
            ) {
                player.potionEffects.add('minecraft:slowness', 20 * 3, 0, false, false)
                player.potionEffects.add('minecraft:mining_fatigue', 20 * 3, 0, false, false)
            }

            //玩家浸入核废水中获得辐射效果
            if (player.isInFluidType(Fluid.getType('kubejs:nuclear_waste').fluidType)) {
                player.potionEffects.add('createnuclear:radiation', 20 * 3, 1, false, false)
            }

            //玩家在废土维度中, 未穿戴全套防护服且y>=43或露天, 获得辐射效果
            if (dimension.toString() == 'kubejs:wasteworld') {
                if (
                    !player.headArmorItem.id.includes('anti_radiation')
                    || !player.chestArmorItem.id.includes('anti_radiation')
                    || !player.legsArmorItem.id.includes('anti_radiation')
                    || !player.feetArmorItem.id.includes('anti_radiation')
                ) {
                    if (
                        player.y >= 43
                        || global.isUnderSunlight(level, player.block.down.pos)
                    ) {
                        player.potionEffects.add('createnuclear:radiation', 20 * 3, 0, false, false)
                    }
                }
            }
        }
            
        //世界相关
        if (global.methods.tickCountCheck(server, 11, 3)) {
            
            //玩家在下界背包中树苗变为枯萎的灌木
            if (dimension.toString() == 'minecraft:the_nether') {
                global.methods.stringListTransformation(Ingredient.of('#minecraft:saplings').itemIds).forEach(sapling => {

                    let samplingsSlot = player.inventory.findSlotMatchingItem(sapling)
                    let samplingNumber = player.inventory.getItem(samplingsSlot).count
                    let deadBush = Item.of('minecraft:dead_bush', samplingNumber)
            
                    player.inventory.setItem(samplingsSlot, deadBush)
                })
            }

            //玩家在废土淋雨损坏装备
            if (
                dimension.toString() == 'kubejs:wasteworld'
                && player.inRain
            ) {
                player.inventory.armor.forEach(armor => {
                    armor.damageValue += 1
                })

                if (player.inventory.armor.toArray().length < 4) {
                    player.setHealth(player.health - 1)
                }
                
                player.setStatusMessage('§c你正暴露在酸雨中, 请注意躲避!')
            }

            //玩家手上持有熔岩桶时概率燃烧
            if (
                player.mainHandItem.id == 'minecraft:lava_bucket'
                || player.offHandItem.id == 'minecraft:lava_bucket'
            ) {
                if (
                    Math.random() <= 0.01
                    && !global.methods.slotResult(player, 'kubejs:freezing_core')
                ) {
                    player.setSecondsOnFire(1)
                }
            }

            //玩家在营火16格范围内获得生命恢复效果
            
            let playerAABBForCampfire = player.boundingBox.inflate(16, 16, 16)
            
            level.getBlockStates(playerAABBForCampfire).forEach(blockState => {
                if (blockState.block.id == 'minecraft:campfire') {
                    player.potionEffects.add('minecraft:regeneration', 20 * 3, 0, false, false)
                }
            })
        }

        //流体相关
        if (global.methods.tickCountCheck(server, 10, 0.5)) {
            
            //玩家浸入熔融金属流体时燃烧
            Fluid.getTypes().forEach(fluid => {
                if (fluid.startsWith('kubejs:molten_')) {
                    if (player.isInFluidType(Fluid.getType(fluid).fluidType)) {
                        player.attack(2)
                        player.setSecondsOnFire(1)
                    }
                }
            })

            //玩家浸入酸液时持续受伤
            if (player.isInFluidType(Fluid.getType('kubejs:acid').fluidType)) {
                player.attack(2)
            }

            //玩家浸入嬗变龙血时持续受伤
            if (player.isInFluidType(Fluid.getType('kubejs:dragon_blood').fluidType)) {
                player.attack(player.damageSources().magic(), 2)
            }
        }
})