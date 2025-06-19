Ponder.registry(event => {

    //火箭发射基座
    event.create('ad_astra:launch_pad')

        //显示地下部分
        .scene('kubejs:launch_pad_underground', 'kubejs:launch_pad', (builder, util) => {

            //显示地板
            builder.showBasePlate()
            builder.scaleSceneView(0.75)
            builder.idle(20 * 1)
            
            //显示第一层
            builder.addKeyframe()
            builder.world().setBlocks([2, 1, 2, 10, 1, 10], 'create:industrial_iron_block', false)
            builder.world().showSection([2, 1, 2, 10, 1, 10], Direction.DOWN)
            builder.idle(20 * 1)
            builder.text(20 * 2, 'kubejs:underground_1', [7, 1, 7])
            builder.idle(20 * 3)
            
            //显示第二层
            builder.addKeyframe()
            builder.world().setBlocks([3, 2, 3, 9, 2, 9], 'create:industrial_iron_block')
            builder.world().showSection([3, 2, 3, 9, 2, 9], Direction.DOWN)

            for (let d of [-1, 0, 1]) {
                builder.world().setBlocks([6 + d, 2, 6], 'minecraft:air', false)
                builder.world().setBlocks([6, 2, 6 + d], 'minecraft:air', false)
                builder.world().showSection([6 + d, 2, 6], Direction.DOWN)
                builder.world().showSection([6, 2, 6 + d], Direction.DOWN)
            }

            builder.idle(20 * 1)
            builder.text(20 * 2, 'kubejs:underground_2', [7, 2, 7])
            builder.idle(20 * 3)

            //显示第三层
                //显示工业铁块
                builder.addKeyframe()
                builder.world().setBlocks([3, 3, 3, 9, 3, 9], 'create:industrial_iron_block', false)
                builder.world().showSection([3, 3, 3, 9, 3, 9], Direction.DOWN)

                for (let d of [-3, -2, -1, 0, 1, 2, 3]) {
                    builder.world().setBlocks([6 + d, 3, 6], 'minecraft:air', false)
                    builder.world().setBlocks([6, 3, 6 + d], 'minecraft:air', false)
                    builder.world().showSection([6 + d, 3, 6], Direction.DOWN)
                    builder.world().showSection([6, 3, 6 + d], Direction.DOWN)
                }

                builder.idle(20 * 1)
                builder.text(20 * 2, 'kubejs:underground_3', [7, 3, 7])
                builder.idle(20 * 3)
                

                //显示列车机壳
                builder.addKeyframe()

                for (let i = 2; i <= 10; i++) {
                    for (let j = 2; j <= 10; j++) {
                        if (!(i >= 3 && i <= 9 && j >= 3 && j <= 9)) {
                            builder.world().setBlocks([i, 3, j], 'create:railway_casing', false)
                            builder.world().showSection([i, 3, j], Direction.DOWN)
                            builder.idle(1)
                        }
                    }
                }

                builder.text(20 * 2, 'kubejs:underground_4', [3, 3, 7])
                builder.idle(20 * 3)
        })

        .scene('kubejs:launch_pad_aboveground', 'kubejs:launch_pad', (builder, util) => {

            //显示地板
            builder.showBasePlate()

            builder.world().setBlocks([3, 0, 3, 9, 0, 9], 'create:industrial_iron_block', false)
            builder.world().showSection([3, 0, 3, 9, 0, 9], Direction.DOWN)

            for (let d of [-3, -2, -1, 0, 1, 2, 3]) {
                builder.world().setBlocks([6 + d, 0, 6], 'minecraft:air', false)
                builder.world().setBlocks([6, 0, 6 + d], 'minecraft:air', false)
                builder.world().showSection([6 + d, 0, 6], Direction.DOWN)
                builder.world().showSection([6, 0, 6 + d], Direction.DOWN)
            }

            for (let i = 2; i <= 10; i++) {
                for (let j = 2; j <= 10; j++) {
                    if (!(i >= 3 && i <= 9 && j >= 3 && j <= 9)) {
                        builder.world().setBlocks([i, 0, j], 'create:railway_casing', false)
                        builder.world().showSection([i, 0, j], Direction.DOWN)
                    }
                }
            }

            builder.scaleSceneView(0.75)
            builder.idle(20 * 1)

            //显示第一层
            builder.addKeyframe()
            builder.world().setBlocks([4, 1, 4, 8, 1, 8], 'create:industrial_iron_block', false)
            builder.world().showSection([4, 1, 4, 8, 1, 8], Direction.DOWN)

            for (let d of [-2, -1, 0, 1, 2]) {
                builder.world().setBlocks([6 + d, 1, 6], 'minecraft:air', false)
                builder.world().setBlocks([6, 1, 6 + d], 'minecraft:air', false)
                builder.world().showSection([6 + d, 1, 6], Direction.DOWN)
                builder.world().showSection([6, 1, 6 + d], Direction.DOWN)
            }

            for (let i = 3; i <= 9; i++) {
                for (let j = 3; j <= 9; j++) {
                    if (!(i >= 4 && i <= 8 && j >= 4 && j <= 8)) {
                        if (!(i == 6 && (j == 3 || j == 9) )) {
                            if (!(j == 6 && (i == 3 || i == 9))) {
                                builder.world().setBlocks([i, 1, j], 'create:railway_casing', false)
                                builder.world().showSection([i, 1, j], Direction.DOWN)
                                builder.idle(1)
                            }
                        }
                    }
                }
            }

            builder.idle(20 * 1)
            builder.text(20 * 2, 'kubejs:aboveground_1', [7, 1, 7])
            builder.idle(20 * 3)

            for (let dx of [-4, -3, -2, 2, 3, 4]) {
                for (let dz of [-4, -3, -2, 2, 3, 4]) {
                    if (
                        (dx == 3 && dz == 3)
                        || (dx == 3 && dz == -3)
                        || (dx == -3 && dz == 3)
                        || (dx == -3 && dz == -3)
                        || (dx == 2 && dz == 2)
                        || (dx == 2 && dz == -2)
                        || (dx == -2 && dz == 2)
                        || (dx == -2 && dz == -2)
                    ) continue

                    if (
                        (dx == 3 && dz == 2)
                        || (dx == 3 && dz == -2)
                        || (dx == -3 && dz == 2)
                        || (dx == -3 && dz == -2)
                        || (dx == 2 && dz == 3)
                        || (dx == 2 && dz == -3)
                        || (dx == -2 && dz == 3)
                        || (dx == -2 && dz == -3)
                    ) continue

                    builder.world().setBlocks([6 + dx, 1, 6 + dz], 'create:fluid_pipe', false)

                    if (dx == 4) {
                        if (dz == 4) {
                            builder.world().modifyBlock([6 + dx, 1, 6 + dz], state => 
                                state.setValue(BlockProperties.EAST, $Boolean.FALSE)
                                    .setValue(BlockProperties.SOUTH, $Boolean.FALSE)
                                    .setValue(BlockProperties.WEST, $Boolean.TRUE)
                                    .setValue(BlockProperties.NORTH, $Boolean.TRUE)
                                    .setValue(BlockProperties.UP, $Boolean.FALSE)
                                    .setValue(BlockProperties.DOWN, $Boolean.FALSE)
                            )
                        } else if (dz == -4) {
                            builder.world().modifyBlock([6 + dx, 1, 6 + dz], state => 
                                state.setValue(BlockProperties.EAST, $Boolean.FALSE)
                                    .setValue(BlockProperties.SOUTH, $Boolean.TRUE)
                                    .setValue(BlockProperties.WEST, $Boolean.TRUE)
                                    .setValue(BlockProperties.NORTH, $Boolean.FALSE)
                                    .setValue(BlockProperties.UP, $Boolean.FALSE)
                                    .setValue(BlockProperties.DOWN, $Boolean.FALSE)
                            )
                        } else {
                            builder.world().modifyBlock([6 + dx, 1, 6 + dz], state => 
                                state.setValue(BlockProperties.EAST, $Boolean.FALSE)
                                    .setValue(BlockProperties.SOUTH, $Boolean.TRUE)
                                    .setValue(BlockProperties.WEST, $Boolean.FALSE)
                                    .setValue(BlockProperties.NORTH, $Boolean.TRUE)
                                    .setValue(BlockProperties.UP, $Boolean.FALSE)
                                    .setValue(BlockProperties.DOWN, $Boolean.FALSE)
                            )
                        }
                    } else if (dx == -4) {
                        if (dz == 4) {
                            builder.world().modifyBlock([6 + dx, 1, 6 + dz], state => 
                                state.setValue(BlockProperties.EAST, $Boolean.TRUE)
                                    .setValue(BlockProperties.SOUTH, $Boolean.FALSE)
                                    .setValue(BlockProperties.WEST, $Boolean.FALSE)
                                    .setValue(BlockProperties.NORTH, $Boolean.TRUE)
                                    .setValue(BlockProperties.UP, $Boolean.FALSE)
                                    .setValue(BlockProperties.DOWN, $Boolean.FALSE)
                            )
                        } else if (dz == -4) {
                            builder.world().modifyBlock([6 + dx, 1, 6 + dz], state => 
                                state.setValue(BlockProperties.EAST, $Boolean.TRUE)
                                    .setValue(BlockProperties.SOUTH, $Boolean.TRUE)
                                    .setValue(BlockProperties.WEST, $Boolean.FALSE)
                                    .setValue(BlockProperties.NORTH, $Boolean.FALSE)
                                    .setValue(BlockProperties.UP, $Boolean.FALSE)
                                    .setValue(BlockProperties.DOWN, $Boolean.FALSE)
                            )
                        } else {
                            builder.world().modifyBlock([6 + dx, 1, 6 + dz], state => 
                                state.setValue(BlockProperties.EAST, $Boolean.FALSE)
                                    .setValue(BlockProperties.SOUTH, $Boolean.TRUE)
                                    .setValue(BlockProperties.WEST, $Boolean.FALSE)
                                    .setValue(BlockProperties.NORTH, $Boolean.TRUE)
                                    .setValue(BlockProperties.UP, $Boolean.FALSE)
                                    .setValue(BlockProperties.DOWN, $Boolean.FALSE)
                            )
                        }
                    } else {
                        builder.world().modifyBlock([6 + dx, 1, 6 + dz], state => 
                            state.setValue(BlockProperties.EAST, $Boolean.TRUE)
                                .setValue(BlockProperties.SOUTH, $Boolean.FALSE)
                                .setValue(BlockProperties.WEST, $Boolean.TRUE)
                                .setValue(BlockProperties.NORTH, $Boolean.FALSE)
                                .setValue(BlockProperties.UP, $Boolean.FALSE)
                                .setValue(BlockProperties.DOWN, $Boolean.FALSE)
                        )
                    }

                    builder.world().showSection([6 + dx, 1, 6 + dz], Direction.DOWN)
                    builder.idle(1)
                }
            }

            builder.idle(20 * 1)
            builder.text(20 * 2, 'kubejs:aboveground_2', [2, 1, 4])
            builder.idle(20 * 3)

            //显示第二层 + 第一层的流体管道
            builder.addKeyframe()
            builder.world().setBlocks([5, 2, 5, 7, 2, 7], 'create:andesite_alloy_block', false)
            builder.world().showSection([5, 2, 5, 7, 2, 7], Direction.DOWN)

            builder.idle(20 * 1)

            builder.world().setBlocks([6, 3, 6], 'ad_astra:launch_pad', false)
            builder.world().showSection([6, 3, 6], Direction.DOWN)

            builder.idle(20 * 1)
            builder.text(20 * 2, 'kubejs:aboveground_3', [6, 2, 6])
            builder.idle(20 * 3)
            
            builder.world().hideSection([6, 3, 6], Direction.UP)
            builder.idle(20 * 1)
            builder.world().setBlocks([6, 2, 6], 'minecraft:air', true)
            builder.world().showSection([6, 2, 6], Direction.DOWN)

            builder.idle(20 * 1)

            //流体管道
            builder.addKeyframe()

            for (let i = 4; i <= 8; i++) {
                for (let j = 4; j <= 8; j++) {
                    if (!(i >= 5 && i <= 7 && j >= 5 && j <= 7)) {
                        builder.world().setBlocks([i, 2, j], 'create:fluid_pipe', false)

                        if (i == 4) {
                            if (j == 4) {
                                builder.world().modifyBlock([i, 2, j], state => 
                                    state.setValue(BlockProperties.EAST, $Boolean.TRUE)
                                        .setValue(BlockProperties.SOUTH, $Boolean.TRUE)
                                        .setValue(BlockProperties.WEST, $Boolean.FALSE)
                                        .setValue(BlockProperties.NORTH, $Boolean.FALSE)
                                        .setValue(BlockProperties.UP, $Boolean.FALSE)
                                        .setValue(BlockProperties.DOWN, $Boolean.FALSE)
                                )
                            } else if (j == 8) {
                                builder.world().modifyBlock([i, 2, j], state => 
                                    state.setValue(BlockProperties.EAST, $Boolean.TRUE)
                                        .setValue(BlockProperties.SOUTH, $Boolean.FALSE)
                                        .setValue(BlockProperties.WEST, $Boolean.FALSE)
                                        .setValue(BlockProperties.NORTH, $Boolean.TRUE)
                                        .setValue(BlockProperties.UP, $Boolean.FALSE)
                                        .setValue(BlockProperties.DOWN, $Boolean.FALSE)
                                )
                            } else {
                                builder.world().modifyBlock([i, 2, j], state => 
                                    state.setValue(BlockProperties.EAST, $Boolean.FALSE)
                                        .setValue(BlockProperties.SOUTH, $Boolean.TRUE)
                                        .setValue(BlockProperties.WEST, $Boolean.FALSE)
                                        .setValue(BlockProperties.NORTH, $Boolean.TRUE)
                                        .setValue(BlockProperties.UP, $Boolean.FALSE)
                                        .setValue(BlockProperties.DOWN, $Boolean.FALSE)
                                )
                            }
                        } else if (i == 8) {
                            if (j == 4) {
                                builder.world().modifyBlock([i, 2, j], state => 
                                    state.setValue(BlockProperties.EAST, $Boolean.FALSE)
                                        .setValue(BlockProperties.SOUTH, $Boolean.TRUE)
                                        .setValue(BlockProperties.WEST, $Boolean.TRUE)
                                        .setValue(BlockProperties.NORTH, $Boolean.FALSE)
                                        .setValue(BlockProperties.UP, $Boolean.FALSE)
                                        .setValue(BlockProperties.DOWN, $Boolean.FALSE)
                                )
                            } else if (j == 8) {
                                builder.world().modifyBlock([i, 2, j], state => 
                                    state.setValue(BlockProperties.EAST, $Boolean.FALSE)
                                        .setValue(BlockProperties.SOUTH, $Boolean.FALSE)
                                        .setValue(BlockProperties.WEST, $Boolean.TRUE)
                                        .setValue(BlockProperties.NORTH, $Boolean.TRUE)
                                        .setValue(BlockProperties.UP, $Boolean.FALSE)
                                        .setValue(BlockProperties.DOWN, $Boolean.FALSE)
                                )
                            } else {
                                builder.world().modifyBlock([i, 2, j], state => 
                                    state.setValue(BlockProperties.EAST, $Boolean.FALSE)
                                        .setValue(BlockProperties.SOUTH, $Boolean.TRUE)
                                        .setValue(BlockProperties.WEST, $Boolean.FALSE)
                                        .setValue(BlockProperties.NORTH, $Boolean.TRUE)
                                        .setValue(BlockProperties.UP, $Boolean.FALSE)
                                        .setValue(BlockProperties.DOWN, $Boolean.FALSE)
                                )
                            }
                        } else {
                            builder.world().modifyBlock([i, 2, j], state => 
                                state.setValue(BlockProperties.EAST, $Boolean.TRUE)
                                    .setValue(BlockProperties.SOUTH, $Boolean.FALSE)
                                    .setValue(BlockProperties.WEST, $Boolean.TRUE)
                                    .setValue(BlockProperties.NORTH, $Boolean.FALSE)
                                    .setValue(BlockProperties.UP, $Boolean.FALSE)
                                    .setValue(BlockProperties.DOWN, $Boolean.FALSE)
                            )
                        }

                        builder.world().showSection([i, 2, j], Direction.DOWN)
                        builder.idle(1)
                    }
                }
            }

            builder.idle(20 * 1)
            builder.text(20 * 2, 'kubejs:aboveground_4', [6, 2, 6])
            builder.idle(20 * 3)

            for (let dx of [-4, -3, -2, 2, 3, 4]) {
                for (let dz of [-4, -3, -2, 2, 3, 4]) {
                    if (
                        (dx == 4 && dz == 4)
                        || (dx == 4 && dz == -4)
                        || (dx == -4 && dz == 4)
                        || (dx == -4 && dz == -4)
                        || (dx == 3 && dz == 3)
                        || (dx == 3 && dz == -3)
                        || (dx == -3 && dz == 3)
                        || (dx == -3 && dz == -3)
                    ) continue

                    if (
                        (dx == 3 && dz == 4)
                        || (dx == 3 && dz == -4)
                        || (dx == -3 && dz == 4)
                        || (dx == -3 && dz == -4)
                        || (dx == 4 && dz == 3)
                        || (dx == 4 && dz == -3)
                        || (dx == -4 && dz == 3)
                        || (dx == -4 && dz == -3)
                    ) continue

                    if (
                        (dx == 2 && dz == 2)
                        || (dx == 2 && dz == -2)
                        || (dx == -2 && dz == 2)
                        || (dx == -2 && dz == -2)
                    ) {
                        builder.world().modifyBlock([6 + dx, 2, 6 + dz], state =>
                            state.setValue(BlockProperties.EAST, $Boolean.TRUE)
                                .setValue(BlockProperties.SOUTH, $Boolean.TRUE)
                                .setValue(BlockProperties.WEST, $Boolean.TRUE)
                                .setValue(BlockProperties.NORTH, $Boolean.TRUE)
                                .setValue(BlockProperties.UP, $Boolean.FALSE)
                                .setValue(BlockProperties.DOWN, $Boolean.FALSE)
                        )
                    }

                    if (
                        (dx == 2 && dz == 2)
                        || (dx == 2 && dz == -2)
                        || (dx == -2 && dz == 2)
                        || (dx == -2 && dz == -2)
                    ) continue

                    builder.world().setBlocks([6 + dx, 2, 6 + dz], 'create:fluid_pipe', false)

                    if (dx == 2) {
                        if (dz == 3 || dz == -3) {
                            builder.world().modifyBlock([6 + dx, 2, 6 + dz], state => 
                                state.setValue(BlockProperties.EAST, $Boolean.FALSE)
                                    .setValue(BlockProperties.SOUTH, $Boolean.TRUE)
                                    .setValue(BlockProperties.WEST, $Boolean.FALSE)
                                    .setValue(BlockProperties.NORTH, $Boolean.TRUE)
                                    .setValue(BlockProperties.UP, $Boolean.FALSE)
                                    .setValue(BlockProperties.DOWN, $Boolean.FALSE)
                            )
                        }

                        if (dz == 4) {
                            builder.world().modifyBlock([6 + dx, 2, 6 + dz], state => 
                                state.setValue(BlockProperties.EAST, $Boolean.FALSE)
                                    .setValue(BlockProperties.SOUTH, $Boolean.FALSE)
                                    .setValue(BlockProperties.WEST, $Boolean.FALSE)
                                    .setValue(BlockProperties.NORTH, $Boolean.TRUE)
                                    .setValue(BlockProperties.UP, $Boolean.FALSE)
                                    .setValue(BlockProperties.DOWN, $Boolean.TRUE)
                            )

                            builder.world().modifyBlock([6 + dx, 1, 6 + dz], state =>
                                state.setValue(BlockProperties.EAST, $Boolean.TRUE)
                                    .setValue(BlockProperties.SOUTH, $Boolean.FALSE)
                                    .setValue(BlockProperties.WEST, $Boolean.FALSE)
                                    .setValue(BlockProperties.NORTH, $Boolean.FALSE)
                                    .setValue(BlockProperties.UP, $Boolean.TRUE)
                                    .setValue(BlockProperties.DOWN, $Boolean.FALSE)
                            )
                        }

                        if (dz == -4) {
                            builder.world().modifyBlock([6 + dx, 2, 6 + dz], state => 
                                state.setValue(BlockProperties.EAST, $Boolean.FALSE)
                                    .setValue(BlockProperties.SOUTH, $Boolean.TRUE)
                                    .setValue(BlockProperties.WEST, $Boolean.FALSE)
                                    .setValue(BlockProperties.NORTH, $Boolean.FALSE)
                                    .setValue(BlockProperties.UP, $Boolean.FALSE)
                                    .setValue(BlockProperties.DOWN, $Boolean.TRUE)
                            )

                            builder.world().modifyBlock([6 + dx, 1, 6 + dz], state =>
                                state.setValue(BlockProperties.EAST, $Boolean.TRUE)
                                    .setValue(BlockProperties.SOUTH, $Boolean.FALSE)
                                    .setValue(BlockProperties.WEST, $Boolean.FALSE)
                                    .setValue(BlockProperties.NORTH, $Boolean.FALSE)
                                    .setValue(BlockProperties.UP, $Boolean.TRUE)
                                    .setValue(BlockProperties.DOWN, $Boolean.FALSE)
                            )
                        }
                    } else if (dx == -2) {
                        if (dz == 3 || dz == -3) {
                            builder.world().modifyBlock([6 + dx, 2, 6 + dz], state => 
                                state.setValue(BlockProperties.EAST, $Boolean.FALSE)
                                    .setValue(BlockProperties.SOUTH, $Boolean.TRUE)
                                    .setValue(BlockProperties.WEST, $Boolean.FALSE)
                                    .setValue(BlockProperties.NORTH, $Boolean.TRUE)
                                    .setValue(BlockProperties.UP, $Boolean.FALSE)
                                    .setValue(BlockProperties.DOWN, $Boolean.FALSE)
                            )
                        }

                        if (dz == 4) {
                            builder.world().modifyBlock([6 + dx, 2, 6 + dz], state => 
                                state.setValue(BlockProperties.EAST, $Boolean.FALSE)
                                    .setValue(BlockProperties.SOUTH, $Boolean.FALSE)
                                    .setValue(BlockProperties.WEST, $Boolean.FALSE)
                                    .setValue(BlockProperties.NORTH, $Boolean.TRUE)
                                    .setValue(BlockProperties.UP, $Boolean.FALSE)
                                    .setValue(BlockProperties.DOWN, $Boolean.TRUE)
                            )

                            builder.world().modifyBlock([6 + dx, 1, 6 + dz], state =>
                                state.setValue(BlockProperties.EAST, $Boolean.FALSE)
                                    .setValue(BlockProperties.SOUTH, $Boolean.FALSE)
                                    .setValue(BlockProperties.WEST, $Boolean.TRUE)
                                    .setValue(BlockProperties.NORTH, $Boolean.FALSE)
                                    .setValue(BlockProperties.UP, $Boolean.TRUE)
                                    .setValue(BlockProperties.DOWN, $Boolean.FALSE)
                            )
                        }

                        if (dz == -4) {
                            builder.world().modifyBlock([6 + dx, 2, 6 + dz], state => 
                                state.setValue(BlockProperties.EAST, $Boolean.FALSE)
                                    .setValue(BlockProperties.SOUTH, $Boolean.TRUE)
                                    .setValue(BlockProperties.WEST, $Boolean.FALSE)
                                    .setValue(BlockProperties.NORTH, $Boolean.FALSE)
                                    .setValue(BlockProperties.UP, $Boolean.FALSE)
                                    .setValue(BlockProperties.DOWN, $Boolean.TRUE)
                            )

                            builder.world().modifyBlock([6 + dx, 1, 6 + dz], state =>
                                state.setValue(BlockProperties.EAST, $Boolean.FALSE)
                                    .setValue(BlockProperties.SOUTH, $Boolean.FALSE)
                                    .setValue(BlockProperties.WEST, $Boolean.TRUE)
                                    .setValue(BlockProperties.NORTH, $Boolean.FALSE)
                                    .setValue(BlockProperties.UP, $Boolean.TRUE)
                                    .setValue(BlockProperties.DOWN, $Boolean.FALSE)
                            )
                        }
                    } else if (dz == 2) {
                        if (dx == 3 || dx == -3) {
                            builder.world().modifyBlock([6 + dx, 2, 6 + dz], state => 
                                state.setValue(BlockProperties.EAST, $Boolean.TRUE)
                                    .setValue(BlockProperties.SOUTH, $Boolean.FALSE)
                                    .setValue(BlockProperties.WEST, $Boolean.TRUE)
                                    .setValue(BlockProperties.NORTH, $Boolean.FALSE)
                                    .setValue(BlockProperties.UP, $Boolean.FALSE)
                                    .setValue(BlockProperties.DOWN, $Boolean.FALSE)
                            )
                        }

                        if (dx == 4) {
                            builder.world().modifyBlock([6 + dx, 2, 6 + dz], state => 
                                state.setValue(BlockProperties.EAST, $Boolean.FALSE)
                                    .setValue(BlockProperties.SOUTH, $Boolean.FALSE)
                                    .setValue(BlockProperties.WEST, $Boolean.TRUE)
                                    .setValue(BlockProperties.NORTH, $Boolean.FALSE)
                                    .setValue(BlockProperties.UP, $Boolean.FALSE)
                                    .setValue(BlockProperties.DOWN, $Boolean.TRUE)
                            )

                            builder.world().modifyBlock([6 + dx, 1, 6 + dz], state =>
                                state.setValue(BlockProperties.EAST, $Boolean.FALSE)
                                    .setValue(BlockProperties.SOUTH, $Boolean.TRUE)
                                    .setValue(BlockProperties.WEST, $Boolean.FALSE)
                                    .setValue(BlockProperties.NORTH, $Boolean.FALSE)
                                    .setValue(BlockProperties.UP, $Boolean.TRUE)
                                    .setValue(BlockProperties.DOWN, $Boolean.FALSE)
                            )
                        }

                        if (dx == -4) {
                            builder.world().modifyBlock([6 + dx, 2, 6 + dz], state => 
                                state.setValue(BlockProperties.EAST, $Boolean.TRUE)
                                    .setValue(BlockProperties.SOUTH, $Boolean.FALSE)
                                    .setValue(BlockProperties.WEST, $Boolean.FALSE)
                                    .setValue(BlockProperties.NORTH, $Boolean.FALSE)
                                    .setValue(BlockProperties.UP, $Boolean.FALSE)
                                    .setValue(BlockProperties.DOWN, $Boolean.TRUE)
                            )

                            builder.world().modifyBlock([6 + dx, 1, 6 + dz], state =>
                                state.setValue(BlockProperties.EAST, $Boolean.FALSE)
                                    .setValue(BlockProperties.SOUTH, $Boolean.TRUE)
                                    .setValue(BlockProperties.WEST, $Boolean.FALSE)
                                    .setValue(BlockProperties.NORTH, $Boolean.FALSE)
                                    .setValue(BlockProperties.UP, $Boolean.TRUE)
                                    .setValue(BlockProperties.DOWN, $Boolean.FALSE)
                            )
                        }
                    } else if (dz == -2) {
                        if (dx == 3 || dx == -3) {
                            builder.world().modifyBlock([6 + dx, 2, 6 + dz], state => 
                                state.setValue(BlockProperties.EAST, $Boolean.TRUE)
                                    .setValue(BlockProperties.SOUTH, $Boolean.FALSE)
                                    .setValue(BlockProperties.WEST, $Boolean.TRUE)
                                    .setValue(BlockProperties.NORTH, $Boolean.FALSE)
                                    .setValue(BlockProperties.UP, $Boolean.FALSE)
                                    .setValue(BlockProperties.DOWN, $Boolean.FALSE)
                            )
                        }

                        if (dx == 4) {
                            builder.world().modifyBlock([6 + dx, 2, 6 + dz], state => 
                                state.setValue(BlockProperties.EAST, $Boolean.FALSE)
                                    .setValue(BlockProperties.SOUTH, $Boolean.FALSE)
                                    .setValue(BlockProperties.WEST, $Boolean.TRUE)
                                    .setValue(BlockProperties.NORTH, $Boolean.FALSE)
                                    .setValue(BlockProperties.UP, $Boolean.FALSE)
                                    .setValue(BlockProperties.DOWN, $Boolean.TRUE)
                            )

                            builder.world().modifyBlock([6 + dx, 1, 6 + dz], state =>
                                state.setValue(BlockProperties.EAST, $Boolean.FALSE)
                                    .setValue(BlockProperties.SOUTH, $Boolean.TRUE)
                                    .setValue(BlockProperties.WEST, $Boolean.FALSE)
                                    .setValue(BlockProperties.NORTH, $Boolean.FALSE)
                                    .setValue(BlockProperties.UP, $Boolean.TRUE)
                                    .setValue(BlockProperties.DOWN, $Boolean.FALSE)
                            )
                        }

                        if (dx == -4) {
                            builder.world().modifyBlock([6 + dx, 2, 6 + dz], state => 
                                state.setValue(BlockProperties.EAST, $Boolean.TRUE)
                                    .setValue(BlockProperties.SOUTH, $Boolean.FALSE)
                                    .setValue(BlockProperties.WEST, $Boolean.FALSE)
                                    .setValue(BlockProperties.NORTH, $Boolean.FALSE)
                                    .setValue(BlockProperties.UP, $Boolean.FALSE)
                                    .setValue(BlockProperties.DOWN, $Boolean.TRUE)
                            )

                            builder.world().modifyBlock([6 + dx, 1, 6 + dz], state =>
                                state.setValue(BlockProperties.EAST, $Boolean.FALSE)
                                    .setValue(BlockProperties.SOUTH, $Boolean.FALSE)
                                    .setValue(BlockProperties.WEST, $Boolean.FALSE)
                                    .setValue(BlockProperties.NORTH, $Boolean.TRUE)
                                    .setValue(BlockProperties.UP, $Boolean.TRUE)
                                    .setValue(BlockProperties.DOWN, $Boolean.FALSE)
                            )
                        }
                    }

                    builder.world().showSection([6 + dx, 2, 6 + dz], Direction.DOWN)
                    builder.idle(1)
                }
            }

            builder.idle(20 * 1)
            builder.text(20 * 2, 'kubejs:aboveground_5', [2, 1, 5])
            builder.idle(20 * 3)

            //流体管道箱
            builder.addKeyframe()

            for (let dx of [-2, 2]) {
                for (let dz of [-2, 2]) {
                    builder.showControls(20 * 1.5, [6 + dx, 2, 6 + dz], 'left')
                        .rightClick()
                        .withItem('create:copper_casing')

                    builder.idle(20 * 2)

                    builder.world().setBlocks([6 + dx, 2, 6 + dz], 'create:encased_fluid_pipe', true)
                    builder.idle(20 * 0.5)
                }
            }

            builder.idle(20 * 1)
            builder.text(20 * 2, 'kubejs:aboveground_6', [4, 2, 8])
            builder.idle(20 * 3)

            for (let dx of [-4, -2, 2, 4]) {
                for (let dz of [-4, -2, 2, 4]) {
                    if (
                        (dx == 4 && dz == 4)
                        || (dx == 4 && dz == -4)
                        || (dx == -4 && dz == 4)
                        || (dx == -4 && dz == -4)
                        || (dx == 2 && dz == 2)
                        || (dx == 2 && dz == -2)
                        || (dx == -2 && dz == 2)
                        || (dx == -2 && dz == -2)
                    ) continue

                    builder.world().setBlocks([6 + dx, 1, 6 + dz], 'create:encased_fluid_pipe', true)
                    builder.idle(1)
                }
            }

            builder.idle(20 * 1)
            builder.text(20 * 2, 'kubejs:aboveground_7', [4, 2, 5])
            builder.idle(20 * 3)

            //动力泵
            builder.addKeyframe()

            for (let d of [-3, 3]) {
                builder.world().setBlocks([6 + d, 2, 6], 'create:mechanical_pump', false)
                builder.world().setBlocks([6, 2, 6 + d], 'create:mechanical_pump', false)

                if (d == -3) {
                    builder.world().modifyBlock([6 + d, 2, 6], state => 
                        state.setValue(BlockProperties.FACING, Direction.WEST)
                    )

                    builder.world().modifyBlock([6, 2, 6 + d], state => 
                        state.setValue(BlockProperties.FACING, Direction.NORTH)
                    )
                } else {
                    builder.world().modifyBlock([6 + d, 2, 6], state => 
                        state.setValue(BlockProperties.FACING, Direction.EAST)
                    )

                    builder.world().modifyBlock([6, 2, 6 + d], state => 
                        state.setValue(BlockProperties.FACING, Direction.SOUTH)
                    )
                }

                builder.world().showSection([6 + d, 2, 6], Direction.DOWN)
                builder.world().showSection([6, 2, 6 + d], Direction.DOWN)
            }

            for (let d of [-2, 2]) {
                if (d == -2) {
                    builder.world().modifyBlock([6 + d, 2, 6], state =>
                        state.setValue(BlockProperties.WEST, $Boolean.TRUE)
                    )

                    builder.world().modifyBlock([6, 2, 6 + d], state =>
                        state.setValue(BlockProperties.NORTH, $Boolean.TRUE)
                    )
                } else {
                    builder.world().modifyBlock([6 + d, 2, 6], state =>
                        state.setValue(BlockProperties.EAST, $Boolean.TRUE)
                    )

                    builder.world().modifyBlock([6, 2, 6 + d], state =>
                        state.setValue(BlockProperties.SOUTH, $Boolean.TRUE)
                    )
                }
            }

            builder.idle(20 * 1)
            builder.text(20 * 2, 'kubejs:aboveground_8', [6, 2, 6])
            builder.idle(20 * 3)

            for (let dx of [-3, -2, 2, 3]) {
                for (let dz of [-3, -2, 2, 3]) {
                    if (
                        (dx == 3 && dz == 3)
                        || (dx == 3 && dz == -3)
                        || (dx == -3 && dz == 3)
                        || (dx == -3 && dz == -3)
                        || (dx == 2 && dz == 2)
                        || (dx == 2 && dz == -2)
                        || (dx == -2 && dz == 2)
                        || (dx == -2 && dz == -2)
                    ) continue

                    builder.world().setBlocks([6 + dx, 2, 6 + dz], 'create:mechanical_pump')

                    if (dx == 3) {
                        builder.world().modifyBlock([6 + dx, 2, 6 + dz], state => 
                            state.setValue(BlockProperties.FACING, Direction.WEST)
                        , true) 
                    } else if (dx == -3) {
                        builder.world().modifyBlock([6 + dx, 2, 6 + dz], state => 
                            state.setValue(BlockProperties.FACING, Direction.EAST)
                        , true)
                    }

                    if (dz == 3) {
                        builder.world().modifyBlock([6 + dx, 2, 6 + dz], state => 
                            state.setValue(BlockProperties.FACING, Direction.NORTH)
                        , true)
                    } else if (dz == -3) {
                        builder.world().modifyBlock([6 + dx, 2, 6 + dz], state => 
                            state.setValue(BlockProperties.FACING, Direction.SOUTH)
                        , true)
                    }

                    builder.idle(1)
                }
            }

            builder.idle(20 * 1)
            builder.text(20 * 2, 'kubejs:aboveground_9', [4, 2, 8])
            builder.idle(20 * 3)

            //安山脚手架
            builder.addKeyframe()

            for (let dx of [-2, 2]) {
                for (let dz of [-2, 2]) {
                    for (let dy of [3, 4]) {
                        builder.world().setBlocks([6 + dx, dy, 6 + dz], 'create:andesite_scaffolding', false)
                        builder.world().showSection([6 + dx, dy, 6 + dz], Direction.DOWN)
                        builder.idle(2)
                    }
                }
            }

            builder.idle(20 * 1)
            builder.text(20 * 2, 'kubejs:aboveground_10', [4, 3, 8])
            builder.idle(20 * 3)

            //发射台
            builder.addKeyframe()

            builder.world().setBlocks([6, 3, 6], 'ad_astra:launch_pad', false)
            builder.world().showSection([6, 3, 6], Direction.DOWN)

            builder.idle(20 * 1)
            builder.text(20 * 2, 'kubejs:aboveground_11', [6, 3, 6])
            builder.idle(20 * 3)

            //添加动力和注入水源
            builder.addKeyframe()

            for (let d of [-3, 3]) {
                builder.world().modifyBlockEntityNBT([6 + d, 2, 6], nbt => nbt.Speed = 16)
                builder.world().modifyBlockEntityNBT([6, 2, 6 + d], nbt => nbt.Speed = 16)
            }

            for (let dx of [-3, -2, 2, 3]) {
                for (let dz of [-3, -2, 2, 3]) {
                    if (
                        (dx == 3 && dz == 3)
                        || (dx == 3 && dz == -3)
                        || (dx == -3 && dz == 3)
                        || (dx == -3 && dz == -3)
                        || (dx == 2 && dz == 2)
                        || (dx == 2 && dz == -2)
                        || (dx == -2 && dz == 2)
                        || (dx == -2 && dz == -2)
                    ) continue

                    builder.world().modifyBlockEntityNBT([6 + dx, 2, 6 + dz], nbt => 
                        nbt.Speed = 16
                    )

                    if (dx == 3) {
                        builder.world().modifyBlockEntityNBT([6 + dx, 2, 6 + dz], nbt => 
                            nbt.west = {
                                Flow: {
                                    FluidName: 'minecraft:water',
                                    Amount: 1,
                                    ln: false
                                }
                            }
                        )
                    } else if (dx == -3) {
                        builder.world().modifyBlockEntityNBT([6 + dx, 2, 6 + dz], nbt => 
                            nbt.east = {
                                Flow: {
                                    FluidName: 'minecraft:water',
                                    Amount: 1,
                                    ln: false
                                }
                            }
                        )
                    }

                    if (dz == 3) {
                        builder.world().modifyBlockEntityNBT([6 + dx, 2, 6 + dz], nbt => 
                            nbt.north = {
                                Flow: {
                                    FluidName: 'minecraft:water',
                                    Amount: 1,
                                    ln: false
                                }
                            }
                        )
                    } else if (dz == -3) {
                        builder.world().modifyBlockEntityNBT([6 + dx, 2, 6 + dz], nbt => 
                            nbt.south = {
                                Flow: {
                                    FluidName: 'minecraft:water',
                                    Amount: 1,
                                    ln: false
                                }
                            }
                        )
                    }
                }
            }

            for (let d of [-4, 4]) {
                builder.world().setBlocks([6 + d, 2, 6], 'minecraft:air', false)
                builder.world().setBlocks([6, 2, 6 + d], 'minecraft:air', false)
                builder.world().showSection([6 + d, 2, 6], Direction.DOWN)
                builder.world().showSection([6, 2, 6 + d], Direction.DOWN)
                builder.idle(20 * 1)
                builder.world().setBlocks([6 + d, 2, 6], 'minecraft:water', false)
                builder.world().setBlocks([6, 2, 6 + d], 'minecraft:water', false)
            }

            builder.idle(20 * 1)
            builder.text(20 * 2, 'kubejs:aboveground_12', [3, 3, 6])
            builder.idle(20 * 3)

            for (let d of [-4, 4]) {
                builder.world().hideSection([6 + d, 2, 6], Direction.UP)
                builder.world().hideSection([6, 2, 6 + d], Direction.UP)
            }

            builder.idle(20 * 1)

            for (let d of [-5, -4, 4, 5]) {
                builder.world().setBlocks([6 + d, 2, 6], 'create:fluid_pipe')
                builder.world().modifyBlock([6 + d, 2, 6], state => 
                    state.setValue(BlockProperties.EAST, $Boolean.TRUE)
                        .setValue(BlockProperties.SOUTH, $Boolean.FALSE)
                        .setValue(BlockProperties.WEST, $Boolean.TRUE)
                        .setValue(BlockProperties.NORTH, $Boolean.FALSE)
                        .setValue(BlockProperties.UP, $Boolean.FALSE)
                        .setValue(BlockProperties.DOWN, $Boolean.FALSE)
                )
                builder.world().setBlocks([6, 2, 6 + d], 'create:fluid_pipe')
                builder.world().modifyBlock([6, 2, 6 + d], state => 
                    state.setValue(BlockProperties.EAST, $Boolean.FALSE)
                        .setValue(BlockProperties.SOUTH, $Boolean.TRUE)
                        .setValue(BlockProperties.WEST, $Boolean.FALSE)
                        .setValue(BlockProperties.NORTH, $Boolean.TRUE)
                        .setValue(BlockProperties.UP, $Boolean.FALSE)
                        .setValue(BlockProperties.DOWN, $Boolean.FALSE)
                )
                builder.world().showSection([6 + d, 2, 6], Direction.DOWN)
                builder.world().showSection([6, 2, 6 + d], Direction.DOWN)
            }

            builder.idle(20 * 1)
            builder.text(20 * 2, 'kubejs:aboveground_13', [2, 3, 6])
            builder.idle(20 * 3)

            for (let d of [-5, -4, 4, 5]) {
                builder.world().hideSection([6 + d, 2, 6], Direction.UP)
                builder.world().hideSection([6, 2, 6 + d], Direction.UP)
            }

            builder.idle(20 * 1)
            builder.text(20 * 2, 'kubejs:aboveground_14', [4, 1, 8])
            builder.idle(20 * 3)
        })
})