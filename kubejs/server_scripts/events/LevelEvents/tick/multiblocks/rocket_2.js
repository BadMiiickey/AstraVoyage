LevelEvents.tick(event => {

    const { server } = event

    const rocket_2Check = {

        /**
         * 检查所有可能的方向
         * @param {Internal.BlockContainerJS} rocket_2
         */
        checkAllDirections(rocket_2) {

            let direction = 0            // 根据强化玻璃的位置判断方向
            if (rocket_2.offset(1, 2, 0).id == 'createnuclear:reinforced_glass') {
                direction = 0
            } else if (rocket_2.offset(0, 2, 1).id == 'createnuclear:reinforced_glass') {
                direction = 1
            } else if (rocket_2.offset(-1, 2, 0).id == 'createnuclear:reinforced_glass') {
                direction = 2
            } else if (rocket_2.offset(0, 2, -1).id == 'createnuclear:reinforced_glass') {
                direction = 3
            }

            return direction
        },

        /**
         * 根据方向旋转坐标
         * @param {number} dx
         * @param {number} dz
         * @param {number} direction
         * @returns {[number, number]}
         */
        rotateCoordinates(dx, dz, direction) {
            if (direction == 0) return [dx, dz]
            if (direction == 1) return [dz, -dx]
            if (direction == 2) return [-dx, -dz]
            if (direction == 3) return [-dz, dx]
        },

        /**
         * 检查钢支柱
         * @param {Internal.BlockContainerJS} rocket_2
         */
        steelPillar(rocket_2) {

            let checkNumber = 0            // 顶部的钢支柱 (11-13)
            for (let dy = 10; dy >= 8; dy--) {
                if (rocket_2.offset(0, dy, 0).id == 'ad_astra:steel_pillar') {
                    checkNumber++
                }
            }

            // 主体部分的钢支柱 (5-9)
            for (let dy = 6; dy >= 2; dy--) {
                for (let dx of [-1, 1]) {
                    for (let dz of [-1, 1]) {
                        if (rocket_2.offset(dx, dy, dz).id == 'ad_astra:steel_pillar') {
                            checkNumber++
                        }
                    }
                }
            }

            // 支撑脚部分 (1-4)
            for (let dy = 1; dy >= -2; dy--) {

                // 外层支柱
                for (let dx of [-3, 3]) {
                    for (let dz of [-3, 3]) {
                        if (rocket_2.offset(dx, dy, dz).id == 'ad_astra:steel_pillar') {
                            checkNumber++
                        }
                    }
                }

                // 内层支柱 (仅2-3层)
                if (dy >= -1 && dy <= 0) {
                    for (let dx of [-2, 2]) {
                        for (let dz of [-2, 2]) {
                            if (rocket_2.offset(dx, dy, dz).id == 'ad_astra:steel_pillar') {
                                checkNumber++
                            }
                        }
                    }
                }
            }
            // 
            return checkNumber; // 应为 43
            // 
            return checkNumber // 应为 43
        },

        /**
         * 检查钢板台阶
         * @param {Internal.BlockContainerJS} rocket_2
         */
        steelPlatingSlab(rocket_2) {

            let checkNumber = 0            // 底座台阶
            for (let dx of [-2, 2]) {
                for (let dz of [-2, 2]) {
                    if (rocket_2.offset(dx, 1, dz).id == 'ad_astra:steel_plating_slab') {
                        checkNumber++
                    }
                }
            }

            return checkNumber // 应为 4
        },

        /**
         * 检查戴斯板台阶
         * @param {Internal.BlockContainerJS} rocket_2
         */
        deshPlatingSlab(rocket_2) {

            let checkNumber = 0
            let direction = rocket_2Check.checkAllDirections(rocket_2)

            // 雷达部分的戴斯板台阶
            for (let dx of [-2, 0, 2]) {
                for (let dz of [-2, 0, 2]) {
                    if (dx == 0 || dz == 0) {
                        if (dx == 0 && dz == 0) {
                            continue
                        } else {

                            let [rotatedDx, rotatedDz] = rocket_2Check.rotateCoordinates(dx, dz, direction)

                            if (rocket_2.offset(rotatedDx, 1, rotatedDz).id == 'ad_astra:desh_plating_slab') {
                                checkNumber++
                            }
                        }
                    }
                }
            }

            return checkNumber // 应为 4
        },

        /**
         * 检查钢板楼梯
         * @param {Internal.BlockContainerJS} rocket_2
         */
        steelPlatingStairs(rocket_2) {

            let checkNumber = 0
            let direction = rocket_2Check.checkAllDirections(rocket_2)            // 喷嘴部分楼梯
            let coordinate_1 = [
                [-1, -1, -1], [-1, -1, 0], [-1, -1, 1],
                [0, -1, 1], [1, -1, 1], [1, -1, 0],
                [1, -1, -1], [0, -1, -1]
            ]

            for (let i = 0; i < 8; i++) {
                if (i % 2 == 0) {

                    let [rotatedDx, rotatedDz]
                        = rocket_2Check.rotateCoordinates(coordinate_1[i][0], coordinate_1[i][2], direction)

                    if (rocket_2.offset(rotatedDx, coordinate_1[i][1], rotatedDz).id == 'ad_astra:steel_plating_stairs') {
                        checkNumber++
                    }
                }
            }

            // 顶部楼梯
            let coordinate_2 = [
                [-1, 8, -1], [-1, 8, 0], [-1, 8, 1],
                [0, 8, 1], [1, 8, 1], [1, 8, 0],
                [1, 8, -1], [0, 8, -1]
            ]

            for (let i = 0; i < 8; i++) {
                if (i % 2 == 0) {

                    let [rotatedDx, rotatedDz]
                        = rocket_2Check.rotateCoordinates(coordinate_2[i][0], coordinate_2[i][2], direction)

                    if (rocket_2.offset(rotatedDx, coordinate_2[i][1], rotatedDz).id == 'ad_astra:steel_plating_stairs') {
                        checkNumber++
                    }
                }
            }

            return checkNumber // 应为 8
        },

        /**
         * 检查戴斯板楼梯
         * @param {Internal.BlockContainerJS} rocket_2
         */
        deshPlatingStairs(rocket_2) {

            let checkNumber = 0
            let direction = rocket_2Check.checkAllDirections(rocket_2)            // 顶部楼梯
            let coordinate_2 = [
                [-1, 8, -1], [-1, 8, 0], [-1, 8, 1],
                [0, 8, 1], [1, 8, 1], [1, 8, 0],
                [1, 8, -1], [0, 8, -1]
            ]

            for (let i = 0; i < 8; i++) {
                if (i % 2 != 0) {

                    let [rotatedDx, rotatedDz]
                        = rocket_2Check.rotateCoordinates(coordinate_2[i][0], coordinate_2[i][2], direction)

                    if (rocket_2.offset(rotatedDx, coordinate_2[i][1], rotatedDz).id == 'ad_astra:desh_plating_stairs') {
                        checkNumber++
                    }
                }
            }

            return checkNumber // 应为 4
        },

        /**
         * 检查钢块
         * @param {Internal.BlockContainerJS} rocket_2
         */
        steelBlock(rocket_2) {

            let checkNumber = 0
            let direction = rocket_2Check.checkAllDirections(rocket_2)            // 雷达部分的钢块
            for (let dx of [-2, 0, 2]) {
                for (let dz of [-2, 0, 2]) {
                    if (dx == 0 || dz == 0) {
                        if (dx == 0 && dz == 0) {
                            continue
                        } else {

                            let [rotatedDx, rotatedDz] = rocket_2Check.rotateCoordinates(dx, dz, direction)

                            if (rocket_2.offset(rotatedDx, 0, rotatedDz).id == 'ad_astra:steel_block') {
                                checkNumber++
                            }
                        }
                    }
                }
            }

            return checkNumber // 应为 4
        },

        /**
         * 检查发光戴斯柱
         * @param {Internal.BlockContainerJS} rocket_2
         */
        glowingDeshPillar(rocket_2) {

            let checkNumber = 0            // 四个角的发光戴斯柱
            for (let dx of [-3, 3]) {
                for (let dz of [-3, 3]) {
                    if (rocket_2.offset(dx, 1, dz).id == 'ad_astra:glowing_desh_pillar') {
                        checkNumber++
                    }
                }
            }

            return checkNumber // 应为 4
        },

        /**
         * 检查戴斯块
         * @param {Internal.BlockContainerJS} rocket_2
         */
        deshBlock(rocket_2) {

            let checkNumber = 0
            let direction = rocket_2Check.checkAllDirections(rocket_2)

            // 主体四周的戴斯块
            for (let dy = 6; dy >= 2; dy--) {
                for (let dx of [-1, 1]) {

                    let [rotatedDx, rotatedDz] = rocket_2Check.rotateCoordinates(dx, 0, direction)

                    if ((dy == 4 || dy == 3) && rotatedDx == 1) {
                        continue
                    } else {
                        if (rocket_2.offset(rotatedDx, dy, rotatedDz).id == 'ad_astra:desh_block') {
                            checkNumber++
                        }
                    }
                }

                for (let dz of [-1, 1]) {

                    let [rotatedDx, rotatedDz] = rocket_2Check.rotateCoordinates(0, dz, direction)

                    if (rocket_2.offset(rotatedDx, dy, rotatedDz).id == 'ad_astra:desh_block') {
                        checkNumber++
                    }
                }
            }

            return checkNumber // 应为 18
        },

        /**
         * 检查强化玻璃
         * @param {Internal.BlockContainerJS} rocket_2
         */
        reinforcedGlass(rocket_2) {

            let checkNumber = 0
            let direction = rocket_2Check.checkAllDirections(rocket_2)            // 玻璃只会出现在四个方向之一
            for (let dy of [4, 3]) {
                // 四个方向的相对坐标
                for (let [dx, dz] of [[1, 0], [0, 1], [-1, 0], [0, -1]]) {

                    let [rotatedDx, rotatedDz] = rocket_2Check.rotateCoordinates(dx, dz, direction)

                    if (rocket_2.offset(rotatedDx, dy, rotatedDz).id == 'createnuclear:reinforced_glass') {
                        checkNumber++
                    }
                }
            }

            return checkNumber // 应为 2
        },

        /**
         * 检查钢板
         * @param {Internal.BlockContainerJS} rocket_2
         */
        steelPlating(rocket_2) {
            let checkNumber = 0            // 底座钢板
            for (let dx of [-1, 0, 1]) {
                for (let dz of [-1, 0, 1]) {
                    if (dx == 0 && dz == 0) {
                        continue
                    } else {
                        if (rocket_2.offset(dx, 0, dz).id == 'ad_astra:steel_plating') {
                            checkNumber++
                        }
                    }
                }
            }

            // 顶部钢板
            for (let dx of [-1, 0, 1]) {
                for (let dz of [-1, 0, 1]) {
                    if (dx == 0 && dz == 0) {
                        continue
                    } else {
                        if (rocket_2.offset(dx, 7, dz).id == 'ad_astra:steel_plating') {
                            checkNumber++
                        }
                    }
                }
            }

            // 控制台部分钢板
            for (let dx of [-1, 0, 1]) {
                for (let dz of [-1, 0, 1]) {
                    if (dx == 0 && dz == 0) {
                        continue
                    } else {
                        if (rocket_2.offset(dx, 1, dz).id == 'ad_astra:steel_plating') {
                            checkNumber++
                        }
                    }
                }
            }

            return checkNumber // 应为 25
        },

        /**
         * 
         * @param {Internal.BlockContainerJS} rocket_2
         */
        lightningRod(rocket_2) {

            let checkNumber = 0

            if (rocket_2.offset(0, 11, 0).id == 'minecraft:lightning_rod') {
                checkNumber++
            }

            return checkNumber//应为1
        }
    }

    if (global.methods.tickCountCheck(server, 3, 1)) {
        if (
            global.mapArray.deshTanksMapArray
            && global.mapArray.deshTanksMapArray.length > 0
        ) {
            global.mapArray.deshTanksMapArray.forEach(rocket_2 => {
                server.players.forEach(/** @param { Internal.Player } player */player => {
                    if (player.level.dimension == rocket_2.dimension) {

                        let block = player.level.getBlock(rocket_2.pos)

                        if (block.id == 'kubejs:desh_tank') {

                            let pillarResult = rocket_2Check.steelPillar(block)
                            let slabResult = rocket_2Check.steelPlatingSlab(block)
                            let deshSlabResult = rocket_2Check.deshPlatingSlab(block)
                            let stairsResult = rocket_2Check.steelPlatingStairs(block)
                            let deshStairsResult = rocket_2Check.deshPlatingStairs(block)
                            let blockResult = rocket_2Check.steelBlock(block)
                            let glowingPillarResult = rocket_2Check.glowingDeshPillar(block)
                            let deshBlockResult = rocket_2Check.deshBlock(block)
                            let glassResult = rocket_2Check.reinforcedGlass(block)
                            let platingResult = rocket_2Check.steelPlating(block)
                            let lightningRodResult = rocket_2Check.lightningRod(block)

                            // Debug information for rocket components
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
                            player.tell(`§e避雷针: ${lightningRodResult}/1 ${lightningRodResult == 1 ? '§a✓' : '§c✗'}`)

                            if (
                                pillarResult == 43
                                && slabResult == 4
                                && deshSlabResult == 4
                                && stairsResult == 8
                                && deshStairsResult == 4
                                && blockResult == 4
                                && glowingPillarResult == 4
                                && deshBlockResult == 18
                                && glassResult == 2
                                && platingResult == 24
                                && lightningRodResult == 1
                            ) {
                                if (!rocket_2.hasBuilt) {
                                    rocket_2.hasBuilt = true
                                }

                                if (!rocket_2.hasBuildCorrectly) {
                                    rocket_2.hasBuildCorrectly = true
                                    player.setStatusMessage('§a二阶火箭搭建完成!')
                                }
                            } else {
                                if (!rocket_2.failedMessageHasSent) {
                                    rocket_2.failedMessageHasSent = true
                                    player.setStatusMessage('§c二阶火箭尚未搭建完成!')
                                }

                                if (rocket_2.hasBuilt) {
                                    rocket_2.hasBuilt = false
                                }

                                if (rocket_2.hasBuildCorrectly) {
                                    rocket_2.hasBuildCorrectly = false
                                    rocket_2.failedMessageHasSent = false
                                }
                            }

                        }
                    }
                })
            })
        }
    }
})