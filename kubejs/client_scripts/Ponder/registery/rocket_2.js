Ponder.registry(event => {
    //火箭
    event.create('ad_astra:tier_2_rocket')
        .scene('kubejs:rocket_2_padestal', 'kubejs:rocket_2_padestal', 'kubejs:rocket_2', scene => {

            //显示地板
            scene.showBasePlate()
            scene.scaleSceneView(0.9)
            scene.idle(10)

            //显示火箭支撑脚
            for (let i = 1; i < 4; i++) {
                for (let j of [-3, 3]) {
                    for (let k of [-3, 3]) {
                        scene.world.setBlocks([5 + j, i, 5 + k], 'ad_astra:steel_pillar', false)
                        scene.world.showSection([5 + j, i, 5 + k], Direction.DOWN)
                        scene.idle(1)
                    }

                }
            }

            for (let i = 2; i < 4; i++) {
                for (let j of [-2, 2]) {
                    for (let k of [-2, 2]) {
                        scene.world.setBlocks([5 + j, i, 5 + k], 'ad_astra:steel_pillar', false)
                        scene.world.showSection([5 + j, i, 5 + k], Direction.DOWN)
                        scene.idle(1)
                    }

                }
            }

            for (let dx of [-2, 2]) {
                for (let dz of [-2, 2]) {
                    scene.world.setBlocks([5 + dx, 4, 5 + dz], 'ad_astra:steel_plating_slab', false)
                    scene.world.showSection([5 + dx, 4, 5 + dz], Direction.DOWN)
                    scene.world.modifyBlock([5 + dx, 4, 5 + dz], state =>
                        state.with('type', 'bottom'), false)
                    scene.idle(1)
                }
            }

            scene.idle(20 * 1)
            scene.text(20 * 3, 'kubejs:rocket_2_padestal_1', [3, 4, 3])
            scene.idle(20 * 3)

            //喷嘴部分
            scene.addKeyframe()

            let coordinate_1 = [
                [4, 2, 4], [4, 2, 5], [4, 2, 6],
                [5, 2, 6], [6, 2, 6], [6, 2, 5],
                [6, 2, 4], [5, 2, 4]
            ]

            for (let i = 0; i < 8; i++) {
                switch (Math.floor(i / 2)) {
                    case 0:
                        scene.world.setBlocks(coordinate_1[i], 'ad_astra:steel_plating_stairs', false)
                        scene.world.modifyBlock(coordinate_1[i], state =>
                            state.with('facing', 'east')
                            , false)
                        break
                    case 1:
                        scene.world.setBlocks(coordinate_1[i], 'ad_astra:steel_plating_stairs', false)
                        scene.world.modifyBlock(coordinate_1[i], state =>
                            state.with('facing', 'north')
                            , false)
                        break
                    case 2:
                        scene.world.setBlocks(coordinate_1[i], 'ad_astra:steel_plating_stairs', false)
                        scene.world.modifyBlock(coordinate_1[i], state =>
                            state.with('facing', 'west')
                            , false)
                        break
                    case 3:
                        scene.world.setBlocks(coordinate_1[i], 'ad_astra:steel_plating_stairs', false)
                        scene.world.modifyBlock(coordinate_1[i], state =>
                            state.with('facing', 'south')
                            , false)
                        break
                }

                if (i % 2 == 0) {
                    scene.world.modifyBlock(coordinate_1[i], state =>
                        state.with('shape', 'outer_right')
                        , false)
                }

                scene.world.showSection(coordinate_1[i], Direction.DOWN)
                scene.idle(1)
            }

            scene.idle(20 * 1)
            scene.text(20 * 2, 'kubejs:rocket_2_padestal_2', [5, 2, 5])
            scene.idle(20 * 3)

            //火箭基座
            scene.addKeyframe()

            for (let dx of [-1, 0, 1]) {
                for (let dz of [-1, 0, 1]) {
                    if (dx == 0 && dz == 0) {
                        scene.world.setBlocks([5 + dx, 3, 5 + dz], 'kubejs:desh_tank', false)
                        scene.world.showSection([5 + dx, 3, 5 + dz], Direction.DOWN)
                    } else {
                        scene.world.setBlocks([5 + dx, 3, 5 + dz], 'ad_astra:steel_plating', false)
                        scene.world.showSection([5 + dx, 3, 5 + dz], Direction.DOWN)
                    }
                    scene.idle(1)
                }
            }

            scene.idle(20 * 1)
            scene.text(20 * 3, 'kubejs:rocket_2_padestal_3', [5, 3, 5])
            scene.idle(20 * 3)

            //火箭雷达
            scene.addKeyframe()

            for (let dx of [-2, 0, 2]) {
                for (let dz of [-2, 0, 2]) {
                    if (dx == 0 || dz == 0) {
                        if (dx == 0 && dz == 0) {
                            continue
                        } else {
                            scene.world.setBlocks([5 + dx, 3, 5 + dz], 'ad_astra:steel_block', false)
                            scene.world.setBlocks([5 + dx, 4, 5 + dz], 'ad_astra:desh_plating_slab', false)
                            scene.world.modifyBlock([5 + dx, 4, 5 + dz], state =>
                                state.with('type', 'bottom')
                                , false)
                            scene.world.showSection([5 + dx, 3, 5 + dz], Direction.DOWN)
                            scene.world.showSection([5 + dx, 4, 5 + dz], Direction.DOWN)
                            scene.idle(1)
                        }
                    }
                }
            }

            scene.idle(20 * 1)

            for (let dx of [-3, 3]) {
                for (let dz of [-3, 3]) {
                    scene.world.setBlocks([5 + dx, 4, 5 + dz], 'ad_astra:glowing_desh_pillar', false)
                    scene.world.showSection([5 + dx, 4, 5 + dz], Direction.DOWN)
                    scene.idle(1)
                }
            }


            scene.idle(20 * 1)
            scene.text(20 * 2, 'kubejs:rocket_2_padestal_4', [3, 5, 5])
            scene.idle(20 * 3)

        })

        .scene('kubejs:rocket_2_body', 'kubejs:rocket_2_body', 'kubejs:rocket_2', scene => {

            ///火箭主体
            scene.showBasePlate()
            scene.scaleSceneView(0.9)

            for (let dx of [-2, 0, 2]) {
                for (let dz of [-2, 0, 2]) {
                    if (dx == 0 || dz == 0) {
                        if (dx == 0 && dz == 0) {
                            continue
                        } else {
                            scene.world.setBlocks([5 + dx, 0, 5 + dz], 'ad_astra:steel_block', false)
                            scene.world.setBlocks([5 + dx, 1, 5 + dz], 'ad_astra:desh_plating_slab', false)
                            scene.world.modifyBlock([5 + dx, 1, 5 + dz], state =>
                                state.with('type', 'bottom')
                                , false)
                            scene.world.showSection([5 + dx, 0, 5 + dz], Direction.DOWN)
                            scene.world.showSection([5 + dx, 1, 5 + dz], Direction.DOWN)
                        }
                    }
                }
            }

            for (let dx of [-1, 0, 1]) {
                for (let dz of [-1, 0, 1]) {
                    if (dx == 0 && dz == 0) {
                        scene.world.setBlocks([5 + dx, 0, 5 + dz], 'kubejs:desh_tank', false)
                        scene.world.showSection([5 + dx, 0, 5 + dz], Direction.DOWN)
                    } else {
                        scene.world.setBlocks([5 + dx, 0, 5 + dz], 'ad_astra:steel_plating', false)
                        scene.world.showSection([5 + dx, 0, 5 + dz], Direction.DOWN)
                    }
                }
            }

            scene.idle(20 * 1)
            scene.text(20 * 2, 'kubejs:rocket_2_body_1', [5, 0, 6])
            scene.idle(20 * 3)

            scene.addKeyframe()

            for (let dx of [-1, 0, 1]) {
                for (let dz of [-1, 0, 1]) {
                    if (dx == 0 && dz == 0) {
                        continue
                    } else {
                        scene.world.setBlocks([5 + dx, 1, 5 + dz], 'ad_astra:steel_plating', false)
                        scene.world.showSection([5 + dx, 1, 5 + dz], Direction.DOWN)
                        scene.idle(1)
                    }
                }
            }

            scene.idle(20 * 1)
            scene.text(20 * 2, 'kubejs:rocket_2_body_2', [4, 2, 4])
            scene.idle(20 * 3)

            scene.addKeyframe()

            for (let dy of [2, 3, 4, 5, 6]) {
                for (let dx of [-1, 1]) {
                    for (let dz of [-1, 1]) {
                        scene.world.setBlocks([5 + dx, dy, 5 + dz], 'ad_astra:steel_pillar', false)
                        scene.world.showSection([5 + dx, dy, 5 + dz], Direction.DOWN)
                        scene.idle(1)
                    }
                }
                let coordinate = [[4, dy, 5], [6, dy, 5], [5, dy, 6], [5, dy, 4]]
                for (let i = 0; i < 4; i++) {
                    scene.world.setBlocks(coordinate[i], 'ad_astra:desh_block', false)
                    scene.world.showSection(coordinate[i], Direction.DOWN)
                    scene.idle(1)
                }

            }
            scene.idle(20 * 1)
            scene.text(20 * 2, 'kubejs:rocket_2_body_3', [5, 4, 4])
            scene.idle(20 * 1)

            scene.addKeyframe()

            scene.world.hideSection([5, 3, 4], Direction.NORTH)
            scene.world.setBlocks([5, 3, 4], 'minecraft:air', true)
            scene.world.hideSection([5, 4, 4], Direction.NORTH)
            scene.world.setBlocks([5, 4, 4], 'minecraft:air', true)
            scene.idle(20 * 1)

            scene.world.setBlocks([5, 3, 4], 'createnuclear:reinforced_glass', false)
            scene.world.setBlocks([5, 4, 4], 'createnuclear:reinforced_glass', false)
            scene.world.showSection([5, 3, 4], Direction.SOUTH)
            scene.world.showSection([5, 4, 4], Direction.SOUTH)

            scene.idle(20 * 1)

            //火箭顶部
            scene.addKeyframe()

            for (let dx of [-1, 0, 1]) {
                for (let dz of [-1, 0, 1]) {
                    if (dx == 0 && dz == 0) {
                        continue
                    } else {
                        scene.world.setBlocks([5 + dx, 7, 5 + dz], 'ad_astra:steel_plating', false)
                        scene.world.showSection([5 + dx, 7, 5 + dz], Direction.DOWN)
                        scene.idle(1)
                    }
                }
            }

            scene.idle(20 * 1)
            scene.text(20 * 2, 'kubejs:rocket_2_body_4', [5, 8, 5])
            scene.idle(20 * 3)

            scene.addKeyframe()

            let coordinate_2 = [
                [4, 8, 4], [4, 8, 5], [4, 8, 6],
                [5, 8, 6], [6, 8, 6], [6, 8, 5],
                [6, 8, 4], [5, 8, 4]
            ]

            for (let i = 0; i < 8; i++) {
                if (i % 2 == 0) {
                    scene.world.setBlocks(coordinate_2[i], 'ad_astra:steel_plating_stairs', false)
                    scene.world.modifyBlock(coordinate_2[i], state =>
                        state.with('shape', 'outer_right')
                        , false)
                } else {
                    scene.world.setBlocks(coordinate_2[i], 'ad_astra:desh_plating_stairs', false)
                }
                switch (Math.floor(i / 2)) {
                    case 0:
                        scene.world.modifyBlock(coordinate_2[i], state =>
                            state.with('facing', 'east')
                            , false)
                        break
                    case 1:
                        scene.world.modifyBlock(coordinate_2[i], state =>
                            state.with('facing', 'north')
                            , false)
                        break
                    case 2:
                        scene.world.modifyBlock(coordinate_2[i], state =>
                            state.with('facing', 'west')
                            , false)
                        break
                    case 3:
                        scene.world.modifyBlock(coordinate_2[i], state =>
                            state.with('facing', 'south')
                            , false)
                        break
                }

                scene.world.showSection(coordinate_2[i], Direction.DOWN)
                scene.idle(1)
            }

            scene.idle(20 * 1)

            for (let dy of [8, 9, 10]) {
                scene.world.setBlocks([5, dy, 5], 'ad_astra:steel_pillar', false)
                scene.world.showSection([5, dy, 5], Direction.DOWN)
                scene.idle(3)
            }

            scene.idle(20 * 1)

            scene.world.setBlocks([5, 11, 5], 'minecraft:lightning_rod', false)
            scene.world.showSection([5, 11, 5], Direction.DOWN)
            scene.world.modifyBlock([5, 11, 5], state =>
                state.with('facing', 'up')
                , false)

            scene.idle(20 * 1)
            scene.text(20 * 2, 'kubejs:rocket_2_body_5', [5, 10, 5])
            scene.idle(20 * 3)

        })
        //
        .scene('kubejs:rocket_2_whole', 'kubejs:rocket_2_whole', 'kubejs:rocket_2', scene => {

            scene.showBasePlate()
            scene.scaleSceneView(0.6)

            //显示火箭支撑脚
            for (let i = 1; i < 4; i++) {
                for (let j of [-3, 3]) {
                    for (let k of [-3, 3]) {
                        scene.world.setBlocks([5 + j, i, 5 + k], 'ad_astra:steel_pillar', false)
                        scene.world.showSection([5 + j, i, 5 + k], Direction.DOWN)
                    }

                }

            }
            for (let i = 2; i < 4; i++) {
                for (let j of [-2, 2]) {
                    for (let k of [-2, 2]) {
                        scene.world.setBlocks([5 + j, i, 5 + k], 'ad_astra:steel_pillar', false)
                        scene.world.showSection([5 + j, i, 5 + k], Direction.DOWN)
                    }

                }
            }
            for (let dx of [-2, 2]) {
                for (let dz of [-2, 2]) {
                    scene.world.setBlocks([5 + dx, 4, 5 + dz], 'ad_astra:steel_plating_slab', false)
                    scene.world.showSection([5 + dx, 4, 5 + dz], Direction.DOWN)
                    scene.world.modifyBlock([5 + dx, 4, 5 + dz], state =>
                        state.with('type', 'bottom')
                        , false)
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
                        scene.world.setBlocks(coordinate_1[i], 'ad_astra:steel_plating_stairs', false)
                        scene.world.modifyBlock(coordinate_1[i], state =>
                            state.with('facing', 'east')
                            , false)
                        break
                    case 1:
                        scene.world.setBlocks(coordinate_1[i], 'ad_astra:steel_plating_stairs', false)
                        scene.world.modifyBlock(coordinate_1[i], state =>
                            state.with('facing', 'north')
                            , false)
                        break
                    case 2:
                        scene.world.setBlocks(coordinate_1[i], 'ad_astra:steel_plating_stairs', false)
                        scene.world.modifyBlock(coordinate_1[i], state =>
                            state.with('facing', 'west')
                            , false)
                        break
                    case 3:
                        scene.world.setBlocks(coordinate_1[i], 'ad_astra:steel_plating_stairs', false)
                        scene.world.modifyBlock(coordinate_1[i], state =>
                            state.with('facing', 'south')
                            , false)
                        break
                }

                if (i % 2 == 0) {
                    scene.world.modifyBlock(coordinate_1[i], state =>
                        state.with('shape', 'outer_right')
                        , false)
                }
                scene.world.showSection(coordinate_1[i], Direction.DOWN)
            }

            //火箭基座
            for (let dx of [-1, 0, 1]) {
                for (let dz of [-1, 0, 1]) {
                    scene.world.setBlocks([5 + dx, 3, 5 + dz], 'ad_astra:steel_plating', false)
                    scene.world.showSection([5 + dx, 3, 5 + dz], Direction.DOWN)
                }
            }

            //火箭雷达
            for (let dx of [-2, 0, 2]) {
                for (let dz of [-2, 0, 2]) {
                    if (dx == 0 || dz == 0) {
                        if (dx == 0 && dz == 0) {
                            continue
                        } else {
                            scene.world.setBlocks([5 + dx, 3, 5 + dz], 'ad_astra:steel_block', false)
                            scene.world.setBlocks([5 + dx, 4, 5 + dz], 'ad_astra:desh_plating_slab', false)
                            scene.world.modifyBlock([5 + dx, 4, 5 + dz], state =>
                                state.with('type', 'bottom')
                                , false)
                            scene.world.showSection([5 + dx, 3, 5 + dz], Direction.DOWN)
                            scene.world.showSection([5 + dx, 4, 5 + dz], Direction.DOWN)
                        }
                    }
                }
            }

            for (let dx of [-3, 3]) {
                for (let dz of [-3, 3]) {
                    scene.world.setBlocks([5 + dx, 4, 5 + dz], 'ad_astra:glowing_desh_pillar', false)
                    scene.world.showSection([5 + dx, 4, 5 + dz], Direction.DOWN)
                }
            }

            for (let dx of [-1, 0, 1]) {
                for (let dz of [-1, 0, 1]) {
                    if (dx == 0 && dz == 0) {
                        continue
                    } else {
                        scene.world.setBlocks([5 + dx, 4, 5 + dz], 'ad_astra:steel_plating', false)
                        scene.world.showSection([5 + dx, 4, 5 + dz], Direction.DOWN)
                    }
                }
            }

            for (let dy of [5, 6, 7, 8, 9]) {
                for (let dx of [-1, 1]) {
                    for (let dz of [-1, 1]) {
                        scene.world.setBlocks([5 + dx, dy, 5 + dz], 'ad_astra:steel_pillar', false)
                        scene.world.showSection([5 + dx, dy, 5 + dz], Direction.DOWN)
                    }
                }

                let coordinate = [
                    [4, dy, 5], [6, dy, 5],
                    [5, dy, 6], [5, dy, 4]
                ]

                for (let i = 0; i < 4; i++) {
                    if (coordinate[i] == [5, 6, 4] || coordinate[i] == [5, 7, 4]) {
                        scene.world.setBlocks(coordinate[i], 'createnuclear:reinforced_glass', false)
                    } else {
                        scene.world.setBlocks(coordinate[i], 'ad_astra:desh_block', false)
                    }
                    scene.world.showSection(coordinate[i], Direction.DOWN)
                }
            }

            for (let dx of [-1, 0, 1]) {
                for (let dz of [-1, 0, 1]) {
                    if (dx == 0 && dz == 0) {
                        continue
                    } else {
                        scene.world.setBlocks([5 + dx, 10, 5 + dz], 'ad_astra:steel_plating', false)
                        scene.world.showSection([5 + dx, 10, 5 + dz], Direction.DOWN)
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
                    scene.world.setBlocks(coordinate_2[i], 'ad_astra:steel_plating_stairs', false)
                    scene.world.modifyBlock(coordinate_2[i], state =>
                        state.with('shape', 'outer_right')
                        , false)
                } else {
                    scene.world.setBlocks(coordinate_2[i], 'ad_astra:desh_plating_stairs', false)
                }

                switch (Math.floor(i / 2)) {
                    case 0:
                        scene.world.modifyBlock(coordinate_2[i], state =>
                            state.with('facing', 'east'), false)
                        break
                    case 1:
                        scene.world.modifyBlock(coordinate_2[i], state =>
                            state.with('facing', 'north'), false)
                        break
                    case 2:
                        scene.world.modifyBlock(coordinate_2[i], state =>
                            state.with('facing', 'west'), false)
                        break
                    case 3:
                        scene.world.modifyBlock(coordinate_2[i], state =>
                            state.with('facing', 'south'), false)
                        break
                }

                scene.world.showSection(coordinate_2[i], Direction.DOWN)
            }

            for (let dy of [11, 12, 13]) {
                scene.world.setBlocks([5, dy, 5], 'ad_astra:steel_pillar', false)
                scene.world.showSection([5, dy, 5], Direction.DOWN)
            }

            scene.world.setBlocks([5, 14, 5], 'minecraft:lightning_rod', false)
            scene.world.showSection([5, 14, 5], Direction.DOWN)
            scene.world.modifyBlock([5, 14, 5], state =>
                state.with('facing', 'up')
                , false)

            scene.showControls(20 * 2, [5, 5, 4], "DOWN")
                .rightClick()
                .withWrench()

            scene.idle(20 * 1)

            scene.world.hideSection([2, 1, 2, 9, 14, 9], Direction.UP)
            scene.world.setBlocks([2, 1, 2, 9, 14, 9], 'minecraft:air', true)

            scene.idle(20 * 3)
            scene.showControls(20 * 2, [6, 2, 6], "DOWN")
                .leftClick()
            scene.idle(20 * 2)

            let itemEntity = scene.world.createItemEntity([6, 1, 6], [0, 0, 0], "ad_astra:tier_2_rocket")

            scene.world.modifyEntity(itemEntity, entity => {
                entity.setNoGravity(true)
            })

            let Entity = scene.world.createEntity("ad_astra:tier_2_rocket", [6, 1, 6])

            scene.world.removeEntity(Entity)
        })

})