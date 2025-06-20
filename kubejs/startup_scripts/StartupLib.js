//priority: 9999999

var $Boolean = Java.loadClass('java.lang.Boolean')
var $BlockStateProperties = Java.loadClass('net.minecraft.world.level.block.state.properties.BlockStateProperties')
var $BlockBuilder = Java.loadClass('dev.latvian.mods.kubejs.block.BlockBuilder')

const multiblockCheck = {

    /**
     * 
     * @param { Internal.BlockEntityJS } blockEntity 
     */
    platform(blockEntity) {

        let block = blockEntity.block

        /**
         * 
         * @param { Internal.BlockContainerJS } block 
         */
        function frameParticleForecast(block) {

            let dxs = [19, -19]
            let dzs = [20, -18]
            let dys = [0, 15]

            dys.forEach(dy => {
                for (let x = -18; x <= 19; x++) {
                    dzs.forEach(dz => {
                        block.level.spawnParticles(
                            'minecraft:end_rod', false,
                            block.x + x, block.y + 0.25 + dy, block.z + dz,
                            0, 0, 0,
                            10, 0
                        )
                    })
                }

                for (let z = -18; z <= 20; z++) {
                    dxs.forEach(dx => {
                        block.level.spawnParticles(
                            'minecraft:end_rod', false,
                            block.x + dx, block.y + 0.25 + dy, block.z + z,
                            0, 0, 0,
                            10, 0
                        )
                    })
                }
            })

            for (let y = 0; y <= 15; y++) {
                dxs.forEach(dx => {
                    dzs.forEach(dz => {
                        block.level.spawnParticles(
                            'minecraft:end_rod', false,
                            block.x + dx, block.y + 0.25 + y, block.z + dz,
                            0, 0, 0,
                            10, 0
                        )
                    })
                })
            }
        }

        frameParticleForecast(block)
    },

    /**
     * 
     * @param { Internal.BlockEntityJS } blockEntity 
     */
    diversionChannel(blockEntity) {

        let block = blockEntity.block

        const blockCheck = {

            /**
             * 
             * @param { Internal.BlockContainerJS } block 
             */
            launchPad(block) {

                let checkNumber = 0

                if (block.offset(0, 5, 0).id == 'ad_astra:launch_pad') {
                    checkNumber++
                }

                return checkNumber  //应为1
            },

            /**
             * 
             * @param { Internal.BlockContainerJS } block 
             */
            andesiteAlloyBlock(block) {

                let checkNumber = 0

                for (let dx = -1; dx <= 1; dx++) {
                    for (let dz = -1; dz <= 1; dz++) {
                        if (!(dx == 0 && dz == 0)) {
                            if (block.offset(dx, 4, dz).id == 'create:andesite_alloy_block') {
                                checkNumber++
                            }
                        }
                    }
                }

                return checkNumber  //应为8
            },

            /**
             * 
             * @param { Internal.BlockContainerJS } block 
             */
            andesiteScaffolding(block) {
                
                let checkNumber = 0

                for (let dx of [-2, 2]) {
                    for (let dy of [5, 6]) {
                        for (let dz of [-2, 2]) {
                            if (block.offset(dx, dy, dz).id == 'create:andesite_scaffolding') {
                                checkNumber++
                            }
                        }
                    }
                }

                return checkNumber  //应为8
            },

            /**
             * 
             * @param { Internal.BlockContainerJS } block 
             */
            encasedFluidPipe(block) {
                
                let checkNumber = 0

                for (let dx of [-2, 2]) {
                    for (let dz of [-2, 2]) {
                        
                        let upperCheckBlock = block.offset(dx, 4, dz)
                        let lowerCheckBlock_1 = block.offset(2 * dx, 3, dz)
                        let lowerCheckBlock_2 = block.offset(dx, 3, 2 * dz)
                        let upperEntityData = upperCheckBlock.entityData
                        let lowerEntityData_1 = lowerCheckBlock_1.entityData
                        let lowerEntityData_2 = lowerCheckBlock_2.entityData

                        if (
                            upperCheckBlock.id == 'create:encased_fluid_pipe'
                            || upperEntityData?.east?.Flow?.FluidName == 'minecraft:water'
                            || upperEntityData?.west?.Flow?.FluidName == 'minecraft:water'
                            || upperEntityData?.south?.Flow?.FluidName == 'minecraft:water'
                            || upperEntityData?.north?.Flow?.FluidName == 'minecraft:water'
                        ) {
                            checkNumber++
                        }

                        if (
                            lowerCheckBlock_1.id == 'create:encased_fluid_pipe'
                            && lowerCheckBlock_2.id == 'create:encased_fluid_pipe'
                            && lowerEntityData_1?.up
                            && lowerEntityData_2?.up
                        ) {
                            if (dx == -2) {

                                //同时检测两个
                                if (lowerEntityData_2?.west) {
                                    checkNumber += 2
                                }
                            } else {
                                if (lowerEntityData_2?.east) {
                                    checkNumber += 2
                                }
                            }
                        }
                    }
                }

                return checkNumber  //应为12
            },

            /**
             * 
             * @param { Internal.BlockContainerJS } block 
             */
            fluidPipe(block) {

                let checkNumber = 0

                for (let i = -2; i <= 2; i++) {
                    for (let j = -2; j <= 2; j++) {
                        if (i == j && i == -2) continue
                        if (i == -j && i == -2) continue
                        if (block.offset(i, 4, j).id == 'create:fluid_pipe') {
                            checkNumber++
                        }
                    }
                }

                for (let dx of [-2, 2]) {
                    for (let dz of [-2, 2]) {
                        if (block.offset(dx, 4, 2 * dz).id == 'create:fluid_pipe') {
                            checkNumber++
                        }
                        
                        if (block.offset(2 * dx, 4, dz).id == 'create:fluid_pipe') {
                            checkNumber++
                        }
                    }
                }

                for (let dx of [-4, -3, 3, 4]) {
                    for (let dz of [-4, -3, 3, 4]) {
                        if (
                            (dx == 3 && dz == 3)
                            || (dx == 3 && dz == -3)
                            || (dx == -3 && dz == 3)
                            || (dx == -3 && dz == -3)
                        ) continue
                        if (block.offset(dx, 3, dz).id == 'create:fluid_pipe') {
                            checkNumber++
                        }
                    }
                }

                return checkNumber  //应为32
            },

            /**
             * 
             * @param { Internal.BlockContainerJS } block 
             */
            mechanicalPump(block) {

                let checkNumber = 0

                for (let dx of [-3, -2, 2, 3]) {
                    for (let dz of [-3, -2, 2, 3]) {
                        if (dx == dz && dx == -3) continue
                        if (dx == -dz && dx == -3) continue
                        
                        let checkBlock = block.offset(dx, 4, dz)
                        let checkEntityData = checkBlock.entityData

                        if (checkBlock.id == 'create:mechanical_pump') {
                            if (
                                checkEntityData?.east?.Flow?.FluidName == 'minecraft:water'
                                || checkEntityData?.west?.Flow?.FluidName == 'minecraft:water'
                                || checkEntityData?.south?.Flow?.FluidName == 'minecraft:water'
                                || checkEntityData?.north?.Flow?.FluidName == 'minecraft:water'
                            ) {
                                checkNumber++
                            }
                        }
                    }
                }

                for (let d of [-3, 3]) {
                    if (block.offset(d, 4, 0).id == 'create:mechanical_pump') {

                        let checkBlock = block.offset(d, 4, 0)
                        let checkEntityData = checkBlock.entityData

                        if (
                            checkEntityData?.east?.Flow?.FluidName == 'minecraft:water'
                            || checkEntityData?.west?.Flow?.FluidName == 'minecraft:water'
                        ) {
                            checkNumber++
                        }
                    }
                }

                for (let d of [-3, 3]) {
                    if (block.offset(0, 4, d).id == 'create:mechanical_pump') {

                        let checkBlock = block.offset(0, 4, d)
                        let checkEntityData = checkBlock.entityData

                        if (
                            checkEntityData?.south?.Flow?.FluidName == 'minecraft:water'
                            || checkEntityData?.north?.Flow?.FluidName == 'minecraft:water'
                        ) {
                            checkNumber++
                        }
                    }
                }

                return checkNumber  //应为12
            },

            /**
             * 
             * @param { Internal.BlockContainerJS } block 
             */
            railwayCasing(block) {

                let checkNumber = 0

                for (let i = -3; i <= 3; i++) {
                    for (let j = -3; j <= 3; j++) {
                        if (i != 0 && j != 0) {
                            if (block.offset(i, 3, j).id == 'create:railway_casing') {
                                checkNumber++
                            }
                        }
                    }
                }

                for (let i = -4; i <= 4; i++) {
                    for (let j = -4; j <= 4; j++) {
                        if (!(i >= -3 && i <= 3 && j >= -3 && j <= 3)) {
                            if (block.offset(i, 2, j).id == 'create:railway_casing') {
                                checkNumber++
                            }
                        }
                    }
                }
                return checkNumber  //应为52
            },

            /**
             * 
             * @param { Internal.BlockContainerJS } block 
             */
            air(block) {

                let checkNumber = 0

                for (let i = 1; i <= 4; i++) {
                    if (block.offset(0, i, 0).id == 'minecraft:air') {
                        checkNumber++
                    }
                }

                for (let dy = 1; dy <= 3; dy++) {
                    for (let d of [-1, 1]) {
                        if (block.offset(d, dy, 0).id == 'minecraft:air') {
                            checkNumber++
                        }

                        if (block.offset(0, dy, d).id == 'minecraft:air') {
                            checkNumber++
                        }
                    }
                }

                for (let dy = 2; dy <= 3; dy++) {
                    for (let d of [-3, -2, 2, 3]) {
                        if (block.offset(d, dy, 0).id == 'minecraft:air') {
                            checkNumber++
                        }

                        if (block.offset(0, dy, d).id == 'minecraft:air') {
                            checkNumber++
                        }
                    }
                }

                for (let d of [-4, 4]) {
                    if (block.offset(d, 3, 0).id == 'minecraft:air') {
                        checkNumber++
                    }

                    if (block.offset(0, 3, d).id == 'minecraft:air') {
                        checkNumber++
                    }
                }
                return checkNumber  //应为36
            },

            /**
             * 
             * @param { Internal.BlockContainerJS } block 
             */
            industrialIronBlock(block) {

                let checkNumber = 0

                for (let i = -2; i <= 2; i++) {
                    for (let j = -2; j <= 2; j++) {
                        if (i != 0 && j != 0) {
                            if (block.offset(i, 3, j).id == 'create:industrial_iron_block') {
                                checkNumber++
                            }
                        }
                    }
                }

                for (let i = -3; i <= 3; i++) {
                    for (let j = -3; j <= 3; j++) {
                        if (i != 0 && j != 0) {
                            if (block.offset(i, 2, j).id == 'create:industrial_iron_block') {
                                checkNumber++
                            }
                        }
                    }
                }

                for (let i = -3; i <= 3; i++) {
                    for (let j = -3; j <= 3; j++) {
                        if (i != 0 && j != 0) {
                            if (block.offset(i, 1, j).id == 'create:industrial_iron_block') {
                                checkNumber++
                            }
                        } else if (i == 0) {
                            if (j != -1 || j != 1) {
                                if (block.offset(i, 1, j).id == 'create:industrial_iron_block') {
                                    checkNumber++
                                }
                            }
                        } else if (j == 0) {
                            if (i != -1 || i != 1) {
                                if (block.offset(i, 1, j).id == 'create:industrial_iron_block') {
                                    checkNumber++
                                }
                            }
                        }
                    }
                }

                for (let i = -4; i <= 4; i++) {
                    for (let j = -4; j <= 4; j++) {
                        if (block.offset(i, 0, j).id == 'create:industrial_iron_block') {
                            checkNumber++
                        }
                    }
                }

                return checkNumber  //应为177
            }
        }

        /**
         * 
         * @param { Internal.BlockContainerJS } block
         */
        function failedExplosion(block) {
            
            let explosionStep = 1   //当前迭代次数
            let totalStep = 4   //总迭代次数

            function explosion() {
                
                let explosionD = [-2, -1, 0, 1, 2]
                
                block.offset(
                    explosionD[Math.random() * explosionD.length],
                    Math.random() * -4,
                    explosionD[Math.random() * explosionD.length]
                ).createExplosion()
                    .causesFire(true)
                    .strength(2)
                    .explosionMode('tnt')
                    .explode()

                explosionStep++

                if (explosionStep > totalStep) return

                Utils.server.scheduleInTicks(20, callback => explosion())
            }

            explosion()
        }

        let launchPadResult = blockCheck.launchPad(block)
        let andesiteAlloyBlockResult = blockCheck.andesiteAlloyBlock(block)
        let andesiteScaffoldingResult = blockCheck.andesiteScaffolding(block)
        let encasedFluidPipeResult = blockCheck.encasedFluidPipe(block)
        let fluidPipeResult = blockCheck.fluidPipe(block)
        let mechanicalPumpResult = blockCheck.mechanicalPump(block)
        let railwayCasingResult = blockCheck.railwayCasing(block)
        let airResult = blockCheck.air(block)
        let industrialIronBlockResult = blockCheck.industrialIronBlock(block)

        if (
            launchPadResult == 1
            && andesiteAlloyBlockResult == 8
            && andesiteScaffoldingResult == 8
            && encasedFluidPipeResult == 12
            && fluidPipeResult == 32
            && mechanicalPumpResult == 12
            && railwayCasingResult == 52
            && airResult == 36
            && industrialIronBlockResult == 177
        ) {
            if (!blockEntity.persistentData.hasBuildCorrectly) {
                blockEntity.persistentData.hasBuildCorrectly = true
                block.getPlayersInRadius(16).forEach(player => {
                    player.setStatusMessage('§a火箭发射基座搭建完成!')
                })
            }
        } else {
            if (!blockEntity.persistentData.failedMessageHasSent) {
                blockEntity.persistentData.failedMessageHasSent = true
                block.getPlayersInRadius(16).forEach(player => {
                    player.setStatusMessage('§c警告! 火箭发射基座尚未搭建完成, 强行发射将导致大规模的破坏!')
                })
            }

            if (blockEntity.persistentData.hasBuildCorrectly) {
                blockEntity.persistentData.hasBuildCorrectly = false
                blockEntity.persistentData.failedMessageHasSent = false
            }
        }

        //基座搭建失败发射火箭产生爆炸
        if (!blockEntity.persistentData.hasBuildCorrectly) {
                
            let rockets = block.level.entities
                .filter(rocket => 
                    rocket.type == 'ad_astra:tier_1_rocket'
                    || rocket.type == 'ad_astra:tier_2_rocket'
                    || rocket.type == 'ad_astra:tier_3_rocket'
                    || rocket.type == 'ad_astra:tier_4_rocket'
                )
            
            rockets.forEach(rocket => {
                if (
                    rocket.block.x == block.x
                    && rocket.block.z == block.z
                    && rocket.block.y != block.y
                ) {
                    if (!blockEntity.persistentData.hasExploded) {
                        blockEntity.persistentData.hasExploded = true
                        failedExplosion(block)
                        block.popItem('ad_astra:launch_pad')
                        for (let i = -1; i <= 1; i++) {
                            for (let j = -1; j <= 1; j++) {
                                block.offset(i, 0, j).set('minecraft:air')
                            }
                        }
                    }
                }
            })
        }
    },

    /**
     * 
     * @param { Internal.BlockEntityJS } blockEntity 
     */
    steelTank(blockEntity) {

        let block = blockEntity.block

        const blockCheck = {

            /**
             * 
             * @param { Internal.BlockContainerJS  block
             */
            checkAllDirections(block) {

                let direction = 0

                if (block.offset(1, 3, 0).id == 'createnuclear:reinforced_glass') {
                    direction = 0
                } else if (block.offset(0, 3, 1).id == 'createnuclear:reinforced_glass') {
                    direction = 1
                } else if (block.offset(-1, 3, 0).id == 'createnuclear:reinforced_glass') {
                    direction = 2
                } else if (block.offset(0, 3, -1).id == 'createnuclear:reinforced_glass') {
                    direction = 3
                }

                return direction
            },

            /**
             * 根据方向旋转坐标
             * @param { number } dx
             * @param { number } dz
             * @param { number } direction
             * @returns { [number, number] }
             */
            rotateCoordinates(dx, dz, direction) {
                if (direction == 0) return [dx, dz]
                if (direction == 1) return [dz, -dx]
                if (direction == 2) return [-dx, -dz]
                if (direction == 3) return [-dz, dx]
            },

            /**
             * 
             * @param { Internal.BlockContainerJS } block
             */
            steelPillar(block) {

                let checkNumber = 0

                for (let dy = 8; dy >= -3; dy--) {
                    if (dy >= 6 && dy <= 8) {
                        if (block.offset(0, dy, 0).id == 'ad_astra:steel_pillar') {
                            checkNumber++
                        }
                    } else if (dy <= 5 && dy >= 1) {
                        for (let dx of [-1, 1]) {
                            for (let dz of [-1, 1]) {
                                if (block.offset(dx, dy, dz).id == 'ad_astra:steel_pillar') {
                                    checkNumber++
                                }
                            }
                        }
                    } else {
                        if (dy >= -2) {
                            for (let dx of [-2, 2]) {
                                for (let dz of [-2, 2]) {
                                    if (block.offset(dx, dy, dz).id == 'ad_astra:steel_pillar') {
                                        checkNumber++
                                    }
                                }
                            }
                        }
                        for (let dx of [-3, 3]) {
                            for (let dz of [-3, 3]) {
                                if (block.offset(dx, dy, dz).id == 'ad_astra:steel_pillar') {
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
             * @param { Internal.BlockContainerJS } block
             */
            steelPlatingSlab(block) {

                let checkNumber = 0

                for (let dx of [-2, 2]) {
                    for (let dz of [-2, 2]) {
                        if (block.offset(dx, 1, dz).id == 'ad_astra:steel_plating_slab') {
                            checkNumber++
                        }
                    }
                }

                return checkNumber//应为4
            },

            /**
             * 
             * @param { Internal.BlockContainerJS } block
             */
            steelPlatingStairs(block) {

                let checkNumber = 0

                for (let dy of [6, -1]) {
                    for (let dx of [-1, 0, 1]) {
                        for (let dz of [-1, 0, 1]) {
                            if (dx == 0 && dz == 0) {
                                continue
                            } else {
                                if (block.offset(dx, dy, dz).id == 'ad_astra:steel_plating_stairs') {
                                    checkNumber++
                                }
                            }
                        }
                    }
                }

                return checkNumber//应为16
            },

            /**
             * 
             * @param { Internal.BlockContainerJS } block
             */
            steelPlating(block) {

                let checkNumber = 0

                for (let dx of [-1, 0, 1]) {
                    for (let dz of [-1, 0, 1]) {
                        if (dx == 0 && dz == 0) {
                            continue
                        } else {
                            if (block.offset(dx, 0, dz).id == 'ad_astra:steel_plating') {
                                checkNumber++
                            }
                        }
                    }
                }

                return checkNumber//应为8
            },


            //接下来这些都要设置四个方向的数据


            /**
             * 
             * @param {Internal.BlockContainerJS} block
             */
            railwayCasing(block) {

                let checkNumber = 0
                let direction = blockCheck.checkAllDirections(block)

                for (let dx of [-3, 0, 3]) {
                    for (let dz of [-3, 3]) {

                        let [rotatedDx, rotatedDz] = blockCheck.rotateCoordinates(dx, dz, direction)

                        if (rotatedDx == 0) {

                            if (
                                block.offset(
                                    rotatedDx, 1, (rotatedDz / Math.abs(rotatedDz)) * (Math.abs(rotatedDz) - 1)
                                ).id == 'create:railway_casing'
                            ) {
                                checkNumber++
                            }
                        } else {
                            if (block.offset(rotatedDx, 1, rotatedDz).id == 'create:railway_casing') {
                                checkNumber++
                            }
                        }
                    }
                }

                return checkNumber//应为6
            },

            /**
             * 
             * @param { Internal.BlockContainerJS } block
             */
            steelPlatingButton(block) {

                let checkNumber = 0
                let direction = blockCheck.checkAllDirections(block)

                for (let dz of [-2, 2]) {

                    let [rotatedDx, rotatedDz] = blockCheck.rotateCoordinates(0, dz, direction)

                    if (block.offset(rotatedDx, 2, rotatedDz).id == 'ad_astra:steel_plating_button') {
                        checkNumber++
                    }
                }

                return checkNumber//应为2
            },

            /**
             * 
             * @param { Internal.BlockContainerJS } block
             */
            steelBlock(block) {

                let checkNumber = 0
                let direction = blockCheck.checkAllDirections(block)

                for (let dy of [5, 4, 3, 2, 1]) {
                    for (let dx of [-1, 1]) {

                        let [rotatedDx, rotatedDz] = blockCheck.rotateCoordinates(dx, 0, direction)

                        if ((dy == 3 || dy == 2) && rotatedDx == 1) {
                            continue
                        } else {
                            if (block.offset(rotatedDx, dy, rotatedDz).id == 'ad_astra:steel_block') {
                                checkNumber++
                            }
                        }
                    }

                    for (let dz of [-1, 1]) {

                        let [rotatedDx, rotatedDz] = blockCheck.rotateCoordinates(0, dz, direction)

                        if (block.offset(rotatedDx, dy, rotatedDz).id == 'ad_astra:steel_block') {
                            checkNumber++
                        }
                    }
                }

                return checkNumber//应为18
            },

            /**
             * 
             * @param { Internal.BlockContainerJS } block
             */
            reinforcedGlass(block) {

                let checkNumber = 0
                let direction = blockCheck.checkAllDirections(block)

                // 玻璃只会出现在四个方向之一
                for (let dy of [3, 2]) {
                    // 四个方向的相对坐标
                    for (let [dx, dz] of [[1, 0], [0, 1], [-1, 0], [0, -1]]) {

                        let [rotatedDx, rotatedDz] = blockCheck.rotateCoordinates(dx, dz, direction)

                        if (block.offset(rotatedDx, dy, rotatedDz).id == 'createnuclear:reinforced_glass') {
                            checkNumber++
                        }
                    }
                }
                return checkNumber // 应为2
            },

            /**
             * 
             * @param { Internal.BlockContainerJS } block
             */
            lightningRod(block) {

                let checkNumber = 0

                if (block.offset(0, 9, 0).id == 'minecraft:lightning_rod') {
                    checkNumber++
                }

                return checkNumber//应为1
            }
        }

        let pillarResult = blockCheck.steelPillar(block)
        let stairsResult = blockCheck.steelPlatingStairs(block)
        let slabResult = blockCheck.steelPlatingSlab(block)
        let railwayResult = blockCheck.railwayCasing(block)
        let buttonResult = blockCheck.steelPlatingButton(block)
        let blockResult = blockCheck.steelBlock(block)
        let glassResult = blockCheck.reinforcedGlass(block)
        let platingResult = blockCheck.steelPlating(block)
        let lightningRodResult = blockCheck.lightningRod(block)

        if (
            pillarResult == 43
            && slabResult == 4
            && stairsResult == 16
            && platingResult == 8
            && railwayResult == 6
            && buttonResult == 2
            && blockResult == 18
            && glassResult == 2
            && lightningRodResult == 1
        ) {
            if (!blockEntity.persistentData.hasBuilt) {
                blockEntity.persistentData.hasBuilt = true
            }

            if (!blockEntity.persistentData.hasBuildCorrectly) {
                blockEntity.persistentData.hasBuildCorrectly = true
                block.getPlayersInRadius(16).forEach(player => {
                    player.setStatusMessage('§a一阶火箭搭建完成!')
                })
            }
        } else {
            if (!blockEntity.persistentData.failedMessageHasSent) {
                blockEntity.persistentData.failedMessageHasSent = true
                block.getPlayersInRadius(16).forEach(player => {
                    player.setStatusMessage('§c一阶火箭尚未搭建完成!')
                })
            }

            if (blockEntity.persistentData.hasBuilt) {
                blockEntity.persistentData.hasBuilt = false
            }

            if (blockEntity.persistentData.hasBuildCorrectly) {
                blockEntity.persistentData.hasBuildCorrectly = false
                blockEntity.persistentData.failedMessageHasSent = false
            }
        }
    },

    /**
     * 
     * @param { Internal.BlockEntityJS } blockEntity 
     */
    deshTank(blockEntity) {

        let block = blockEntity.block

        const blockCheck = {

            /**
             * 检查所有可能的方向
             * @param {Internal.BlockContainerJS} block
             */
            checkAllDirections(block) {

                let direction = 0            // 根据强化玻璃的位置判断方向
                
                if (block.offset(1, 2, 0).id == 'createnuclear:reinforced_glass') {
                    direction = 0
                } else if (block.offset(0, 2, 1).id == 'createnuclear:reinforced_glass') {
                    direction = 1
                } else if (block.offset(-1, 2, 0).id == 'createnuclear:reinforced_glass') {
                    direction = 2
                } else if (block.offset(0, 2, -1).id == 'createnuclear:reinforced_glass') {
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
             * @param {Internal.BlockContainerJS} block
             */
            steelPillar(block) {

                let checkNumber = 0            // 顶部的钢支柱 (11-13)

                for (let dy = 10; dy >= 8; dy--) {
                    if (block.offset(0, dy, 0).id == 'ad_astra:steel_pillar') {
                        checkNumber++
                    }
                }

                // 主体部分的钢支柱 (5-9)
                for (let dy = 6; dy >= 2; dy--) {
                    for (let dx of [-1, 1]) {
                        for (let dz of [-1, 1]) {
                            if (block.offset(dx, dy, dz).id == 'ad_astra:steel_pillar') {
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
                            if (block.offset(dx, dy, dz).id == 'ad_astra:steel_pillar') {
                                checkNumber++
                            }
                        }
                    }

                    // 内层支柱 (仅2-3层)
                    if (dy >= -1 && dy <= 0) {
                        for (let dx of [-2, 2]) {
                            for (let dz of [-2, 2]) {
                                if (block.offset(dx, dy, dz).id == 'ad_astra:steel_pillar') {
                                    checkNumber++
                                }
                            }
                        }
                    }
                }

                return checkNumber; // 应为 43
            },

            /**
             * 检查钢板台阶
             * @param {Internal.BlockContainerJS} block
             */
            steelPlatingSlab(block) {

                let checkNumber = 0            // 底座台阶
                for (let dx of [-2, 2]) {
                    for (let dz of [-2, 2]) {
                        if (block.offset(dx, 1, dz).id == 'ad_astra:steel_plating_slab') {
                            checkNumber++
                        }
                    }
                }

                return checkNumber // 应为 4
            },

            /**
             * 检查戴斯板台阶
             * @param {Internal.BlockContainerJS} block
             */
            deshPlatingSlab(block) {

                let checkNumber = 0
                let direction = blockCheck.checkAllDirections(block)

                // 雷达部分的戴斯板台阶
                for (let dx of [-2, 0, 2]) {
                    for (let dz of [-2, 0, 2]) {
                        if (dx == 0 || dz == 0) {
                            if (dx == 0 && dz == 0) {
                                continue
                            } else {

                                let [rotatedDx, rotatedDz] = blockCheck.rotateCoordinates(dx, dz, direction)

                                if (block.offset(rotatedDx, 1, rotatedDz).id == 'ad_astra:desh_plating_slab') {
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
             * @param {Internal.BlockContainerJS} block
             */
            steelPlatingStairs(block) {

                let checkNumber = 0
                let direction = blockCheck.checkAllDirections(block)            // 喷嘴部分楼梯
                let coordinate_1 = [
                    [-1, -1, -1], [-1, -1, 0], [-1, -1, 1],
                    [0, -1, 1], [1, -1, 1], [1, -1, 0],
                    [1, -1, -1], [0, -1, -1]
                ]

                for (let i = 0; i < 8; i++) {
                    if (i % 2 == 0) {

                        let [rotatedDx, rotatedDz]
                            = blockCheck.rotateCoordinates(coordinate_1[i][0], coordinate_1[i][2], direction)

                        if (block.offset(rotatedDx, coordinate_1[i][1], rotatedDz).id == 'ad_astra:steel_plating_stairs') {
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
                            = blockCheck.rotateCoordinates(coordinate_2[i][0], coordinate_2[i][2], direction)

                        if (block.offset(rotatedDx, coordinate_2[i][1], rotatedDz).id == 'ad_astra:steel_plating_stairs') {
                            checkNumber++
                        }
                    }
                }

                return checkNumber // 应为 8
            },

            /**
             * 检查戴斯板楼梯
             * @param {Internal.BlockContainerJS} block
             */
            deshPlatingStairs(block) {

                let checkNumber = 0
                let direction = blockCheck.checkAllDirections(block)            // 顶部楼梯
                let coordinate_2 = [
                    [-1, 8, -1], [-1, 8, 0], [-1, 8, 1],
                    [0, 8, 1], [1, 8, 1], [1, 8, 0],
                    [1, 8, -1], [0, 8, -1]
                ]

                for (let i = 0; i < 8; i++) {
                    if (i % 2 != 0) {

                        let [rotatedDx, rotatedDz]
                            = blockCheck.rotateCoordinates(coordinate_2[i][0], coordinate_2[i][2], direction)

                        if (block.offset(rotatedDx, coordinate_2[i][1], rotatedDz).id == 'ad_astra:desh_plating_stairs') {
                            checkNumber++
                        }
                    }
                }

                return checkNumber // 应为 4
            },

            /**
             * 检查钢块
             * @param {Internal.BlockContainerJS} block
             */
            steelBlock(block) {

                let checkNumber = 0
                let direction = blockCheck.checkAllDirections(block)            // 雷达部分的钢块
                
                for (let dx of [-2, 0, 2]) {
                    for (let dz of [-2, 0, 2]) {
                        if (dx == 0 || dz == 0) {
                            if (dx == 0 && dz == 0) {
                                continue
                            } else {

                                let [rotatedDx, rotatedDz] = blockCheck.rotateCoordinates(dx, dz, direction)

                                if (block.offset(rotatedDx, 0, rotatedDz).id == 'ad_astra:steel_block') {
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
             * @param {Internal.BlockContainerJS} block
             */
            glowingDeshPillar(block) {

                let checkNumber = 0            // 四个角的发光戴斯柱
                for (let dx of [-3, 3]) {
                    for (let dz of [-3, 3]) {
                        if (block.offset(dx, 1, dz).id == 'ad_astra:glowing_desh_pillar') {
                            checkNumber++
                        }
                    }
                }

                return checkNumber // 应为 4
            },

            /**
             * 检查戴斯块
             * @param {Internal.BlockContainerJS} block
             */
            deshBlock(block) {

                let checkNumber = 0
                let direction = blockCheck.checkAllDirections(block)

                // 主体四周的戴斯块
                for (let dy = 6; dy >= 2; dy--) {
                    for (let dx of [-1, 1]) {

                        let [rotatedDx, rotatedDz] = blockCheck.rotateCoordinates(dx, 0, direction)

                        if ((dy == 4 || dy == 3) && rotatedDx == 1) {
                            continue
                        } else {
                            if (block.offset(rotatedDx, dy, rotatedDz).id == 'ad_astra:desh_block') {
                                checkNumber++
                            }
                        }
                    }

                    for (let dz of [-1, 1]) {

                        let [rotatedDx, rotatedDz] = blockCheck.rotateCoordinates(0, dz, direction)

                        if (block.offset(rotatedDx, dy, rotatedDz).id == 'ad_astra:desh_block') {
                            checkNumber++
                        }
                    }
                }

                return checkNumber // 应为 18
            },

            /**
             * 检查强化玻璃
             * @param {Internal.BlockContainerJS} block
             */
            reinforcedGlass(block) {

                let checkNumber = 0
                let direction = blockCheck.checkAllDirections(block)            // 玻璃只会出现在四个方向之一
                for (let dy of [4, 3]) {
                    // 四个方向的相对坐标
                    for (let [dx, dz] of [[1, 0], [0, 1], [-1, 0], [0, -1]]) {

                        let [rotatedDx, rotatedDz] = blockCheck.rotateCoordinates(dx, dz, direction)

                        if (block.offset(rotatedDx, dy, rotatedDz).id == 'createnuclear:reinforced_glass') {
                            checkNumber++
                        }
                    }
                }

                return checkNumber // 应为 2
            },

            /**
             * 检查钢板
             * @param {Internal.BlockContainerJS} block
             */
            steelPlating(block) {
                let checkNumber = 0            // 底座钢板
                for (let dx of [-1, 0, 1]) {
                    for (let dz of [-1, 0, 1]) {
                        if (dx == 0 && dz == 0) {
                            continue
                        } else {
                            if (block.offset(dx, 0, dz).id == 'ad_astra:steel_plating') {
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
                            if (block.offset(dx, 7, dz).id == 'ad_astra:steel_plating') {
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
                            if (block.offset(dx, 1, dz).id == 'ad_astra:steel_plating') {
                                checkNumber++
                            }
                        }
                    }
                }

                return checkNumber // 应为 25
            },

            /**
             * 
             * @param {Internal.BlockContainerJS} block
             */
            lightningRod(block) {

                let checkNumber = 0

                if (block.offset(0, 11, 0).id == 'minecraft:lightning_rod') {
                    checkNumber++
                }

                return checkNumber//应为1
            }
        }

        let pillarResult = blockCheck.steelPillar(block)
        let slabResult = blockCheck.steelPlatingSlab(block)
        let deshSlabResult = blockCheck.deshPlatingSlab(block)
        let stairsResult = blockCheck.steelPlatingStairs(block)
        let deshStairsResult = blockCheck.deshPlatingStairs(block)
        let blockResult = blockCheck.steelBlock(block)
        let glowingPillarResult = blockCheck.glowingDeshPillar(block)
        let deshBlockResult = blockCheck.deshBlock(block)
        let glassResult = blockCheck.reinforcedGlass(block)
        let platingResult = blockCheck.steelPlating(block)
        let lightningRodResult = blockCheck.lightningRod(block)

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
            if (!blockEntity.persistentData.hasBuilt) {
                blockEntity.persistentData.hasBuilt = true
            }

            if (!blockEntity.persistentData.hasBuildCorrectly) {
                blockEntity.persistentData.hasBuildCorrectly = true
                block.getPlayersInRadius(16).forEach(player => {
                    player.setStatusMessage('§a二阶火箭搭建完成!')
                })
            }
        } else {
            if (!blockEntity.persistentData.failedMessageHasSent) {
                blockEntity.persistentData.failedMessageHasSent = true
                block.getPlayersInRadius(16).forEach(player => {
                    player.setStatusMessage('§c二阶火箭尚未搭建完成!')
                })
            }

            if (blockEntity.persistentData.hasBuilt) {
                blockEntity.persistentData.hasBuilt = false
            }

            if (blockEntity.persistentData.hasBuildCorrectly) {
                blockEntity.persistentData.hasBuildCorrectly = false
                blockEntity.persistentData.failedMessageHasSent = false
            }
        }
    }
}