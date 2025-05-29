Ponder.registry(event => {
    //火箭
    event.create('ad_astra:tier_1_rocket')
        .scene('kubejs:rocket_1_pedestal', 'kubejs:rocket_1_pedestal', 'kubejs:rocket_1', scene => {

            //显示地板
            scene.showBasePlate()
            scene.scaleSceneView(0.5)
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
            scene.text(20 * 3, 'kubejs:rocket_1_pedestal_1', [3, 4, 3])
            scene.idle(20 * 3)

            //喷嘴部分
            scene.addKeyframe()

            let coordinates_1 = [
                [4, 2, 4], [4, 2, 5], [4, 2, 6],
                [5, 2, 6], [6, 2, 6], [6, 2, 5],
                [6, 2, 4], [5, 2, 4]
            ]

            for (let i = 0; i < 8; i++) {
                switch (Math.floor(i / 2)) {
                    case 0:
                        scene.world.setBlocks(coordinates_1[i], 'ad_astra:steel_plating_stairs', false)
                        scene.world.modifyBlock(coordinates_1[i], state =>
                            state.with('facing', 'east'), false)
                        break
                    case 1:
                        scene.world.setBlocks(coordinates_1[i], 'ad_astra:steel_plating_stairs', false)
                        scene.world.modifyBlock(coordinates_1[i], state =>
                            state.with('facing', 'north'), false)
                        break
                    case 2:
                        scene.world.setBlocks(coordinates_1[i], 'ad_astra:steel_plating_stairs', false)
                        scene.world.modifyBlock(coordinates_1[i], state =>
                            state.with('facing', 'west'), false)
                        break
                    case 3:
                        scene.world.setBlocks(coordinates_1[i], 'ad_astra:steel_plating_stairs', false)
                        scene.world.modifyBlock(coordinates_1[i], state =>
                            state.with('facing', 'south'), false)
                        break
                }

                if (i % 2 == 0) {
                    scene.world.modifyBlock(coordinates_1[i], state =>
                        state.with('shape', 'outer_right')
                        , false)
                }

                scene.world.showSection(coordinates_1[i], Direction.DOWN)
                scene.idle(1)
            }

            scene.idle(20 * 1)
            scene.text(20 * 2, 'kubejs:rocket_1_pedestal_2', [5, 2, 5])
            scene.idle(20 * 3)

            //火箭基座
            scene.addKeyframe()

            for (let dx of [-1, 0, 1]) {
                for (let dz of [-1, 0, 1]) {
                    if (dx == 0 && dz == 0) {
                        scene.world.setBlocks([5 + dx, 3, 5 + dz], 'kubejs:steel_tank', false)
                        scene.world.showSection([5 + dx, 3, 5 + dz], Direction.DOWN)
                    } else {
                        scene.world.setBlocks([5 + dx, 3, 5 + dz], 'ad_astra:steel_plating', false)
                        scene.world.showSection([5 + dx, 3, 5 + dz], Direction.DOWN)
                    }
                    scene.idle(1)
                }
            }

            scene.idle(20 * 1)
            scene.text(20 * 3, 'kubejs:rocket_1_body_1', [5, 3, 5])
            scene.idle(20 * 3)
        })

        //火箭主体
        .scene('kubejs:rocket_1_body', 'kubejs:rocket_1_body', 'kubejs:rocket_1', scene => {

            //显示地板
            scene.showBasePlate()
            scene.scaleSceneView(0.5)

            for (let dx = -1; dx <= 1; dx++) {
                for (let dz = -1; dz <= 1; dz++) {
                    if (dx == 0 && dz == 0) {
                        scene.world.setBlocks([5 + dx, 0, 5 + dz], 'kubejs:steel_tank', false)
                        scene.world.showSection([5 + dx, 0, 5 + dz], Direction.DOWN)
                    } else {
                        scene.world.setBlocks([5 + dx, 0, 5 + dz], 'ad_astra:steel_pillar', false)
                        scene.world.showSection([5 + dx, 0, 5 + dz], Direction.DOWN)
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

                    scene.world.setBlocks([5 + dx, 0, 5 + dz], 'ad_astra:steel_pillar', false)
                    scene.world.showSection([5 + dx, 0, 5 + dz], Direction.DOWN)
                    scene.idle(1)
                }
            }

            for (let dx of [-2, 2]) {
                for (let dz of [-2, 2]) {
                    scene.world.setBlocks([5 + dx, 1, 5 + dz], 'ad_astra:steel_plating_slab', false)
                    scene.world.showSection([5 + dx, 1, 5 + dz], Direction.DOWN)
                }
            }

            scene.idle(20 * 1)

            //火箭雷达
            for (let dz of [-1, 1]) {
                scene.world.setBlocks([5, 1, 5 + dz], 'ad_astra:steel_block', false)
                scene.world.showSection([5, 1, 5 + dz], Direction.DOWN)
                scene.idle(1)
            }

            for (let dx of [-1, 1]) {
                scene.world.setBlocks([5 + dx, 1, 5], 'ad_astra:steel_block', false)
                scene.world.showSection([5 + dx, 1, 5], Direction.DOWN)
                scene.idle(1)
            }

            scene.idle(20 * 1)

            for (let dx of [-3, 3]) {
                for (let dz of [-3, 3]) {
                    scene.world.setBlocks([5 + dx, 1, 5 + dz], 'create:railway_casing', false)
                    scene.world.showSection([5 + dx, 1, 5 + dz], Direction.DOWN)
                    scene.idle(1)
                }
            }

            scene.world.setBlocks([3, 1, 5], 'create:railway_casing', false)
            scene.world.showSection([3, 1, 5], Direction.EAST)
            scene.idle(1)

            scene.world.setBlocks([7, 1, 5], 'create:railway_casing', false)
            scene.world.showSection([7, 1, 5], Direction.WEST)
            scene.idle(1)

            scene.idle(20 * 1)
            scene.world.setBlocks([3, 2, 5], 'ad_astra:steel_plating_button', false)
            scene.world.modifyBlock([3, 2, 5], state =>
                state.with('face', 'floor')
                , false)

            scene.world.showSection([3, 2, 5], Direction.DOWN)
            scene.idle(1)

            scene.world.setBlocks([7, 2, 5], 'ad_astra:steel_plating_button', false)
            scene.world.modifyBlock([7, 2, 5], state =>
                state.with('face', 'floor')
                , false)
            scene.world.showSection([7, 2, 5], Direction.DOWN)

            scene.idle(20 * 1)
            scene.text(20 * 2, 'kubejs:rocket_1_body_2', [3, 4, 5])
            scene.idle(20 * 3)

            //火箭主体
            scene.addKeyframe()

            for (let dy = 1; dy <= 5; dy++) {
                for (let dx of [-1, 1]) {
                    for (let dz of [-1, 1]) {
                        scene.world.setBlocks([5 + dx, dy, 5 + dz], 'ad_astra:steel_pillar', false)
                        scene.world.showSection([5 + dx, dy, 5 + dz], Direction.DOWN)
                        scene.idle(1)
                    }
                }

                let coordinates = [
                    [4, dy, 5], [6, dy, 5],
                    [5, dy, 6], [5, dy, 4]
                ]

                if (dy > 1) {
                    for (let i = 0; i < 4; i++) {
                        scene.world.setBlocks(coordinates[i], 'ad_astra:steel_block', false)
                        scene.world.showSection(coordinates[i], Direction.DOWN)
                        scene.idle(1)
                    }
                }
            }

            scene.idle(20 * 1)
            scene.text(20 * 2, 'kubejs:rocket_1_body_3', [5, 2, 4])
            scene.idle(20 * 1)

            scene.world.hideSection([5, 2, 4], Direction.NORTH)
            scene.world.setBlocks([5, 2, 4], 'minecraft:air', true)

            scene.world.hideSection([5, 3, 4], Direction.NORTH)
            scene.world.setBlocks([5, 3, 4], 'minecraft:air', true)

            scene.idle(20 * 1)

            scene.world.setBlocks([5, 2, 4], 'createnuclear:reinforced_glass', false)
            scene.world.setBlocks([5, 3, 4], 'createnuclear:reinforced_glass', false)
            scene.world.showSection([5, 2, 4], Direction.SOUTH)
            scene.world.showSection([5, 3, 4], Direction.SOUTH)

            scene.idle(20 * 1)
            scene.text(20 * 2, 'kubejs:rocket_1_body_4', [4, 4, 4])
            scene.idle(20 * 3)

            //火箭顶部
            scene.addKeyframe()

            let coordinates_2 = [
                [4, 6, 4], [4, 6, 5], [4, 6, 6],
                [5, 6, 6], [6, 6, 6], [6, 6, 5],
                [6, 6, 4], [5, 6, 4]
            ]

            for (let i = 0; i < 8; i++) {
                switch (Math.floor(i / 2)) {
                    case 0:
                        scene.world.setBlocks(coordinates_2[i], 'ad_astra:steel_plating_stairs', false)
                        scene.world.modifyBlock(coordinates_2[i], state =>
                            state.with('facing', 'east')
                            , false)
                        break
                    case 1:
                        scene.world.setBlocks(coordinates_2[i], 'ad_astra:steel_plating_stairs', false)
                        scene.world.modifyBlock(coordinates_2[i], state =>
                            state.with('facing', 'north')
                            , false)
                        break
                    case 2:
                        scene.world.setBlocks(coordinates_2[i], 'ad_astra:steel_plating_stairs', false)
                        scene.world.modifyBlock(coordinates_2[i], state =>
                            state.with('facing', 'west')
                            , false)
                        break
                    case 3:
                        scene.world.setBlocks(coordinates_2[i], 'ad_astra:steel_plating_stairs', false)
                        scene.world.modifyBlock(coordinates_2[i], state =>
                            state.with('facing', 'south')
                            , false)
                        break
                }

                if (i % 2 == 0) {
                    scene.world.modifyBlock(coordinates_2[i], state =>
                        state.with('shape', 'outer_right')
                        , false)
                }

                scene.world.showSection(coordinates_2[i], Direction.DOWN)
                scene.idle(1)
            }

            scene.idle(20 * 1)

            for (let dy = 6; dy <= 8; dy++) {
                scene.world.setBlocks([5, dy, 5], 'ad_astra:steel_pillar', false)
                scene.world.showSection([5, dy, 5], Direction.DOWN)
                scene.idle(3)
            }

            scene.idle(20 * 1)
            scene.world.setBlocks([5, 9, 5], 'minecraft:lightning_rod', false)
            scene.world.showSection([5, 9, 5], Direction.DOWN)
            scene.world.modifyBlock([5, 9, 5], state =>
                state.with('facing', 'up')
                , false)

            scene.idle(20 * 1)
            scene.text(20 * 2, 'kubejs:rocket_1_body_5', [5, 7, 5])
            scene.idle(20 * 3)

            scene.addKeyframe()

            scene.showControls(20 * 2, [5, 2, 4], 'DOWN')
                .rightClick()
                .withWrench()
            scene.idle(20 * 1)
            scene.world.hideSection([2, 1, 2, 9, 9, 9], Direction.UP)
            scene.world.setBlocks([2, 1, 2, 9, 9, 9], 'minecraft:air', true)

            for (let dx = -3; dx <= 3; dx++) {
                scene.world.setBlocks([5 + dx, 0, 5 + dx], 'minecraft:light_gray_concrete', false)
                scene.world.setBlocks([5 + dx, 0, 5 - dx], 'minecraft:light_gray_concrete', false)
            }

            for (let dz of [-1, 1]) {
                scene.world.setBlocks([5, 0, 5 + dz], 'minecraft:white_concrete', false)
                scene.world.setBlocks([5 + dz, 0, 5], 'minecraft:white_concrete', false)
            }
            
            let rocket_1 = scene.world.createEntity('ad_astra:tier_1_rocket', [6, 1, 6])
            
            scene.idle(20 * 3)
            scene.showControls(20 * 2, [6, 1, 6], 'DOWN')
                .leftClick()
            scene.idle(20 * 2)

            let itemEntity = scene.world.createItemEntity([6, 1, 6], [0, 0, 0], 'ad_astra:tier_1_rocket')

            scene.world.modifyEntity(itemEntity, entity => {
                entity.setNoGravity(true)
            })

            scene.world.removeEntity(rocket_1)
        })
})