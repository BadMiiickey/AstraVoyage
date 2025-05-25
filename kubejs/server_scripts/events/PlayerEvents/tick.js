PlayerEvents.tick(event => {
    
    const { player, server } = event
    const { level } = player
    const { dimension } = level

    if (!player.alive) return

    var $CuriosApi = Java.loadClass('top.theillusivec4.curios.api.CuriosApi')

    let slotsList = $CuriosApi.getCuriosInventory(player).resolve().get()

    //玩家界面显示事件
        //玩家游戏界面显示杀戮进度
        let killPercent = 
            Math.min(20 + player.persistentData.healthFromKills + player.persistentData.healthFromTime, 500) / 500

        if (global.methods.tickCountCheck(server, 20, 10)) {
            player.paint({
                
                mobKillCountFrame: {
                    type: 'rectangle',
                    x: '$screenW / 2 + 94',
                    y: -3,
                    w: 125,
                    h: 16,
                    alignX: 'left',
                    alignY: 'bottom',
                    texture: 'kubejs:textures/gui/kill_count_frame.png',
                    visible: true
                },

                mobKillCountLevel: {
                    type: 'rectangle',
                    x: `$screenW / 2 + 105`,
                    y: -8,
                    w: 100 * killPercent,
                    h: 5,
                    alignX: 'left',
                    alignY: 'bottom',
                    texture: 'kubejs:textures/gui/kill_count_level.png',
                    visible: true
                }
            })
        }

        //玩家手持紫金材料工具时，实时显示当前位置光照等级
        function ostrumNBTCheck() {
            
            let mainHandItemMaterials = player.mainHandItem.nbt?.tic_materials
            let offHandItemMaterials = player.offHandItem.nbt?.tic_materials
            let ostrumCheck = false

            if (mainHandItemMaterials) {
                for (let material of mainHandItemMaterials) {
                    if (material == 'kubejs:ostrum') {
                        ostrumCheck = true
                        break
                    }
                }
            }

            if (offHandItemMaterials) {
                for (let material of offHandItemMaterials) {
                    if (material == 'kubejs:ostrum') {
                        ostrumCheck = true
                        break
                    }
                }
            }

            return ostrumCheck
        }
        
        if (global.methods.tickCountCheck(server, 20, 1.5)) {
            if (ostrumNBTCheck()) {
                player.paint({
                    lightLevel: {
                        type: 'text',
                        x: `$screenW / 2 - 142`,
                        y: -4.5,
                        alignX: 'left',
                        alignY: 'bottom',
                        color: 'yellow',
                        text: `光照等级: ${ player.block.light }`
                    }
                })
            } else {
                player.paint({
                    lightLevel: {
                        type: 'text',
                        x: `$screenW / 2 - 139`,
                        y: 10,
                        alignX: 'left',
                        alignY: 'bottom',
                        color: 'yellow',
                        text: `光照等级: ${ player.block.light }`
                    }
                })
            }
        }

    //玩家佩戴饰品事件    
        //吸金磁 => 正面Buff: 佩戴时吸引附近物品
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

        //流光水晶 => 正面Buff: 佩戴时若主手持有匠魂镐则获得急迫Buff
        if (global.methods.tickCountCheck(server, 18, 3)) {
            if (
                global.methods.slotResult(player, 'kubejs:luminous_pearl')
                && player.mainHandItem.id == 'tconstruct:pickaxe'
            ) {
                player.potionEffects.add('minecraft:haste', 20 * 3, 0, false, false)
            }
        }

        //冷冻核心 => 正面Buff: 佩戴时免疫灼烧, 若手中持有熔岩桶则免疫其负面效果, 对攻击的敌对生物造成冰冻DeBuff
        //冷冻核心 => 负面Buff: 佩戴时若玩家未穿戴具有保暖效果的装备则获得冷冻DeBuff
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
                    player.ticksFrozen = 200
                }
            }
        }
        
        //记忆手链 => 存储玩家经验, 并将其转化为伤害加成
        //记忆手链 => 可选功能: 是否自动存储经验, 默认否, G键切换
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

        //虚化手套 => 佩戴时检测玩家经验或记忆手链中存储的经验, 若两者均为0则持续受伤, 反之持续减少经验值
        if (global.methods.tickCountCheck(server, 12, 1.5)) {
            if (global.methods.slotResult(player, 'kubejs:phantom_glove').length) {
                if (global.methods.slotResult(player, 'kubejs:memory_bracelet')) {
                    for (let i = 0; i < slotsList.slots; i++) {

                        let target = slotsList.equippedCurios.getStackInSlot(i)

                        if (target.id == 'kubejs:memory_bracelet') {
                            if (player.xp == 0) {
                                if (target.nbt.StoredXP == 0) {
                                    player.attack(player.damageSources().magic(), 6)
                                } else {
                                    target.nbt.StoredXP = Math.floor(0, target.nbt.StoredXP - 10)
                                }
                            } else {
                                player.xp = Math.floor(0, player.xp - 10)
                            }
                            break
                        }
                    }
                } else {
                    if (player.xp == 0) {
                        player.attack(player.damageSources().magic(), 6)
                    } else {
                        player.xp = Math.floor(0, player.xp - 10)
                    }
                }
            }
        }

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
            if (
                player.health <= 3
                && !player.creative
            ) {
                player.setStatusMessage('§c你伤势已经极其严重, 请赶紧治疗!')
                player.potionEffects.add('minecraft:blindness', 20 * 3, 0, false, false)
                player.potionEffects.add('minecraft:nausea', 20 * 3, 0, false, false)
                player.potionEffects.add('minecraft:weakness', 20 * 3, 2, false, false)
                player.potionEffects.add('minecraft:slowness', 20 * 3, 2, false, false)
            } else if (
                player.health <= 10
                && !player.creative
            ) {
                player.setStatusMessage('§e你的伤势开始影响意识, 注意治疗!')
                player.potionEffects.add('minecraft:weakness', 20 * 3, 0, false, false)
                player.potionEffects.add('minecraft:slowness', 20 * 3, 0, false, false)
            }

            //玩家在黑暗环境下获得缓慢及挖掘疲劳DeBuff
            if (
                !player.creative
                && !player.spectator
                && player.block.light <= 7
                && !global.methods.slotResult(player, 'minecraft:lantern')
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
                && !player.creative
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
        }

        //流体相关
        if (global.methods.tickCountCheck(server, 10, 0.5)) {
            
            //玩家浸入熔融金属流体时燃烧
            global.definitionsArray.materialNames.forEach(materialName => {
                if (player.isInFluidType(Fluid.getType(`kubejs:molten_${ materialName }`).fluidType)) {
                    player.attack(2)
                    player.setSecondsOnFire(1)
                }
            })

            //玩家浸入酸液时持续受伤
            if (player.isInFluidType(Fluid.getType('kubejs:acid').fluidType)) {
                player.attack(2)
            }
        }
})