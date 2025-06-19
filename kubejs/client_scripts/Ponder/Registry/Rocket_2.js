Ponder.registry(event => {
    //火箭
    event.create('ad_astra:tier_2_rocket')
        .scene('kubejs:rocket_2_padestal', 'kubejs:rocket_2', (builder, util) => {

            //显示地板
            builder.showBasePlate()
            builder.scaleSceneView(0.5)
            builder.idle(10)

            //显示火箭支撑脚
            for (let i = 1; i < 4; i++) {
                for (let j of [-3, 3]) {
                    for (let k of [-3, 3]) {
                        builder.world().setBlocks([5 + j, i, 5 + k], 'ad_astra:steel_pillar')
                        builder.world().showSection([5 + j, i, 5 + k], Direction.DOWN)
                        builder.idle(1)
                    }

                }
            }

            for (let i = 2; i < 4; i++) {
                for (let j of [-2, 2]) {
                    for (let k of [-2, 2]) {
                        builder.world().setBlocks([5 + j, i, 5 + k], 'ad_astra:steel_pillar')
                        builder.world().showSection([5 + j, i, 5 + k], Direction.DOWN)
                        builder.idle(1)
                    }

                }
            }

            for (let dx of [-2, 2]) {
                for (let dz of [-2, 2]) {
                    builder.world().setBlocks([5 + dx, 4, 5 + dz], 'ad_astra:steel_plating_slab')
                    builder.world().showSection([5 + dx, 4, 5 + dz], Direction.DOWN)
                    builder.world().modifyBlock([5 + dx, 4, 5 + dz], state =>
                        state.setValue(BlockProperties.SLAB_TYPE, $SlabType.BOTTOM)
                    )
                    builder.idle(1)
                }
            }

            builder.idle(20 * 1)
            builder.text(20 * 3, 'kubejs:rocket_2_padestal_1', [3, 4, 3])
            builder.idle(20 * 3)

            //喷嘴部分
            builder.addKeyframe()

            let coordinate_1 = [
                [4, 2, 4], [4, 2, 5], [4, 2, 6],
                [5, 2, 6], [6, 2, 6], [6, 2, 5],
                [6, 2, 4], [5, 2, 4]
            ]

            for (let i = 0; i < 8; i++) {
                switch (Math.floor(i / 2)) {
                    case 0:
                        builder.world().setBlocks(coordinate_1[i], 'ad_astra:steel_plating_stairs')
                        builder.world().modifyBlock(coordinate_1[i], state =>
                            state.setValue(BlockProperties.FACING, Direction.EAST)
                        )
                        break
                    case 1:
                        builder.world().setBlocks(coordinate_1[i], 'ad_astra:steel_plating_stairs')
                        builder.world().modifyBlock(coordinate_1[i], state =>
                            state.setValue(BlockProperties.FACING, Direction.NORTH)
                        )
                        break
                    case 2:
                        builder.world().setBlocks(coordinate_1[i], 'ad_astra:steel_plating_stairs')
                        builder.world().modifyBlock(coordinate_1[i], state =>
                            state.setValue(BlockProperties.FACING, Direction.WEST)
                        )
                        break
                    case 3:
                        builder.world().setBlocks(coordinate_1[i], 'ad_astra:steel_plating_stairs')
                        builder.world().modifyBlock(coordinate_1[i], state =>
                            state.setValue(BlockProperties.FACING, Direction.SOUTH)
                        )
                        break
                }

                if (i % 2 == 0) {
                    builder.world().modifyBlock(coordinate_1[i], state =>
                        state.setValue(BlockProperties.STAIRS_SHAPE, $StairsShape.OUTER_RIGHT)
                    )
                }

                builder.world().showSection(coordinate_1[i], Direction.DOWN)
                builder.idle(1)
            }

            builder.idle(20 * 1)
            builder.text(20 * 2, 'kubejs:rocket_2_padestal_2', [5, 2, 5])
            builder.idle(20 * 3)

            //火箭基座
            builder.addKeyframe()

            for (let dx of [-1, 0, 1]) {
                for (let dz of [-1, 0, 1]) {
                    if (dx == 0 && dz == 0) {
                        builder.world().setBlocks([5 + dx, 3, 5 + dz], 'kubejs:desh_tank')
                        builder.world().showSection([5 + dx, 3, 5 + dz], Direction.DOWN)
                    } else {
                        builder.world().setBlocks([5 + dx, 3, 5 + dz], 'ad_astra:steel_plating')
                        builder.world().showSection([5 + dx, 3, 5 + dz], Direction.DOWN)
                    }
                    builder.idle(1)
                }
            }

            builder.idle(20 * 1)
            builder.text(20 * 3, 'kubejs:rocket_2_padestal_3', [5, 3, 5])
            builder.idle(20 * 3)

            //火箭雷达
            builder.addKeyframe()

            for (let dx of [-2, 0, 2]) {
                for (let dz of [-2, 0, 2]) {
                    if (dx == 0 || dz == 0) {
                        if (dx == 0 && dz == 0) {
                            continue
                        } else {
                            builder.world().setBlocks([5 + dx, 3, 5 + dz], 'ad_astra:steel_block')
                            builder.world().setBlocks([5 + dx, 4, 5 + dz], 'ad_astra:desh_plating_slab')
                            builder.world().modifyBlock([5 + dx, 4, 5 + dz], state =>
                                state.setValue(BlockProperties.SLAB_TYPE, $SlabType.BOTTOM)
                            )
                            builder.world().showSection([5 + dx, 3, 5 + dz], Direction.DOWN)
                            builder.world().showSection([5 + dx, 4, 5 + dz], Direction.DOWN)
                            builder.idle(1)
                        }
                    }
                }
            }

            builder.idle(20 * 1)

            for (let dx of [-3, 3]) {
                for (let dz of [-3, 3]) {
                    builder.world().setBlocks([5 + dx, 4, 5 + dz], 'ad_astra:glowing_desh_pillar')
                    builder.world().showSection([5 + dx, 4, 5 + dz], Direction.DOWN)
                    builder.idle(1)
                }
            }


            builder.idle(20 * 1)
            builder.text(20 * 2, 'kubejs:rocket_2_padestal_4', [3, 5, 5])
            builder.idle(20 * 3)

        })

        .scene('kubejs:rocket_2_body', 'kubejs:rocket_2', (builder, util) => {

            ///火箭主体
            builder.showBasePlate()
            builder.scaleSceneView(0.5)

            for (let dx of [-2, 0, 2]) {
                for (let dz of [-2, 0, 2]) {
                    if (dx == 0 || dz == 0) {
                        if (dx == 0 && dz == 0) {
                            continue
                        } else {
                            builder.world().setBlocks([5 + dx, 0, 5 + dz], 'ad_astra:steel_block')
                            builder.world().setBlocks([5 + dx, 1, 5 + dz], 'ad_astra:desh_plating_slab')
                            builder.world().modifyBlock([5 + dx, 1, 5 + dz], state =>
                                state.setValue(BlockProperties.SLAB_TYPE, $SlabType.BOTTOM)
                            )
                            builder.world().showSection([5 + dx, 0, 5 + dz], Direction.DOWN)
                            builder.world().showSection([5 + dx, 1, 5 + dz], Direction.DOWN)
                        }
                    }
                }
            }

            for (let dx of [-1, 0, 1]) {
                for (let dz of [-1, 0, 1]) {
                    if (dx == 0 && dz == 0) {
                        builder.world().setBlocks([5 + dx, 0, 5 + dz], 'kubejs:desh_tank')
                        builder.world().showSection([5 + dx, 0, 5 + dz], Direction.DOWN)
                    } else {
                        builder.world().setBlocks([5 + dx, 0, 5 + dz], 'ad_astra:steel_plating')
                        builder.world().showSection([5 + dx, 0, 5 + dz], Direction.DOWN)
                    }
                }
            }

            builder.idle(20 * 1)
            builder.text(20 * 2, 'kubejs:rocket_2_body_1', [5, 0, 6])
            builder.idle(20 * 3)

            builder.addKeyframe()

            for (let dx of [-1, 0, 1]) {
                for (let dz of [-1, 0, 1]) {
                    if (dx == 0 && dz == 0) {
                        continue
                    } else {
                        builder.world().setBlocks([5 + dx, 1, 5 + dz], 'ad_astra:steel_plating')
                        builder.world().showSection([5 + dx, 1, 5 + dz], Direction.DOWN)
                        builder.idle(1)
                    }
                }
            }

            builder.idle(20 * 1)
            builder.text(20 * 2, 'kubejs:rocket_2_body_2', [4, 2, 4])
            builder.idle(20 * 3)

            builder.addKeyframe()

            for (let dy of [2, 3, 4, 5, 6]) {
                for (let dx of [-1, 1]) {
                    for (let dz of [-1, 1]) {
                        builder.world().setBlocks([5 + dx, dy, 5 + dz], 'ad_astra:steel_pillar')
                        builder.world().showSection([5 + dx, dy, 5 + dz], Direction.DOWN)
                        builder.idle(1)
                    }
                }
                let coordinate = [[4, dy, 5], [6, dy, 5], [5, dy, 6], [5, dy, 4]]
                for (let i = 0; i < 4; i++) {
                    builder.world().setBlocks(coordinate[i], 'ad_astra:desh_block')
                    builder.world().showSection(coordinate[i], Direction.DOWN)
                    builder.idle(1)
                }

            }
            builder.idle(20 * 1)
            builder.text(20 * 2, 'kubejs:rocket_2_body_3', [5, 4, 4])
            builder.idle(20 * 1)

            builder.addKeyframe()

            builder.world().hideSection([5, 3, 4], Direction.NORTH)
            builder.world().setBlocks([5, 3, 4], 'minecraft:air', true)
            builder.world().hideSection([5, 4, 4], Direction.NORTH)
            builder.world().setBlocks([5, 4, 4], 'minecraft:air', true)
            builder.idle(20 * 1)

            builder.world().setBlocks([5, 3, 4], 'createnuclear:reinforced_glass')
            builder.world().setBlocks([5, 4, 4], 'createnuclear:reinforced_glass')
            builder.world().showSection([5, 3, 4], Direction.SOUTH)
            builder.world().showSection([5, 4, 4], Direction.SOUTH)

            builder.idle(20 * 1)

            //火箭顶部
            builder.addKeyframe()

            for (let dx of [-1, 0, 1]) {
                for (let dz of [-1, 0, 1]) {
                    if (dx == 0 && dz == 0) {
                        continue
                    } else {
                        builder.world().setBlocks([5 + dx, 7, 5 + dz], 'ad_astra:steel_plating')
                        builder.world().showSection([5 + dx, 7, 5 + dz], Direction.DOWN)
                        builder.idle(1)
                    }
                }
            }

            builder.idle(20 * 1)
            builder.text(20 * 2, 'kubejs:rocket_2_body_4', [5, 8, 5])
            builder.idle(20 * 3)

            builder.addKeyframe()

            let coordinate_2 = [
                [4, 8, 4], [4, 8, 5], [4, 8, 6],
                [5, 8, 6], [6, 8, 6], [6, 8, 5],
                [6, 8, 4], [5, 8, 4]
            ]

            for (let i = 0; i < 8; i++) {
                if (i % 2 == 0) {
                    builder.world().setBlocks(coordinate_2[i], 'ad_astra:steel_plating_stairs')
                    builder.world().modifyBlock(coordinate_2[i], state =>
                        state.setValue(BlockProperties.STAIRS_SHAPE, $StairsShape.OUTER_RIGHT)
                    )
                } else {
                    builder.world().setBlocks(coordinate_2[i], 'ad_astra:desh_plating_stairs')
                }
                
                switch (Math.floor(i / 2)) {
                    case 0:
                        builder.world().modifyBlock(coordinate_2[i], state =>
                            state.setValue(BlockProperties.FACING, Direction.EAST)
                        )
                        break
                    case 1:
                        builder.world().modifyBlock(coordinate_2[i], state =>
                            state.setValue(BlockProperties.FACING, Direction.NORTH)
                        )
                        break
                    case 2:
                        builder.world().modifyBlock(coordinate_2[i], state =>
                            state.setValue(BlockProperties.FACING, Direction.WEST)
                        )
                        break
                    case 3:
                        builder.world().modifyBlock(coordinate_2[i], state =>
                            state.setValue(BlockProperties.FACING, Direction.SOUTH)
                        )
                        break
                }

                builder.world().showSection(coordinate_2[i], Direction.DOWN)
                builder.idle(1)
            }

            builder.idle(20 * 1)

            for (let dy of [8, 9, 10]) {
                builder.world().setBlocks([5, dy, 5], 'ad_astra:steel_pillar')
                builder.world().showSection([5, dy, 5], Direction.DOWN)
                builder.idle(3)
            }

            builder.idle(20 * 1)

            builder.world().setBlocks([5, 11, 5], 'minecraft:lightning_rod')
            builder.world().showSection([5, 11, 5], Direction.DOWN)
            builder.world().modifyBlock([5, 11, 5], state => state.setValue(BlockProperties.FACING, Direction.UP))

            builder.idle(20 * 1)
            builder.text(20 * 2, 'kubejs:rocket_2_body_5', [5, 10, 5])
            builder.idle(20 * 3)

        })
        
        .scene('kubejs:rocket_2_whole', 'kubejs:rocket_2', (builder, util) => {

            builder.showBasePlate()
            builder.scaleSceneView(0.6)

            //显示火箭支撑脚
            for (let i = 1; i < 4; i++) {
                for (let j of [-3, 3]) {
                    for (let k of [-3, 3]) {
                        builder.world().setBlocks([5 + j, i, 5 + k], 'ad_astra:steel_pillar')
                        builder.world().showSection([5 + j, i, 5 + k], Direction.DOWN)
                    }

                }

            }
            for (let i = 2; i < 4; i++) {
                for (let j of [-2, 2]) {
                    for (let k of [-2, 2]) {
                        builder.world().setBlocks([5 + j, i, 5 + k], 'ad_astra:steel_pillar')
                        builder.world().showSection([5 + j, i, 5 + k], Direction.DOWN)
                    }

                }
            }
            for (let dx of [-2, 2]) {
                for (let dz of [-2, 2]) {
                    builder.world().setBlocks([5 + dx, 4, 5 + dz], 'ad_astra:steel_plating_slab')
                    builder.world().showSection([5 + dx, 4, 5 + dz], Direction.DOWN)
                    builder.world().modifyBlock([5 + dx, 4, 5 + dz], state =>
                        state.setValue(BlockProperties.SLAB_TYPE, $SlabType.BOTTOM)
                    )
                }
            }

            //喷嘴部分

            let coordinate_1 = [
                [4, 2, 4], [4, 2, 5], [4, 2, 6],
                [5, 2, 6], [6, 2, 6], [6, 2, 5],
                [6, 2, 4], [5, 2, 4]
            ]

            for (let i = 0; i < 8; i++) {
                switch (Math.floor(i / 2)) {
                    case 0:
                        builder.world().setBlocks(coordinate_1[i], 'ad_astra:steel_plating_stairs')
                        builder.world().modifyBlock(coordinate_1[i], state =>
                            state.setValue(BlockProperties.FACING, Direction.EAST)
                            )
                        break
                    case 1:
                        builder.world().setBlocks(coordinate_1[i], 'ad_astra:steel_plating_stairs')
                        builder.world().modifyBlock(coordinate_1[i], state =>
                            state.setValue(BlockProperties.FACING, Direction.NORTH)
                            )
                        break
                    case 2:
                        builder.world().setBlocks(coordinate_1[i], 'ad_astra:steel_plating_stairs')
                        builder.world().modifyBlock(coordinate_1[i], state =>
                            state.setValue(BlockProperties.FACING, Direction.WEST)
                            )
                        break
                    case 3:
                        builder.world().setBlocks(coordinate_1[i], 'ad_astra:steel_plating_stairs')
                        builder.world().modifyBlock(coordinate_1[i], state =>
                            state.setValue(BlockProperties.FACING, Direction.SOUTH)
                            )
                        break
                }

                if (i % 2 == 0) {
                    builder.world().modifyBlock(coordinate_1[i], state =>
                        state.setValue(BlockProperties.STAIRS_SHAPE, $StairsShape.OUTER_RIGHT)
                    )
                }
                builder.world().showSection(coordinate_1[i], Direction.DOWN)
            }

            //火箭基座
            for (let dx of [-1, 0, 1]) {
                for (let dz of [-1, 0, 1]) {
                    builder.world().setBlocks([5 + dx, 3, 5 + dz], 'ad_astra:steel_plating')
                    builder.world().showSection([5 + dx, 3, 5 + dz], Direction.DOWN)
                }
            }

            //火箭雷达
            for (let dx of [-2, 0, 2]) {
                for (let dz of [-2, 0, 2]) {
                    if (dx == 0 || dz == 0) {
                        if (dx == 0 && dz == 0) {
                            continue
                        } else {
                            builder.world().setBlocks([5 + dx, 3, 5 + dz], 'ad_astra:steel_block')
                            builder.world().setBlocks([5 + dx, 4, 5 + dz], 'ad_astra:desh_plating_slab')
                            builder.world().modifyBlock([5 + dx, 4, 5 + dz], state =>
                                state.setValue(BlockProperties.SLAB_TYPE, $SlabType.BOTTOM)
                            )
                            builder.world().showSection([5 + dx, 3, 5 + dz], Direction.DOWN)
                            builder.world().showSection([5 + dx, 4, 5 + dz], Direction.DOWN)
                        }
                    }
                }
            }

            for (let dx of [-3, 3]) {
                for (let dz of [-3, 3]) {
                    builder.world().setBlocks([5 + dx, 4, 5 + dz], 'ad_astra:glowing_desh_pillar')
                    builder.world().showSection([5 + dx, 4, 5 + dz], Direction.DOWN)
                }
            }

            for (let dx of [-1, 0, 1]) {
                for (let dz of [-1, 0, 1]) {
                    if (dx == 0 && dz == 0) {
                        continue
                    } else {
                        builder.world().setBlocks([5 + dx, 4, 5 + dz], 'ad_astra:steel_plating')
                        builder.world().showSection([5 + dx, 4, 5 + dz], Direction.DOWN)
                    }
                }
            }

            for (let dy of [5, 6, 7, 8, 9]) {
                for (let dx of [-1, 1]) {
                    for (let dz of [-1, 1]) {
                        builder.world().setBlocks([5 + dx, dy, 5 + dz], 'ad_astra:steel_pillar')
                        builder.world().showSection([5 + dx, dy, 5 + dz], Direction.DOWN)
                    }
                }

                let coordinate = [
                    [4, dy, 5], [6, dy, 5],
                    [5, dy, 6], [5, dy, 4]
                ]

                for (let i = 0; i < 4; i++) {
                    if (coordinate[i] == [5, 6, 4] || coordinate[i] == [5, 7, 4]) {
                        builder.world().setBlocks(coordinate[i], 'createnuclear:reinforced_glass')
                    } else {
                        builder.world().setBlocks(coordinate[i], 'ad_astra:desh_block')
                    }
                    builder.world().showSection(coordinate[i], Direction.DOWN)
                }
            }

            for (let dx of [-1, 0, 1]) {
                for (let dz of [-1, 0, 1]) {
                    if (dx == 0 && dz == 0) {
                        continue
                    } else {
                        builder.world().setBlocks([5 + dx, 10, 5 + dz], 'ad_astra:steel_plating')
                        builder.world().showSection([5 + dx, 10, 5 + dz], Direction.DOWN)
                    }
                }
            }

            let coordinate_2 = [
                [4, 11, 4], [4, 11, 5], [4, 11, 6],
                [5, 11, 6], [6, 11, 6], [6, 11, 5],
                [6, 11, 4], [5, 11, 4]
            ]

            for (let i = 0; i < 8; i++) {
                if (i % 2 == 0) {
                    builder.world().setBlocks(coordinate_2[i], 'ad_astra:steel_plating_stairs')
                    builder.world().modifyBlock(coordinate_2[i], state => 
                        state.setValue(BlockProperties.STAIRS_SHAPE, $StairsShape.OUTER_RIGHT)
                    )
                } else {
                    builder.world().setBlocks(coordinate_2[i], 'ad_astra:desh_plating_stairs')
                }

                switch (Math.floor(i / 2)) {
                    case 0:
                        builder.world().modifyBlock(coordinate_2[i], state =>
                            state.setValue(BlockProperties.FACING, Direction.EAST))
                        break
                    case 1:
                        builder.world().modifyBlock(coordinate_2[i], state =>
                            state.setValue(BlockProperties.FACING, Direction.NORTH))
                        break
                    case 2:
                        builder.world().modifyBlock(coordinate_2[i], state =>
                            state.setValue(BlockProperties.FACING, Direction.WEST))
                        break
                    case 3:
                        builder.world().modifyBlock(coordinate_2[i], state =>
                            state.setValue(BlockProperties.FACING, Direction.SOUTH))
                        break
                }

                builder.world().showSection(coordinate_2[i], Direction.DOWN)
            }

            for (let dy of [11, 12, 13]) {
                builder.world().setBlocks([5, dy, 5], 'ad_astra:steel_pillar')
                builder.world().showSection([5, dy, 5], Direction.DOWN)
            }

            builder.world().setBlocks([5, 14, 5], 'minecraft:lightning_rod')
            builder.world().showSection([5, 14, 5], Direction.DOWN)
            builder.world().modifyBlock([5, 14, 5], state => state.setValue(BlockProperties.FACING, Direction.UP))

            builder.overlay().showControls(20 * 2, [5, 5, 4], 'DOWN')
                .rightClick()
                .withItem('create:wrench')

            builder.idle(20 * 1)

            builder.world().hideSection([2, 1, 2, 9, 14, 9], Direction.UP)
            builder.world().setBlocks([2, 1, 2, 9, 14, 9], 'minecraft:air', true)
            
            let rocket_2 = builder.world().createEntity('ad_astra:tier_2_rocket', [6, 1, 6])

            builder.idle(20 * 3)
            builder.overlay().showControls(20 * 2, [6, 2, 6], 'DOWN')
                .leftClick()
            builder.idle(20 * 2)

            let itemEntity = builder.world().createItemEntity([6, 1, 6], [0, 0, 0], 'ad_astra:tier_2_rocket')

            builder.world().modifyEntity(itemEntity, entity => {
                entity.setNoGravity(true)
            })

            builder.world().removeEntity(rocket_2)
        })
})