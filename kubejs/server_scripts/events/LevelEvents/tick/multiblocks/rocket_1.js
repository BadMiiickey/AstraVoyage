LevelEvents.tick(event => {

    const { server } = event

    const rocket_1Check = {
        /**
         * 
         * @param {Internal.BlockContainerJS} rocket_1
         */
        checkAllDirections(rocket_1) {

            let direction = 0

            if (rocket_1.offset(1, -6, 0).id == 'createnuclear:reinforced_glass') {
                direction = 0
            } else if (rocket_1.offset(0, -6, 1).id == 'createnuclear:reinforced_glass') {
                direction = 1
            } else if (rocket_1.offset(-1, -6, 0).id == 'createnuclear:reinforced_glass') {
                direction = 2
            } else if (rocket_1.offset(0, -6, -1).id == 'createnuclear:reinforced_glass') {
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
         * 
         * @param {Internal.BlockContainerJS} rocket_1
         */
        steelPillar(rocket_1) {

            let checkNumber = 0

            for (let dy = -1; dy >= -12; dy--) {
                if (dy >= -3 && dy <= -1) {
                    if (rocket_1.offset(0, dy, 0).id == 'ad_astra:steel_pillar') {
                        checkNumber++
                    }
                } else if (dy <= -4 && dy >= -8) {
                    for (let dx of [-1, 1]) {
                        for (let dz of [-1, 1]) {
                            if (rocket_1.offset(dx, dy, dz).id == 'ad_astra:steel_pillar') {
                                checkNumber++
                            }
                        }
                    }
                } else {
                    if (dy >= -11) {
                        for (let dx of [-2, 2]) {
                            for (let dz of [-2, 2]) {
                                if (rocket_1.offset(dx, dy, dz).id == 'ad_astra:steel_pillar') {
                                    checkNumber++
                                }
                            }
                        }
                    }
                    for (let dx of [-3, 3]) {
                        for (let dz of [-3, 3]) {
                            if (rocket_1.offset(dx, dy, dz).id == 'ad_astra:steel_pillar') {
                                checkNumber++
                            }
                        }
                    }
                }
            }

            return checkNumber//应为43
        },
        /**
         * 
         * @param {Internal.BlockContainerJS} rocket_1
         */
        steelPlatingSlab(rocket_1) {

            let checkNumber = 0

            for (let dx of [-2, 2]) {
                for (let dz of [-2, 2]) {
                    if (rocket_1.offset(dx, -8, dz).id == 'ad_astra:steel_plating_slab') {
                        checkNumber++
                    }
                }
            }

            return checkNumber//应为4
        },

        /**
         * 
         * @param {Internal.BlockContainerJS} rocket_1
         */
        steelPlatingStairs(rocket_1) {

            let checkNumber = 0

            for (let dy of [-3, -10]) {
                for (let dx of [-1, 0, 1]) {
                    for (let dz of [-1, 0, 1]) {
                        if (dx == 0 && dz == 0) {
                            continue
                        } else {
                            if (rocket_1.offset(dx, dy, dz).id == 'ad_astra:steel_plating_stairs') {
                                checkNumber++
                            }
                        }
                    }
                }
            }

            return checkNumber//应为16
        },


        //接下来这些都要设置四个方向的数据


        /**
         * 
         * @param {Internal.BlockContainerJS} rocket_1
         */
        railwayCasing(rocket_1) {

            let checkNumber = 0
            const direction = rocket_1Check.checkAllDirections(rocket_1)

            for (let dx of [-3, 0, 3]) {
                for (let dz of [-3, 3]) {

                    const [rotatedDx, rotatedDz] = rocket_1Check.rotateCoordinates(dx, dz, direction)

                    if (rotatedDx == 0) {

                        if (rocket_1.offset(rotatedDx, -8, (rotatedDz / Math.abs(rotatedDz)) * (Math.abs(rotatedDz) - 1)).id == 'create:railway_casing') {
                            checkNumber++
                        }
                    } else {
                        if (rocket_1.offset(rotatedDx, -8, rotatedDz).id == 'create:railway_casing') {
                            checkNumber++
                        }
                    }
                }
            }

            return checkNumber//应为6
        },

        /**
         * 
         * @param {Internal.BlockContainerJS} rocket_1
         */
        steelPlatingButton(rocket_1) {

            let checkNumber = 0
            const direction = rocket_1Check.checkAllDirections(rocket_1)

            for (let dz of [-2, 2]) {

                let [rotatedDx, rotatedDz] = rocket_1Check.rotateCoordinates(0, dz, direction)

                if (rocket_1.offset(rotatedDx, -7, rotatedDz).id == 'ad_astra:steel_plating_button') {
                    checkNumber++
                }
            }

            return checkNumber//应为2
        },
        /**
         * 
         * @param {Internal.BlockContainerJS} rocket_1
         */
        steelBlock(rocket_1) {

            let checkNumber = 0
            const direction = rocket_1Check.checkAllDirections(rocket_1)

            for (let dy of [-4, -5, -6, -7, -8]) {
                for (let dx of [-1, 1]) {

                    let [rotatedDx, rotatedDz] = rocket_1Check.rotateCoordinates(dx, 0, direction)

                    if ((dy == -6 || dy == -7) && rotatedDx == 1) {
                        continue
                    } else {
                        if (rocket_1.offset(rotatedDx, dy, rotatedDz).id == 'ad_astra:steel_block') {
                            checkNumber++
                        }
                    }
                }

                for (let dz of [-1, 1]) {

                    let [rotatedDx, rotatedDz] = rocket_1Check.rotateCoordinates(0, dz, direction)

                    if (rocket_1.offset(rotatedDx, dy, rotatedDz).id == 'ad_astra:steel_block') {
                        checkNumber++
                    }
                }
            }

            return checkNumber//应为18
        },
        /**
         * 
         * @param {Internal.BlockContainerJS} rocket_1
         */
        reinforcedGlass(rocket_1) {

            let checkNumber = 0
            const direction = rocket_1Check.checkAllDirections(rocket_1)

            // 玻璃只会出现在四个方向之一
            for (let dy of [-6, -7]) {
                // 四个方向的相对坐标
                for (let [dx, dz] of [[1, 0], [0, 1], [-1, 0], [0, -1]]) {

                    let [rotatedDx, rotatedDz] = rocket_1Check.rotateCoordinates(dx, dz, direction)

                    if (rocket_1.offset(rotatedDx, dy, rotatedDz).id == 'createnuclear:reinforced_glass') {
                        checkNumber++
                    }
                }
            }
            return checkNumber // 应为2
        },
        /**
         * 
         * @param {Internal.BlockContainerJS} rocket_1
         */
        steelPlating(rocket_1) {

            let checkNumber = 0
            const direction = rocket_1Check.checkAllDirections(rocket_1)

            for (let dx of [-1, 0, 1]) {
                for (let dz of [-1, 0, 1]) {

                    const [rotatedDx, rotatedDz] = rocket_1Check.rotateCoordinates(dx, dz, direction)

                    if (rocket_1.offset(rotatedDx, -9, rotatedDz).id == 'ad_astra:steel_plating') {
                        checkNumber++
                    }
                }
            }

            return checkNumber//应为9
        }
    }

    if (global.methods.tickCountCheck(server, 2, 1)) {
        if (global.mapArray.rocket_1MapArray && global.mapArray.rocket_1MapArray.length > 0) {
            global.mapArray.rocket_1MapArray.forEach(rocket_1 => {
                server.players.forEach(player => {
                    if (player.level.dimension == rocket_1.dimension) {

                        let block = player.level.getBlock(rocket_1.pos)

                        if (block.id == 'minecraft:lightning_rod') {

                            // 检查是否有戴斯块 (二阶火箭特有)
                            let hasDeshBlocks = false;
                            for (let dy = -5; dy >= -9; dy--) {
                                if (block.offset(1, dy, 0).id.includes('desh') ||
                                    block.offset(-1, dy, 0).id.includes('desh')) {
                                    hasDeshBlocks = true;
                                    break;
                                }
                            }
                            if (hasDeshBlocks) {
                                // 什么都不做，这个在二阶火箭脚本中处理
                            } else {
                                let pillarResult = rocket_1Check.steelPillar(block)
                                let stairsResult = rocket_1Check.steelPlatingStairs(block)
                                let slabResult = rocket_1Check.steelPlatingSlab(block)
                                let railwayResult = rocket_1Check.railwayCasing(block)
                                let buttonResult = rocket_1Check.steelPlatingButton(block)
                                let blockResult = rocket_1Check.steelBlock(block)
                                let glassResult = rocket_1Check.reinforcedGlass(block)
                                let platingResult = rocket_1Check.steelPlating(block)

                                player.tell(`§7一阶火箭检测结果：`)
                                player.tell(`§7- 钢支柱: §e${pillarResult}/43`)
                                player.tell(`§7- 钢板楼梯: §e${stairsResult}/16`)
                                player.tell(`§7- 钢板台阶: §e${slabResult}/4`)
                                player.tell(`§7- 铁路外壳: §e${railwayResult}/6`)
                                player.tell(`§7- 钢板按钮: §e${buttonResult}/2`)
                                player.tell(`§7- 钢块: §e${blockResult}/18`)
                                player.tell(`§7- 强化玻璃: §e${glassResult}/2`)
                                player.tell(`§7- 钢板: §e${platingResult}/9`)

                                if (
                                    pillarResult == 43
                                    && stairsResult == 16
                                    && slabResult == 4
                                    && railwayResult == 6
                                    && buttonResult == 2
                                    && blockResult == 18
                                    && glassResult == 2
                                    && platingResult == 9
                                ) {
                                    if (!rocket_1.hasBuildCorrectly) {
                                        rocket_1.hasBuildCorrectly = true
                                        player.setStatusMessage('§a一阶火箭搭建完成!')
                                    }
                                } else {
                                    if (!rocket_1.failedMessageHasSent) {
                                        rocket_1.failedMessageHasSent = true
                                        player.setStatusMessage('§c一阶火箭尚未搭建完成!')
                                    }

                                    if (rocket_1.hasBuildCorrectly) {
                                        rocket_1.hasBuildCorrectly = false
                                        rocket_1.failedMessageHasSent = false
                                    }
                                }
                            }
                        }
                    }
                }
                )
            }
            )
        }
    }
})
