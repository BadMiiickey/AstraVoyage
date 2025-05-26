PlayerEvents.tick(event => {

    const { player, server } = event

    if (!player.alive) return

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

        if (global.methods.tickCountCheck(server, 19, 1.5)) {
            if (ostrumNBTCheck()) {
                player.paint({
                    lightLevel: {
                        type: 'text',
                        x: `$screenW / 2 - 142`,
                        y: -4.5,
                        alignX: 'left',
                        alignY: 'bottom',
                        color: 'yellow',
                        text: `光照等级: ${ player.block.light }`,
                        visible: true
                    }
                })
            } else {
                player.paint({
                    lightLevel: {
                        type: 'text',
                        x: `$screenW / 2 - 142`,
                        y: -4.5,
                        alignX: 'left',
                        alignY: 'bottom',
                        color: 'yellow',
                        text: `光照等级: ${ player.block.light }`,
                        visible: false
                    }
                })
            }
        }

        //火箭检查结构正确性显示
    /* player.tell('§e火箭检查结果:');
    player.tell(`§e支柱: ${pillarResult}/43 ${pillarResult == 43 ? '§a✓' : '§c✗'}`)
    player.tell(`§e楼梯: ${stairsResult}/16 ${stairsResult == 16 ? '§a✓' : '§c✗'}`)
    player.tell(`§e台阶: ${slabResult}/4 ${slabResult == 4 ? '§a✓' : '§c✗'}`)
    player.tell(`§e铁路外壳: ${railwayResult}/6 ${railwayResult == 6 ? '§a✓' : '§c✗'}`)
    player.tell(`§e按钮: ${buttonResult}/2 ${buttonResult == 2 ? '§a✓' : '§c✗'}`)
    player.tell(`§e钢块: ${blockResult}/18 ${blockResult == 18 ? '§a✓' : '§c✗'}`)
    player.tell(`§e强化玻璃: ${glassResult}/2 ${glassResult == 2 ? '§a✓' : '§c✗'}`)
    player.tell(`§e钢板: ${platingResult}/8 ${platingResult == 8 ? '§a✓' : '§c✗'}`)
    player.tell(`§e避雷针: ${lightningRodResult}/1 ${lightningRodResult == 1 ? '§a✓' : '§c✗'}`)
    
    player.tell(`§e钢支柱: ${pillarResult}/43 ${pillarResult == 43 ? '§a✓' : '§c✗'}`)
    player.tell(`§e钢板台阶: ${slabResult}/4 ${slabResult == 4 ? '§a✓' : '§c✗'}`)
    player.tell(`§e戴斯板台阶: ${deshSlabResult}/4 ${deshSlabResult == 4 ? '§a✓' : '§c✗'}`)
    player.tell(`§e钢板楼梯: ${stairsResult}/8 ${stairsResult == 8 ? '§a✓' : '§c✗'}`)
    player.tell(`§e戴斯板楼梯: ${deshStairsResult}/4 ${deshStairsResult == 4 ? '§a✓' : '§c✗'}`)
    player.tell(`§e钢块: ${blockResult}/4 ${blockResult == 4 ? '§a✓' : '§c✗'}`)
    player.tell(`§e发光戴斯柱: ${glowingPillarResult}/4 ${glowingPillarResult == 4 ? '§a✓' : '§c✗'}`)
    player.tell(`§e戴斯块: ${deshBlockResult}/18 ${deshBlockResult == 18 ? '§a✓' : '§c✗'}`)
    player.tell(`§e强化玻璃: ${glassResult}/2 ${glassResult == 2 ? '§a✓' : '§c✗'}`)
    player.tell(`§e钢板: ${platingResult}/24 ${platingResult == 24 ? '§a✓' : '§c✗'}`)
    player.tell(`§e避雷针: ${lightningRodResult}/1 ${lightningRodResult == 1 ? '§a✓' : '§c✗'}`)*/
})