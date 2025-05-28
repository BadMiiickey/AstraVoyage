PlayerEvents.tick(event => {

    const { player, server } = event

    const $ = Java.loadClass('dev.latvian.mods.kubejs.client.painter.screen.PaintScreenEventJS')


    if (!player.alive) return

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
            player.paint({ lightLevel: { visible: false } })
        }
    }

    //发射台检查结构正确性显示
    if (global.methods.tickCountCheck(server, 18, 1.5)) {
        if (
            global.mapArray.launchPadsMapArray
            && global.mapArray.launchPadsMapArray.length > 0
        ) {
            player.persistentData.launchPadPaint = {}
            player.persistentData.launchPadPaint.launchPadBackground = {
                type: 'rectangle',
                x: 5,
                y: 42,
                w: 120,
                h: 125,
                alignX: 'left',
                alignY: 'top',
                texture: 'kubejs:textures/gui/background.png',
                visible: true
            }

            for (let launchPad of global.mapArray.launchPadsMapArray) {
                for (let result in launchPad) {
                    if (global.config.launchPadsResult[result]) {

                        /**
                         * @typedef { object } LaunchPadDefinition
                         * @property { string } name
                         * @property { number } target
                         */

                        /** @type { LaunchPadDefinition } */
                        let definition = global.config.launchPadsResult[result]

                        /** @type { number } */
                        let actual = launchPad[result]
                        let text = `§8${ definition.name }: ${ actual } / §a${ definition.target }`
                        let check = actual == definition.target ? '§a§l✓' : '§c§l✗'

                        player.persistentData.launchPadPaint[`launchPadText_${result}`] = {
                            type: 'text',
                            x: 30,
                            y: 15 + Object.keys(launchPad).indexOf(result) * 10,
                            alignX: 'left',
                            alignY: 'top',
                            text: text,
                            visible: true
                        }

                        player.persistentData.launchPadPaint[`launchPadCheck_${result}`] = {
                            type: 'text',
                            x: 95,
                            y: 15 + Object.keys(launchPad).indexOf(result) * 10,
                            alignX: 'left',
                            alignY: 'top',
                            text: check,
                            visible: true
                        }
                    }
                }

                break
            }

            player.paint(player.persistentData.launchPadPaint)
        } else {
            for (let element in player.persistentData.launchPadPaint) {
                player.persistentData.launchPadPaint[element] = { visible: false }
            }

            player.paint(player.persistentData.launchPadPaint)
        }
    }

    //火箭检查结构正确性显示
    if (global.methods.tickCountCheck(server, 17, 1.5)) {

        //一阶火箭
        if (
            global.mapArray.steelTanksMapArray
            && global.mapArray.steelTanksMapArray.length > 0
        ) {
            player.persistentData.steelTankPaint = {}
            player.persistentData.steelTankPaint.steelTankBackground = {
                type: 'rectangle',
                x: 5,
                y: 42,
                w: 120,
                h: 135,
                alignX: 'left',
                alignY: 'top',
                texture: 'kubejs:textures/gui/background.png',
                visible: true
            }

            for (let steelTank of global.mapArray.steelTanksMapArray) {
                for (let result in steelTank) {
                    if (global.config.steelTanksResult[result]) {

                        /**
                         * @typedef { object } SteelTankDefinition
                         * @property { string } name
                         * @property { number } target
                         */

                        /** @type { SteelTankDefinition } */
                        let definition = global.config.steelTanksResult[result]

                        /** @type { number } */
                        let actual = steelTank[result]
                        let text = `§8${ definition.name }: ${ actual } / §a${ definition.target }`
                        let check = actual == definition.target ? '§a§l✓' : '§c§l✗'

                        player.persistentData.steelTankPaint[`steelTankText_${result}`] = {
                            type: 'text',
                            x: 30,
                            y: 15 + Object.keys(steelTank).indexOf(result) * 10,
                            alignX: 'left',
                            alignY: 'top',
                            text: text,
                            visible: true
                        }

                        player.persistentData.steelTankPaint[`steelTankCheck_${result}`] = {
                            type: 'text',
                            x: 95,
                            y: 15 + Object.keys(steelTank).indexOf(result) * 10,
                            alignX: 'left',
                            alignY: 'top',
                            text: check,
                            visible: true
                        }
                    }
                }

                break
            }

            player.paint(player.persistentData.steelTankPaint)

        } else {
            for (let element in player.persistentData.steelTankPaint) {
                player.persistentData.steelTankPaint[element] = { visible: false }
            }

            player.paint(player.persistentData.steelTankPaint)
        }

        //二阶火箭
        if (
            global.mapArray.deshTanksMapArray
            && global.mapArray.deshTanksMapArray.length > 0
        ) {
            player.persistentData.deshTankPaint = {}
            player.persistentData.deshTankPaint.deshTankBackground = {
                type: 'rectangle',
                x: 5,
                y: 42,
                w: 120,
                h: 150,
                alignX: 'left',
                alignY: 'top',
                texture: 'kubejs:textures/gui/background.png',
                visible: true
            }

            for (let deshTank of global.mapArray.deshTanksMapArray) {
                for (let result in deshTank) {
                    if (global.config.deshTanksResult[result]) {

                        /** @type { DeshTankDefinition } */
                        let definition = global.config.deshTanksResult[result]

                        /** @type { number } */
                        let actual = deshTank[result]
                        let text = `§8${ definition.name }: ${ actual } / §a${ definition.target }`
                        let check = actual == definition.target ? '§a§l✓' : '§c§l✗'

                        player.persistentData.deshTankPaint[`deshTankText_${result}`] = {
                            type: 'text',
                            x: 30,
                            y: 7 + Object.keys(deshTank).indexOf(result) * 10,
                            alignX: 'left',
                            alignY: 'top',
                            text: text,
                            visible: true
                        }

                        player.persistentData.deshTankPaint[`deshTankCheck_${result}`] = {
                            type: 'text',
                            x: 95,
                            y: 7 + Object.keys(deshTank).indexOf(result) * 10,
                            alignX: 'left',
                            alignY: 'top',
                            text: check,
                            visible: true
                        }
                    }
                }

                break
            }

            player.paint(player.persistentData.deshTankPaint)

        } else {
            for (let element in player.persistentData.deshTankPaint) {
                player.persistentData.deshTankPaint[element] = { visible: false }
            }

            player.paint(player.persistentData.deshTankPaint)
        }
    }
})