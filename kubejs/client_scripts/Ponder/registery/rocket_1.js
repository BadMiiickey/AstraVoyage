Ponder.registry(event => {
    //火箭
    event.create('ad_astra:tier_1_rocket')
        .scene('kubejs:rocket_1', 'kubejs:rocket_1', 'kubejs:rocket_1', scene => {

            //显示地板
            scene.showBasePlate()
            scene.scaleSceneView(0.9)
            scene.rotateCameraY(45)
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
            scene.text(20 * 3, 'kubejs:rocket_1_1', [3, 4, 3])
            scene.idle(20 * 3)

            //喷嘴部分
            scene.addKeyframe()

            let zuobiao_1 = [[4, 2, 4], [4, 2, 5], [4, 2, 6], [5, 2, 6], [6, 2, 6], [6, 2, 5], [6, 2, 4], [5, 2, 4]]
            for (let i = 0; i < 8; i++) {
                if (Math.floor(i / 2) == 0) {
                    scene.world.setBlocks(zuobiao_1[i], 'ad_astra:steel_plating_stairs', false)
                    scene.world.modifyBlock(zuobiao_1[i], state =>
                        state.with('facing', 'east'), false)
                }
                else if (Math.floor(i / 2) == 1) {
                    scene.world.setBlocks(zuobiao_1[i], 'ad_astra:steel_plating_stairs', false)
                    scene.world.modifyBlock(zuobiao_1[i], state =>
                        state.with('facing', 'north'), false)
                }
                else if (Math.floor(i / 2) == 2) {
                    scene.world.setBlocks(zuobiao_1[i], 'ad_astra:steel_plating_stairs', false)
                    scene.world.modifyBlock(zuobiao_1[i], state =>
                        state.with('facing', 'west'), false)
                }
                else if (Math.floor(i / 2) == 3) {
                    scene.world.setBlocks(zuobiao_1[i], 'ad_astra:steel_plating_stairs', false)
                    scene.world.modifyBlock(zuobiao_1[i], state =>
                        state.with('facing', 'south'), false)
                }
                if (i % 2 == 0) {
                    scene.world.modifyBlock(zuobiao_1[i], state =>
                        state.with('shape', 'outer_right'), false)
                }
                scene.world.showSection(zuobiao_1[i], Direction.DOWN)
                scene.idle(1)
            }

            scene.idle(20 * 1)
            scene.text(20 * 2, 'kubejs:rocket_1_2', [5, 2, 5])
            scene.idle(20 * 3)

            //火箭基座
            scene.addKeyframe()

            for (let dx of [-1, 0, 1]) {
                for (let dz of [-1, 0, 1]) {
                    scene.world.setBlocks([5 + dx, 3, 5 + dz], 'ad_astra:steel_plating', false)
                    scene.world.showSection([5 + dx, 3, 5 + dz], Direction.DOWN)
                    scene.idle(1)
                }
            }

            scene.idle(20 * 1)
            scene.text(20 * 3, 'kubejs:rocket_1_3', [5, 3, 5])
            scene.idle(20 * 3)

            //火箭雷达
            scene.addKeyframe()

            for (let dz of [-1, 1]) {
                scene.world.setBlocks([5, 4, 5 + dz], 'ad_astra:steel_block', false)
                scene.world.showSection([5, 4, 5 + dz], Direction.DOWN)
                scene.idle(1)
            }
            for (let dx of [-1, 1]) {
                scene.world.setBlocks([5 + dx, 4, 5], 'ad_astra:steel_block', false)
                scene.world.showSection([5 + dx, 4, 5], Direction.DOWN)
                scene.idle(1)
            }

            scene.idle(20 * 1)

            for (let dx of [-3, 3]) {
                for (let dz of [-3, 3]) {
                    scene.world.setBlocks([5 + dx, 4, 5 + dz], 'create:railway_casing', false)
                    scene.world.showSection([5 + dx, 4, 5 + dz], Direction.DOWN)
                    scene.idle(1)
                }
            }
            scene.world.setBlocks([3, 4, 5], 'create:railway_casing', false)
            scene.world.showSection([3, 4, 5], Direction.EAST)
            scene.idle(1)
            scene.world.setBlocks([7, 4, 5], 'create:railway_casing', false)
            scene.world.showSection([7, 4, 5], Direction.WEST)
            scene.idle(1)

            scene.idle(20 * 1)
            scene.world.setBlocks([3, 5, 5], 'ad_astra:steel_plating_button', false)
            scene.world.modifyBlock([3, 5, 5], state =>
                state.with('face', 'floor'), false)
            scene.world.showSection([3, 5, 5], Direction.DOWN)
            scene.idle(1)
            scene.world.setBlocks([7, 5, 5], 'ad_astra:steel_plating_button', false)
            scene.world.modifyBlock([7, 5, 5], state =>
                state.with('face', 'floor'), false)
            scene.world.showSection([7, 5, 5], Direction.DOWN)


            scene.idle(20 * 1)
            scene.text(20 * 2, 'kubejs:rocket_1_4', [3, 5, 5])
            scene.idle(20 * 3)

            //火箭主体
            scene.addKeyframe()

            for (let dy of [4, 5, 6, 7, 8]) {
                for (let dx of [-1, 1]) {
                    for (let dz of [-1, 1]) {
                        scene.world.setBlocks([5 + dx, dy, 5 + dz], 'ad_astra:steel_pillar', false)
                        scene.world.showSection([5 + dx, dy, 5 + dz], Direction.DOWN)
                        scene.idle(1)
                    }
                }
                let zuobiao = [[4, dy, 5], [6, dy, 5], [5, dy, 6], [5, dy, 4]]
                if (dy > 4) {
                    for (let i = 0; i < 4; i++) {
                        scene.world.setBlocks(zuobiao[i], 'ad_astra:steel_block', false)
                        scene.world.showSection(zuobiao[i], Direction.DOWN)
                        scene.idle(1)
                    }
                }

            }
            scene.idle(20 * 1)
            scene.text(20 * 2, 'kubejs:rocket_1_5', [5, 5, 4])
            scene.idle(20 * 1)

            scene.world.hideSection([5, 5, 4], Direction.NORTH)
            scene.world.setBlocks([5, 5, 4], 'minecraft:air', true)
            scene.world.hideSection([5, 6, 4], Direction.NORTH)
            scene.world.setBlocks([5, 6, 4], 'minecraft:air', true)
            scene.idle(20 * 1)
            scene.world.setBlocks([5, 5, 4], 'createnuclear:reinforced_glass', false)
            scene.world.setBlocks([5, 6, 4], 'createnuclear:reinforced_glass', false)
            scene.world.showSection([5, 5, 4], Direction.SOUTH)
            scene.world.showSection([5, 6, 4], Direction.SOUTH)

            scene.idle(20 * 1)
            scene.text(20 * 2, 'kubejs:rocket_1_6', [4, 7, 4])
            scene.idle(20 * 3)

            //火箭顶部
            scene.addKeyframe()

            let zuobiao_2 = [[4, 9, 4], [4, 9, 5], [4, 9, 6], [5, 9, 6], [6, 9, 6], [6, 9, 5], [6, 9, 4], [5, 9, 4]]
            for (let i = 0; i < 8; i++) {
                if (Math.floor(i / 2) == 0) {
                    scene.world.setBlocks(zuobiao_2[i], 'ad_astra:steel_plating_stairs', false)
                    scene.world.modifyBlock(zuobiao_2[i], state =>
                        state.with('facing', 'east'), false)
                }
                else if (Math.floor(i / 2) == 1) {
                    scene.world.setBlocks(zuobiao_2[i], 'ad_astra:steel_plating_stairs', false)
                    scene.world.modifyBlock(zuobiao_2[i], state =>
                        state.with('facing', 'north'), false)
                }
                else if (Math.floor(i / 2) == 2) {
                    scene.world.setBlocks(zuobiao_2[i], 'ad_astra:steel_plating_stairs', false)
                    scene.world.modifyBlock(zuobiao_2[i], state =>
                        state.with('facing', 'west'), false)
                }
                else if (Math.floor(i / 2) == 3) {
                    scene.world.setBlocks(zuobiao_2[i], 'ad_astra:steel_plating_stairs', false)
                    scene.world.modifyBlock(zuobiao_2[i], state =>
                        state.with('facing', 'south'), false)
                }
                if (i % 2 == 0) {
                    scene.world.modifyBlock(zuobiao_2[i], state =>
                        state.with('shape', 'outer_right'), false)
                }
                scene.world.showSection(zuobiao_2[i], Direction.DOWN)
                scene.idle(1)
            }

            scene.idle(20 * 1)

            for (let dy of [9, 10, 11]) {
                scene.world.setBlocks([5, dy, 5], 'ad_astra:steel_pillar', false)
                scene.world.showSection([5, dy, 5], Direction.DOWN)
                scene.idle(3)
            }
            scene.idle(20 * 1)
            scene.world.setBlocks([5, 12, 5], 'minecraft:lightning_rod', false)
            scene.world.showSection([5, 12, 5], Direction.DOWN)
            scene.world.modifyBlock([5, 12, 5], state =>
                state.with('facing', 'up'), false)

            scene.idle(20 * 1)
            scene.text(20 * 2, 'kubejs:rocket_1_7', [5, 10, 5])
            scene.idle(20 * 3)

            scene.addKeyframe()


            scene.showControls(20 * 2, [5, 5, 4], "DOWN")
                .rightClick()
                .withWrench()
            scene.idle(20 * 1)
            scene.world.hideSection([2, 1, 2, 9, 12, 9], Direction.UP)
            scene.world.setBlocks([2, 1, 2, 9, 12, 9], 'minecraft:air', true)

            let Entity = scene.world.createEntity("ad_astra:tier_1_rocket", [6, 1, 6])

            scene.idle(20 * 3)
            scene.showControls(20 * 2, [6, 2, 6], "DOWN")
                .leftClick()
            scene.idle(20 * 2)

            let itemEntity = scene.world.createItemEntity([6, 1, 6], [0, 0, 0], "ad_astra:tier_1_rocket")

            scene.world.modifyEntity(itemEntity, entity => {
                entity.setNoGravity(true)
            })

            scene.world.removeEntity(Entity)

        })
})