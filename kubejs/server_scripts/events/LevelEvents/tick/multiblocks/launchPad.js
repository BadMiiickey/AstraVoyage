LevelEvents.tick(event => {

    const { server } = event
    
    const launchPadCheck = {

        /**
         * 
         * @param { Internal.BlockContainerJS } launchPad 
         */
        andesiteAlloyBlock(launchPad) {

            let checkNumber = 0

            for (let dx = -1; dx <= 1; dx++) {
                for (let dz = -1; dz <= 1; dz++) {
                    if (!(dx == 0 && dz == 0)) {
                        if (launchPad.offset(dx, -1, dz).id == 'create:andesite_alloy_block') {
                            checkNumber++
                        }
                    }
                }
            }

            return checkNumber  //应为8
        },

        /**
         * 
         * @param { Internal.BlockContainerJS } launchPad 
         */
        andesiteScaffolding(launchPad) {
            
            let checkNumber = 0

            for (let dx of [-2, 2]) {
                for (let dy of [0, 1]) {
                    for (let dz of [-2, 2]) {
                        if (launchPad.offset(dx, dy, dz).id == 'create:andesite_scaffolding') {
                            checkNumber++
                        }
                    }
                }
            }

            return checkNumber  //应为8
        },

        /**
         * 
         * @param { Internal.BlockContainerJS } launchPad 
         */
        encasedFluidPipe(launchPad) {
            
            let checkNumber = 0

            for (let dx of [-2, 2]) {
                for (let dz of [-2, 2]) {
                    
                    let upperCheckBlock = launchPad.offset(dx, -1, dz)
                    let lowerCheckBlock_1 = launchPad.offset(2 * dx, -2, dz)
                    let lowerCheckBlock_2 = launchPad.offset(dx, -2, 2 * dz)
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
         * @param { Internal.BlockContainerJS } launchPad 
         */
        fluidPipe(launchPad) {

            let checkNumber = 0

            for (let i = -2; i <= 2; i++) {
                for (let j = -2; j <= 2; j++) {
                    if (i == j && i == -2) continue
                    if (i == -j && i == -2) continue
                    if (launchPad.offset(i, -1, j).id == 'create:fluid_pipe') {
                        checkNumber++
                    }
                }
            }

            for (let dx of [-2, 2]) {
                for (let dz of [-2, 2]) {
                    if (launchPad.offset(dx, -1, 2 * dz).id == 'create:fluid_pipe') {
                        checkNumber++
                    }
                    
                    if (launchPad.offset(2 * dx, -1, dz).id == 'create:fluid_pipe') {
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
                    if (launchPad.offset(dx, -2, dz).id == 'create:fluid_pipe') {
                        checkNumber++
                    }
                }
            }

            return checkNumber  //应为32
        },

        /**
         * 
         * @param { Internal.BlockContainerJS } launchPad 
         */
        mechanicalPump(launchPad) {

            let checkNumber = 0

            for (let dx of [-3, -2, 2, 3]) {
                for (let dz of [-3, -2, 2, 3]) {
                    if (dx == dz && dx == -3) continue
                    if (dx == -dz && dx == -3) continue
                    
                    let checkBlock = launchPad.offset(dx, -1, dz)
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
                if (launchPad.offset(d, -1, 0).id == 'create:mechanical_pump') {

                    let checkBlock = launchPad.offset(d, -1, 0)
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
                if (launchPad.offset(0, -1, d).id == 'create:mechanical_pump') {

                    let checkBlock = launchPad.offset(0, -1, d)
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
         * @param { Internal.BlockContainerJS } launchPad 
         */
        railwayCasing(launchPad) {

            let checkNumber = 0

            for (let i = -3; i <= 3; i++) {
                for (let j = -3; j <= 3; j++) {
                    if (i != 0 && j != 0) {
                        if (launchPad.offset(i, -2, j).id == 'create:railway_casing') {
                            checkNumber++
                        }
                    }
                }
            }

            for (let i = -4; i <= 4; i++) {
                for (let j = -4; j <= 4; j++) {
                    if (!(i >= -3 && i <= 3 && j >= -3 && j <= 3)) {
                        if (launchPad.offset(i, -3, j).id == 'create:railway_casing') {
                            checkNumber++
                        }
                    }
                }
            }
            return checkNumber  //应为52
        },

        /**
         * 
         * @param { Internal.BlockContainerJS } launchPad 
         */
        air(launchPad) {

            let checkNumber = 0

            for (let i = -4; i <= -1; i++) {
                if (launchPad.offset(0, i, 0).id == 'minecraft:air') {
                    checkNumber++
                }
            }

            for (let dy = -4; dy <= -2; dy++) {
                for (let d of [-1, 1]) {
                    if (launchPad.offset(d, dy, 0).id == 'minecraft:air') {
                        checkNumber++
                    }

                    if (launchPad.offset(0, dy, d).id == 'minecraft:air') {
                        checkNumber++
                    }
                }
            }

            for (let dy = -3; dy <= -2; dy++) {
                for (let d of [-3, -2, 2, 3]) {
                    if (launchPad.offset(d, dy, 0).id == 'minecraft:air') {
                        checkNumber++
                    }

                    if (launchPad.offset(0, dy, d).id == 'minecraft:air') {
                        checkNumber++
                    }
                }
            }

            for (let d of [-4, 4]) {
                if (launchPad.offset(d, -2, 0).id == 'minecraft:air') {
                    checkNumber++
                }

                if (launchPad.offset(0, -2, d).id == 'minecraft:air') {
                    checkNumber++
                }
            }
            return checkNumber  //应为36
        },

        /**
         * 
         * @param { Internal.BlockContainerJS } launchPad 
         */
        industrialIronBlock(launchPad) {

            let checkNumber = 0

            for (let i = -2; i <= 2; i++) {
                for (let j = -2; j <= 2; j++) {
                    if (i != 0 && j != 0) {
                        if (launchPad.offset(i, -2, j).id == 'create:industrial_iron_block') {
                            checkNumber++
                        }
                    }
                }
            }

            for (let i = -3; i <= 3; i++) {
                for (let j = -3; j <= 3; j++) {
                    if (i != 0 && j != 0) {
                        if (launchPad.offset(i, -3, j).id == 'create:industrial_iron_block') {
                            checkNumber++
                        }
                    }
                }
            }

            for (let i = -3; i <= 3; i++) {
                for (let j = -3; j <= 3; j++) {
                    if (i != 0 && j != 0) {
                        if (launchPad.offset(i, -4, j).id == 'create:industrial_iron_block') {
                            checkNumber++
                        }
                    } else if (i == 0) {
                        if (j != -1 || j != 1) {
                            if (launchPad.offset(i, -4, j).id == 'create:industrial_iron_block') {
                                checkNumber++
                            }
                        }
                    } else if (j == 0) {
                        if (i != -1 || i != 1) {
                            if (launchPad.offset(i, -4, j).id == 'create:industrial_iron_block') {
                                checkNumber++
                            }
                        }
                    }
                }
            }

            for (let i = -4; i <= 4; i++) {
                for (let j = -4; j <= 4; j++) {
                    if (launchPad.offset(i, -5, j).id == 'create:industrial_iron_block') {
                        checkNumber++
                    }
                }
            }

            return checkNumber  //应为177
        }
    }

    //删除搭建失败后因爆炸丢失的发射台在全局方块Map中的信息
    if (global.methods.tickCountCheck(server, 1, 1.5)) {
        if (
            global.mapArray.launchPadsMapArray
            && global.mapArray.launchPadsMapArray.length > 0
        ) {
            global.mapArray.launchPadsMapArray.forEach(launchPad => {
                server.players.forEach(player => {
                    if (player.level.dimension == launchPad.dimension) {

                        let block = player.level.getBlock(launchPad.pos)

                        if (block.id != 'ad_astra:launch_pad') {
                            global.mapArray.launchPadsMapArray = global.mapArray.launchPadsMapArray
                                .filter(launchPadBlock => 
                                    launchPadBlock.dimension != block.dimension
                                    && launchPadBlock.pos != block.pos
                                    && launchPadBlock.hasBuildCorrectly != undefined
                                    && launchPadBlock.failedMessageHasSent != undefined
                                )
                        }
                    }
                })

                //移除bug导致的错误信息
                if (launchPad.dimension == undefined || launchPad.pos == undefined) {
                    global.mapArray.launchPadsMapArray = global.mapArray.launchPadsMapArray
                        .filter(launchPadBlock => 
                            launchPadBlock.dimension != undefined
                            && launchPadBlock.pos != undefined
                        )
                }
            })
        }
    }

    //检测搭建完成

    /**
     * 
     * @param { Internal.BlockContainerJS } launchPad
     */
    function failedExplosion(launchPad) {
        
        let explosionStep = 1   //当前迭代次数
        let totalStep = 4   //总迭代次数

        function explosion() {
            
            let explosionD = [-2, -1, 0, 1, 2]
            
            launchPad.offset(
                (Math.random() * explosionD.length),
                Math.random() * -4,
                (Math.random() * explosionD.length)
            ).createExplosion()
                .causesFire(true)
                .strength(2)
                .explosionMode('tnt')
                .explode()

            explosionStep++

            if (explosionStep > totalStep) return

            server.scheduleInTicks(20, callback => explosion())
        }

        explosion()
    }

    if (global.methods.tickCountCheck(server, 1, 5)) {
        if (
            global.mapArray.launchPadsMapArray
            && global.mapArray.launchPadsMapArray.length > 0
        ) {
            global.mapArray.launchPadsMapArray.forEach(launchPad => {
                server.players.forEach(player => {
                    if (player.level.dimension == launchPad.dimension) {
                        
                        let block = player.level.getBlock(launchPad.pos)

                        if (block.id == 'ad_astra:launch_pad') {

                            let andesiteAlloyBlockResult = launchPadCheck.andesiteAlloyBlock(block)
                            let andesiteScaffoldingResult = launchPadCheck.andesiteScaffolding(block)
                            let encasedFluidPipeResult = launchPadCheck.encasedFluidPipe(block)
                            let fluidPipeResult = launchPadCheck.fluidPipe(block)
                            let mechanicalPumpResult = launchPadCheck.mechanicalPump(block)
                            let railwayCasingResult = launchPadCheck.railwayCasing(block)
                            let airResult = launchPadCheck.air(block)
                            let industrialIronBlockResult = launchPadCheck.industrialIronBlock(block)

                            

                            if (
                                andesiteAlloyBlockResult == 8
                                && andesiteScaffoldingResult == 8
                                && encasedFluidPipeResult == 12
                                && fluidPipeResult == 32
                                && mechanicalPumpResult == 12
                                && railwayCasingResult == 52
                                && airResult == 36
                                && industrialIronBlockResult == 177
                            ) {
                                if (!launchPad.hasBuildCorrectly) {
                                    launchPad.hasBuildCorrectly = true
                                    player.setStatusMessage('§a火箭发射基座搭建完成!')
                                }
                            } else {
                                if (!launchPad.failedMessageHasSent) {
                                    launchPad.failedMessageHasSent = true
                                    player.setStatusMessage('§c警告! 火箭发射基座尚未搭建完成, 强行发射将导致大规模的破坏!')
                                }
    
                                if (launchPad.hasBuildCorrectly) {
                                    launchPad.hasBuildCorrectly = false
                                    launchPad.failedMessageHasSent = false
                                }
                            }

                            //基座搭建失败发射火箭产生爆炸
                            if (!launchPad.hasBuildCorrectly) {
                                    
                                let rockets = block.level.entities
                                    .filter(rocket => 
                                        rocket.type == 'ad_astra:tier_1_rocket'
                                        || rocket.type == 'ad_astra:tier_2_rocket'
                                        || rocket.type == 'ad_astra:tier_3_rocket'
                                        || rocket.type == 'ad_astra:tier_4_rocket'
                                    )
                                
                                rockets.forEach(rocket => {
                                    if (
                                        rocket.block.x == launchPad.pos.x
                                        && rocket.block.z == launchPad.pos.z
                                        && rocket.block.y != launchPad.pos.y
                                    ) {
                                        if (!launchPad.hasExploded) {
                                            launchPad.hasExploded = true
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
                        }
                    }
                })
            })
        }
    }
})