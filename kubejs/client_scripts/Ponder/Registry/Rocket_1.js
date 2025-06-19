Ponder.registry(event => {

    //火箭
    event.create('ad_astra:tier_1_rocket')
        .scene('kubejs:rocket_1_pedestal', 'kubejs:rocket_1', (builder, util) => {

            //显示地板
            builder.showBasePlate()
            builder.scaleSceneView(0.5)
            builder.idle(10)

            //显示火箭支撑脚
            for (let i = 1; i < 4; i++) {
                for (let j of [-3, 3]) {
                    for (let k of [-3, 3]) {
                        builder.world().setBlocks([5 + j, i, 5 + k], 'ad_astra:steel_pillar', false)
                        builder.world().showSection([5 + j, i, 5 + k], Direction.DOWN)
                        builder.idle(1)
                    }

                }

            }
            for (let i = 2; i < 4; i++) {
                for (let j of [-2, 2]) {
                    for (let k of [-2, 2]) {
                        builder.world().setBlocks([5 + j, i, 5 + k], 'ad_astra:steel_pillar', false)
                        builder.world().showSection([5 + j, i, 5 + k], Direction.DOWN)
                        builder.idle(1)
                    }

                }
            }
            for (let dx of [-2, 2]) {
                for (let dz of [-2, 2]) {
                    builder.world().setBlocks([5 + dx, 4, 5 + dz], 'ad_astra:steel_plating_slab', false)
                    builder.world().showSection([5 + dx, 4, 5 + dz], Direction.DOWN)
                    builder.world().modifyBlock([5 + dx, 4, 5 + dz], state =>
                        state.setValue(BlockProperties.SLAB_TYPE, $SlabType.BOTTOM))
                    builder.idle(1)
                }
            }

            builder.idle(20 * 1)
            builder.text(20 * 3, 'kubejs:rocket_1_pedestal_1', [3, 4, 3])
            builder.idle(20 * 3)

            //喷嘴部分
            builder.addKeyframe()

            let coordinates_1 = [
                [4, 2, 4], [4, 2, 5], [4, 2, 6],
                [5, 2, 6], [6, 2, 6], [6, 2, 5],
                [6, 2, 4], [5, 2, 4]
            ]

            for (let i = 0; i < 8; i++) {
                switch (Math.floor(i / 2)) {
                    case 0:
                        builder.world().setBlocks(coordinates_1[i], 'ad_astra:steel_plating_stairs', false)
                        builder.world().modifyBlock(coordinates_1[i], state =>
                            state.setValue(BlockProperties.FACING, Direction.EAST)
                        )
                        break
                    case 1:
                        builder.world().setBlocks(coordinates_1[i], 'ad_astra:steel_plating_stairs', false)
                        builder.world().modifyBlock(coordinates_1[i], state =>
                            state.setValue(BlockProperties.FACING, Direction.NORTH)
                        )
                        break
                    case 2:
                        builder.world().setBlocks(coordinates_1[i], 'ad_astra:steel_plating_stairs', false)
                        builder.world().modifyBlock(coordinates_1[i], state =>
                            state.setValue(BlockProperties.FACING, Direction.WEST)
                        )
                        break
                    case 3:
                        builder.world().setBlocks(coordinates_1[i], 'ad_astra:steel_plating_stairs', false)
                        builder.world().modifyBlock(coordinates_1[i], state =>
                            state.setValue(BlockProperties.FACING, Direction.SOUTH)
                        )
                        break
                }

                if (i % 2 == 0) {
                    builder.world().modifyBlock(coordinates_1[i], state =>
                        state.setValue(BlockProperties.STAIRS_SHAPE, $StairsShape.OUTER_RIGHT)
                    )
                }

                builder.world().showSection(coordinates_1[i], Direction.DOWN)
                builder.idle(1)
            }

            builder.idle(20 * 1)
            builder.text(20 * 2, 'kubejs:rocket_1_pedestal_2', [5, 2, 5])
            builder.idle(20 * 3)

            //火箭基座
            builder.addKeyframe()

            for (let dx of [-1, 0, 1]) {
                for (let dz of [-1, 0, 1]) {
                    if (dx == 0 && dz == 0) {
                        builder.world().setBlocks([5 + dx, 3, 5 + dz], 'kubejs:steel_tank', false)
                        builder.world().showSection([5 + dx, 3, 5 + dz], Direction.DOWN)
                    } else {
                        builder.world().setBlocks([5 + dx, 3, 5 + dz], 'ad_astra:steel_plating', false)
                        builder.world().showSection([5 + dx, 3, 5 + dz], Direction.DOWN)
                    }
                    builder.idle(1)
                }
            }

            builder.idle(20 * 1)
            builder.text(20 * 3, 'kubejs:rocket_1_body_1', [5, 3, 5])
            builder.idle(20 * 3)
        })

        //火箭主体
        .scene('kubejs:rocket_1_body', 'kubejs:rocket_1', (builder, util) => {

            //显示地板
            builder.showBasePlate()
            builder.scaleSceneView(0.5)

            for (let dx = -1; dx <= 1; dx++) {
                for (let dz = -1; dz <= 1; dz++) {
                    if (dx == 0 && dz == 0) {
                        builder.world().setBlocks([5 + dx, 0, 5 + dz], 'kubejs:steel_tank', false)
                        builder.world().showSection([5 + dx, 0, 5 + dz], Direction.DOWN)
                    } else {
                        builder.world().setBlocks([5 + dx, 0, 5 + dz], 'ad_astra:steel_pillar', false)
                        builder.world().showSection([5 + dx, 0, 5 + dz], Direction.DOWN)
                    }
                }
            }

            for (let dx of [-3, -2, 2, 3]) {
                for (let dz of [-3, -2, 2, 3]) {
                    if (
                        (dx == -3 || dx == 3)
                        && (dz == -2 || dz == 2)
                    ) continue
                    if (
                        (dx == -2 || dx == 2)
                        && (dz == -3 || dz == 3)
                    ) continue

                    builder.world().setBlocks([5 + dx, 0, 5 + dz], 'ad_astra:steel_pillar', false)
                    builder.world().showSection([5 + dx, 0, 5 + dz], Direction.DOWN)
                    builder.idle(1)
                }
            }

            for (let dx of [-2, 2]) {
                for (let dz of [-2, 2]) {
                    builder.world().setBlocks([5 + dx, 1, 5 + dz], 'ad_astra:steel_plating_slab', false)
                    builder.world().showSection([5 + dx, 1, 5 + dz], Direction.DOWN)
                }
            }

            builder.idle(20 * 1)

            //火箭雷达
            for (let dz of [-1, 1]) {
                builder.world().setBlocks([5, 1, 5 + dz], 'ad_astra:steel_block', false)
                builder.world().showSection([5, 1, 5 + dz], Direction.DOWN)
                builder.idle(1)
            }

            for (let dx of [-1, 1]) {
                builder.world().setBlocks([5 + dx, 1, 5], 'ad_astra:steel_block', false)
                builder.world().showSection([5 + dx, 1, 5], Direction.DOWN)
                builder.idle(1)
            }

            builder.idle(20 * 1)

            for (let dx of [-3, 3]) {
                for (let dz of [-3, 3]) {
                    builder.world().setBlocks([5 + dx, 1, 5 + dz], 'create:railway_casing', false)
                    builder.world().showSection([5 + dx, 1, 5 + dz], Direction.DOWN)
                    builder.idle(1)
                }
            }

            builder.world().setBlocks([3, 1, 5], 'create:railway_casing', false)
            builder.world().showSection([3, 1, 5], Direction.EAST)
            builder.idle(1)

            builder.world().setBlocks([7, 1, 5], 'create:railway_casing', false)
            builder.world().showSection([7, 1, 5], Direction.WEST)
            builder.idle(1)

            builder.idle(20 * 1)
            builder.world().setBlocks([3, 2, 5], 'ad_astra:steel_plating_button', false)
            builder.world().modifyBlock([3, 2, 5], state =>
                state.setValue(BlockProperties.ATTACH_FACE, $AttachFace.FLOOR)
            )

            builder.world().showSection([3, 2, 5], Direction.DOWN)
            builder.idle(1)

            builder.world().setBlocks([7, 2, 5], 'ad_astra:steel_plating_button', false)
            builder.world().modifyBlock([7, 2, 5], state =>
                state.setValue(BlockProperties.ATTACH_FACE, $AttachFace.FLOOR)
            )
            builder.world().showSection([7, 2, 5], Direction.DOWN)

            builder.idle(20 * 1)
            builder.text(20 * 2, 'kubejs:rocket_1_body_2', [3, 4, 5])
            builder.idle(20 * 3)

            //火箭主体
            builder.addKeyframe()

            for (let dy = 1; dy <= 5; dy++) {
                for (let dx of [-1, 1]) {
                    for (let dz of [-1, 1]) {
                        builder.world().setBlocks([5 + dx, dy, 5 + dz], 'ad_astra:steel_pillar', false)
                        builder.world().showSection([5 + dx, dy, 5 + dz], Direction.DOWN)
                        builder.idle(1)
                    }
                }

                let coordinates = [
                    [4, dy, 5], [6, dy, 5],
                    [5, dy, 6], [5, dy, 4]
                ]

                if (dy > 1) {
                    for (let i = 0; i < 4; i++) {
                        builder.world().setBlocks(coordinates[i], 'ad_astra:steel_block', false)
                        builder.world().showSection(coordinates[i], Direction.DOWN)
                        builder.idle(1)
                    }
                }
            }

            builder.idle(20 * 1)
            builder.text(20 * 2, 'kubejs:rocket_1_body_3', [5, 2, 4])
            builder.idle(20 * 1)

            builder.world().hideSection([5, 2, 4], Direction.NORTH)
            builder.world().setBlocks([5, 2, 4], 'minecraft:air', true)

            builder.world().hideSection([5, 3, 4], Direction.NORTH)
            builder.world().setBlocks([5, 3, 4], 'minecraft:air', true)

            builder.idle(20 * 1)

            builder.world().setBlocks([5, 2, 4], 'createnuclear:reinforced_glass', false)
            builder.world().setBlocks([5, 3, 4], 'createnuclear:reinforced_glass', false)
            builder.world().showSection([5, 2, 4], Direction.SOUTH)
            builder.world().showSection([5, 3, 4], Direction.SOUTH)

            builder.idle(20 * 1)
            builder.text(20 * 2, 'kubejs:rocket_1_body_4', [4, 4, 4])
            builder.idle(20 * 3)

            //火箭顶部
            builder.addKeyframe()

            let coordinates_2 = [
                [4, 6, 4], [4, 6, 5], [4, 6, 6],
                [5, 6, 6], [6, 6, 6], [6, 6, 5],
                [6, 6, 4], [5, 6, 4]
            ]

            for (let i = 0; i < 8; i++) {
                switch (Math.floor(i / 2)) {
                    case 0:
                        builder.world().setBlocks(coordinates_2[i], 'ad_astra:steel_plating_stairs', false)
                        builder.world().modifyBlock(coordinates_2[i], state =>
                            state.setValue(BlockProperties.FACING, Direction.EAST)
                        )
                        break
                    case 1:
                        builder.world().setBlocks(coordinates_2[i], 'ad_astra:steel_plating_stairs', false)
                        builder.world().modifyBlock(coordinates_2[i], state =>
                            state.setValue(BlockProperties.FACING, Direction.NORTH)
                        )
                        break
                    case 2:
                        builder.world().setBlocks(coordinates_2[i], 'ad_astra:steel_plating_stairs', false)
                        builder.world().modifyBlock(coordinates_2[i], state =>
                            state.setValue(BlockProperties.FACING, Direction.WEST)
                        )
                        break
                    case 3:
                        builder.world().setBlocks(coordinates_2[i], 'ad_astra:steel_plating_stairs', false)
                        builder.world().modifyBlock(coordinates_2[i], state =>
                            state.setValue(BlockProperties.FACING, Direction.SOUTH)
                        )
                        break
                }

                if (i % 2 == 0) {
                    builder.world().modifyBlock(coordinates_2[i], state =>
                        state.setValue(BlockProperties.STAIRS_SHAPE, $StairsShape.OUTER_RIGHT)
                    )
                }

                builder.world().showSection(coordinates_2[i], Direction.DOWN)
                builder.idle(1)
            }

            builder.idle(20 * 1)

            for (let dy = 6; dy <= 8; dy++) {
                builder.world().setBlocks([5, dy, 5], 'ad_astra:steel_pillar', false)
                builder.world().showSection([5, dy, 5], Direction.DOWN)
                builder.idle(3)
            }

            builder.idle(20 * 1)
            builder.world().setBlocks([5, 9, 5], 'minecraft:lightning_rod', false)
            builder.world().showSection([5, 9, 5], Direction.DOWN)
            builder.world().modifyBlock([5, 9, 5], state =>
                state.setValue(BlockProperties.FACING, Direction.UP)
            )

            builder.idle(20 * 1)
            builder.text(20 * 2, 'kubejs:rocket_1_body_5', [5, 7, 5])
            builder.idle(20 * 3)

            builder.addKeyframe()

            builder.overlay().showControls(20 * 2, [5, 2, 4], 'DOWN')
                .rightClick()
                .withItem('create:wrench')
            builder.idle(20 * 1)
            builder.world().hideSection([2, 1, 2, 9, 9, 9], Direction.UP)
            builder.world().setBlocks([2, 1, 2, 9, 9, 9], 'minecraft:air', true)

            for (let dx = -3; dx <= 3; dx++) {
                builder.world().setBlocks([5 + dx, 0, 5 + dx], 'minecraft:light_gray_concrete', false)
                builder.world().setBlocks([5 + dx, 0, 5 - dx], 'minecraft:light_gray_concrete', false)
            }

            for (let dz of [-1, 1]) {
                builder.world().setBlocks([5, 0, 5 + dz], 'minecraft:white_concrete', false)
                builder.world().setBlocks([5 + dz, 0, 5], 'minecraft:white_concrete', false)
            }
            
            let rocket_1 = builder.world().createEntity('ad_astra:tier_1_rocket', [6, 1, 6])
            
            builder.idle(20 * 3)
            builder.overlay().showControls(20 * 2, [6, 1, 6], 'DOWN')
                .leftClick()
            builder.idle(20 * 2)

            let itemEntity = builder.world().createItemEntity([6, 1, 6], [0, 0, 0], 'ad_astra:tier_1_rocket')

            builder.world().modifyEntity(itemEntity, entity => {
                entity.setNoGravity(true)
            })

            builder.world().removeEntity(rocket_1)
        })
})