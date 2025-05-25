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
                    text: `光照等级: ${player.block.light}`
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
                    text: `光照等级: ${player.block.light}`
                }
            })
        }
    }

    //火箭判定是否开始建造
    if (global.methods.tickCountCheck(server, 20, 1)) {
        // 获取玩家当前区块的起始坐标
        let chunkX = Math.floor(player.x / 16) * 16
        let chunkZ = Math.floor(player.z / 16) * 16
        let yMin = 0
        let yMax = 255

        let found = false
        for (let x = chunkX; x < chunkX + 16; x++) {
            for (let z = chunkZ; z < chunkZ + 16; z++) {
                for (let y = yMin; y <= yMax; y++) {
                    let block = player.level.getBlock(x, y, z)
                    if (block.id == 'minecraft:lightning_rod') {
                        found = true
                        break
                    }
                }
                if (found) break
            }
            if (found) break
        }

        if (found) {
            if (global.mapArray.rocket_1MapArray.isBuilding) {
                const screenWidth = event.screen.getWidth()
                const screenHeight = event.screen.getHeight()

                const textColor = 0xFFFFFF00

                const font = event.screen.getFont()
                const textWidth = font.width(text)
                const textHeight = font.lineHeight

                const padding = 8;

                const rectWidth = textWidth + padding * 2
                const rectHeight = textHeight + padding * 2
                const rectX = (screenWidth - rectWidth) / 2
                const rectY = (screenHeight - rectHeight) / 2

                const rectColor = 0x80000000

                player.paint({
                    retangle: {
                        type: 'rectangle',
                        x: rectX,
                        y: rectY,
                        w: rectWidth,
                        h: rectHeight,
                        color: rectColor
                    }
                })

                painter.drawString({
                    rocket_1: {
                        type: 'text',
                        text: '火箭正在建造中',
                        x: rectX + padding,
                        y: rectY + padding,
                        color: textColor,
                    }
                });
            }
        }
    }
})