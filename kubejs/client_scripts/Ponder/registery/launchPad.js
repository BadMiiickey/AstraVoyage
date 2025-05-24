Ponder.registry(event => {

    //火箭发射基座
    event.create('ad_astra:launch_pad')

        //显示地下部分
        .scene('kubejs:launch_pad_underground', 'kubejs:launch_pad_underground', 'kubejs:launch_pad', scene => {

            //显示地板
            scene.showBasePlate()
            scene.scaleSceneView(0.75)
            scene.idle(20 * 1)

            //显示第一层
            scene.addKeyframe()
            scene.world.setBlocks([2, 1, 2, 10, 1, 10], 'create:industrial_iron_block', false)
            scene.world.showSection([2, 1, 2, 10, 1, 10], Direction.DOWN)
            scene.idle(20 * 1)
            scene.text(20 * 2, 'kubejs:underground_1', [7, 1, 7])
            scene.idle(20 * 3)
            
            //显示第二层
            scene.addKeyframe()
            scene.world.setBlocks([3, 2, 3, 9, 2, 9], 'create:industrial_iron_block', false)
            scene.world.showSection([3, 2, 3, 9, 2, 9], Direction.DOWN)

            for (let d of [-1, 0, 1]) {
                scene.world.setBlocks([6 + d, 2, 6], 'minecraft:air', false)
                scene.world.setBlocks([6, 2, 6 + d], 'minecraft:air', false)
                scene.world.showSection([6 + d, 2, 6], Direction.DOWN)
                scene.world.showSection([6, 2, 6 + d], Direction.DOWN)
            }

            scene.idle(20 * 1)
            scene.text(20 * 2, 'kubejs:underground_2', [7, 2, 7])
            scene.idle(20 * 3)

            //显示第三层
                //显示工业铁块
                scene.addKeyframe()
                scene.world.setBlocks([3, 3, 3, 9, 3, 9], 'create:industrial_iron_block', false)
                scene.world.showSection([3, 3, 3, 9, 3, 9], Direction.DOWN)

                for (let d of [-3, -2, -1, 0, 1, 2, 3]) {
                    scene.world.setBlocks([6 + d, 3, 6], 'minecraft:air', false)
                    scene.world.setBlocks([6, 3, 6 + d], 'minecraft:air', false)
                    scene.world.showSection([6 + d, 3, 6], Direction.DOWN)
                    scene.world.showSection([6, 3, 6 + d], Direction.DOWN)
                }

                scene.idle(20 * 1)
                scene.text(20 * 2, 'kubejs:underground_3', [7, 3, 7])
                scene.idle(20 * 3)
                

                //显示列车机壳
                scene.addKeyframe()

                for (let i = 2; i <= 10; i++) {
                    for (let j = 2; j <= 10; j++) {
                        if (!(i >= 3 && i <= 9 && j >= 3 && j <= 9)) {
                            scene.world.setBlocks([i, 3, j], 'create:railway_casing', false)
                            scene.world.showSection([i, 3, j], Direction.DOWN)
                            scene.idle(1)
                        }
                    }
                }

                scene.text(20 * 2, 'kubejs:underground_4', [3, 3, 7])
                scene.idle(20 * 3)
        })

        .scene('kubejs:launch_pad_aboveground', 'kubejs:launch_pad_aboveground', 'kubejs:launch_pad', scene => {

            //显示地板
            scene.showBasePlate()

            scene.world.setBlocks([3, 0, 3, 9, 0, 9], 'create:industrial_iron_block', false)
            scene.world.showSection([3, 0, 3, 9, 0, 9], Direction.DOWN)

            for (let d of [-3, -2, -1, 0, 1, 2, 3]) {
                scene.world.setBlocks([6 + d, 0, 6], 'minecraft:air', false)
                scene.world.setBlocks([6, 0, 6 + d], 'minecraft:air', false)
                scene.world.showSection([6 + d, 0, 6], Direction.DOWN)
                scene.world.showSection([6, 0, 6 + d], Direction.DOWN)
            }

            for (let i = 2; i <= 10; i++) {
                for (let j = 2; j <= 10; j++) {
                    if (!(i >= 3 && i <= 9 && j >= 3 && j <= 9)) {
                        scene.world.setBlocks([i, 0, j], 'create:railway_casing', false)
                        scene.world.showSection([i, 0, j], Direction.DOWN)
                    }
                }
            }

            scene.scaleSceneView(0.75)
            scene.idle(20 * 1)

            //显示第一层
            scene.addKeyframe()
            scene.world.setBlocks([4, 1, 4, 8, 1, 8], 'create:industrial_iron_block', false)
            scene.world.showSection([4, 1, 4, 8, 1, 8], Direction.DOWN)

            for (let d of [-2, -1, 0, 1, 2]) {
                scene.world.setBlocks([6 + d, 1, 6], 'minecraft:air', false)
                scene.world.setBlocks([6, 1, 6 + d], 'minecraft:air', false)
                scene.world.showSection([6 + d, 1, 6], Direction.DOWN)
                scene.world.showSection([6, 1, 6 + d], Direction.DOWN)
            }

            for (let i = 3; i <= 9; i++) {
                for (let j = 3; j <= 9; j++) {
                    if (!(i >= 4 && i <= 8 && j >= 4 && j <= 8)) {
                        if (!(i == 6 && (j == 3 || j == 9) )) {
                            if (!(j == 6 && (i == 3 || i == 9))) {
                                scene.world.setBlocks([i, 1, j], 'create:railway_casing', false)
                                scene.world.showSection([i, 1, j], Direction.DOWN)
                                scene.idle(1)
                            }
                        }
                    }
                }
            }

            scene.idle(20 * 1)
            scene.text(20 * 2, 'kubejs:aboveground_1', [7, 1, 7])
            scene.idle(20 * 3)

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

                    scene.world.setBlocks([6 + dx, 1, 6 + dz], 'create:fluid_pipe', false)

                    if (dx == 4) {
                        if (dz == 4) {
                            scene.world.modifyBlock([6 + dx, 1, 6 + dz], state => 
                                state.with('east', false)
                                    .with('south', false)
                                    .with('west', true)
                                    .with('north', true)
                                    .with('up', false)
                                    .with('down', false)
                            , false)
                        } else if (dz == -4) {
                            scene.world.modifyBlock([6 + dx, 1, 6 + dz], state => 
                                state.with('east', false)
                                    .with('south', true)
                                    .with('west', true)
                                    .with('north', false)
                                    .with('up', false)
                                    .with('down', false)
                            , false)
                        } else {
                            scene.world.modifyBlock([6 + dx, 1, 6 + dz], state => 
                                state.with('east', false)
                                    .with('south', true)
                                    .with('west', false)
                                    .with('north', true)
                                    .with('up', false)
                                    .with('down', false)
                            , false)
                        }
                    } else if (dx == -4) {
                        if (dz == 4) {
                            scene.world.modifyBlock([6 + dx, 1, 6 + dz], state => 
                                state.with('east', true)
                                    .with('south', false)
                                    .with('west', false)
                                    .with('north', true)
                                    .with('up', false)
                                    .with('down', false)
                            , false)
                        } else if (dz == -4) {
                            scene.world.modifyBlock([6 + dx, 1, 6 + dz], state => 
                                state.with('east', true)
                                    .with('south', true)
                                    .with('west', false)
                                    .with('north', false)
                                    .with('up', false)
                                    .with('down', false)
                            , false)
                        } else {
                            scene.world.modifyBlock([6 + dx, 1, 6 + dz], state => 
                                state.with('east', false)
                                    .with('south', true)
                                    .with('west', false)
                                    .with('north', true)
                                    .with('up', false)
                                    .with('down', false)
                            , false)
                        }
                    } else {
                        scene.world.modifyBlock([6 + dx, 1, 6 + dz], state => 
                            state.with('east', true)
                                .with('south', false)
                                .with('west', true)
                                .with('north', false)
                                .with('up', false)
                                .with('down', false)
                        , false)
                    }

                    scene.world.showSection([6 + dx, 1, 6 + dz], Direction.DOWN)
                    scene.idle(1)
                }
            }

            scene.idle(20 * 1)
            scene.text(20 * 2, 'kubejs:aboveground_2', [2, 1, 4])
            scene.idle(20 * 3)

            //显示第二层 + 第一层的流体管道
            scene.addKeyframe()
            scene.world.setBlocks([5, 2, 5, 7, 2, 7], 'create:andesite_alloy_block', false)
            scene.world.showSection([5, 2, 5, 7, 2, 7], Direction.DOWN)

            scene.idle(20 * 1)

            scene.world.setBlocks([6, 3, 6], 'ad_astra:launch_pad', false)
            scene.world.showSection([6, 3, 6], Direction.DOWN)

            scene.idle(20 * 1)
            scene.text(20 * 2, 'kubejs:aboveground_3', [6, 2, 6])
            scene.idle(20 * 3)
            
            scene.world.hideSection([6, 3, 6], Direction.UP)
            scene.idle(20 * 1)
            scene.world.setBlocks([6, 2, 6], 'minecraft:air', true)
            scene.world.showSection([6, 2, 6], Direction.DOWN)

            scene.idle(20 * 1)

            //流体管道
            scene.addKeyframe()

            for (let i = 4; i <= 8; i++) {
                for (let j = 4; j <= 8; j++) {
                    if (!(i >= 5 && i <= 7 && j >= 5 && j <= 7)) {
                        scene.world.setBlocks([i, 2, j], 'create:fluid_pipe', false)

                        if (i == 4) {
                            if (j == 4) {
                                scene.world.modifyBlock([i, 2, j], state => 
                                    state.with('east', true)
                                        .with('south', true)
                                        .with('west', false)
                                        .with('north', false)
                                        .with('up', false)
                                        .with('down', false)
                                , false)
                            } else if (j == 8) {
                                scene.world.modifyBlock([i, 2, j], state => 
                                    state.with('east', true)
                                        .with('south', false)
                                        .with('west', false)
                                        .with('north', true)
                                        .with('up', false)
                                        .with('down', false)
                                , false)
                            } else {
                                scene.world.modifyBlock([i, 2, j], state => 
                                    state.with('east', false)
                                        .with('south', true)
                                        .with('west', false)
                                        .with('north', true)
                                        .with('up', false)
                                        .with('down', false)
                                , false)
                            }
                        } else if (i == 8) {
                            if (j == 4) {
                                scene.world.modifyBlock([i, 2, j], state => 
                                    state.with('east', false)
                                        .with('south', true)
                                        .with('west', true)
                                        .with('north', false)
                                        .with('up', false)
                                        .with('down', false)
                                , false)
                            } else if (j == 8) {
                                scene.world.modifyBlock([i, 2, j], state => 
                                    state.with('east', false)
                                        .with('south', false)
                                        .with('west', true)
                                        .with('north', true)
                                        .with('up', false)
                                        .with('down', false)
                                , false)
                            } else {
                                scene.world.modifyBlock([i, 2, j], state => 
                                    state.with('east', false)
                                        .with('south', true)
                                        .with('west', false)
                                        .with('north', true)
                                        .with('up', false)
                                        .with('down', false)
                                , false)
                            }
                        } else {
                            scene.world.modifyBlock([i, 2, j], state => 
                                state.with('east', true)
                                    .with('south', false)
                                    .with('west', true)
                                    .with('north', false)
                                    .with('up', false)
                                    .with('down', false)
                            , false)
                        }

                        scene.world.showSection([i, 2, j], Direction.DOWN)
                        scene.idle(1)
                    }
                }
            }

            scene.idle(20 * 1)
            scene.text(20 * 2, 'kubejs:aboveground_4', [6, 2, 6])
            scene.idle(20 * 3)

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
                        scene.world.modifyBlock([6 + dx, 2, 6 + dz], state =>
                            state.with('east', true)
                                .with('south', true)
                                .with('west', true)
                                .with('north', true)
                                .with('up', false)
                                .with('down', false)
                        , false)
                    }

                    if (
                        (dx == 2 && dz == 2)
                        || (dx == 2 && dz == -2)
                        || (dx == -2 && dz == 2)
                        || (dx == -2 && dz == -2)
                    ) continue

                    scene.world.setBlocks([6 + dx, 2, 6 + dz], 'create:fluid_pipe', false)

                    if (dx == 2) {
                        if (dz == 3 || dz == -3) {
                            scene.world.modifyBlock([6 + dx, 2, 6 + dz], state => 
                                state.with('east', false)
                                    .with('south', true)
                                    .with('west', false)
                                    .with('north', true)
                                    .with('up', false)
                                    .with('down', false)
                            , false)
                        }

                        if (dz == 4) {
                            scene.world.modifyBlock([6 + dx, 2, 6 + dz], state => 
                                state.with('east', false)
                                    .with('south', false)
                                    .with('west', false)
                                    .with('north', true)
                                    .with('up', false)
                                    .with('down', true)
                            , false)

                            scene.world.modifyBlock([6 + dx, 1, 6 + dz], state =>
                                state.with('east', true)
                                    .with('south', false)
                                    .with('west', false)
                                    .with('north', false)
                                    .with('up', true)
                                    .with('down', false)
                            , false)
                        }

                        if (dz == -4) {
                            scene.world.modifyBlock([6 + dx, 2, 6 + dz], state => 
                                state.with('east', false)
                                    .with('south', true)
                                    .with('west', false)
                                    .with('north', false)
                                    .with('up', false)
                                    .with('down', true)
                            , false)

                            scene.world.modifyBlock([6 + dx, 1, 6 + dz], state =>
                                state.with('east', true)
                                    .with('south', false)
                                    .with('west', false)
                                    .with('north', false)
                                    .with('up', true)
                                    .with('down', false)
                            , false)
                        }
                    } else if (dx == -2) {
                        if (dz == 3 || dz == -3) {
                            scene.world.modifyBlock([6 + dx, 2, 6 + dz], state => 
                                state.with('east', false)
                                    .with('south', true)
                                    .with('west', false)
                                    .with('north', true)
                                    .with('up', false)
                                    .with('down', false)
                            , false)
                        }

                        if (dz == 4) {
                            scene.world.modifyBlock([6 + dx, 2, 6 + dz], state => 
                                state.with('east', false)
                                    .with('south', false)
                                    .with('west', false)
                                    .with('north', true)
                                    .with('up', false)
                                    .with('down', true)
                            , false)

                            scene.world.modifyBlock([6 + dx, 1, 6 + dz], state =>
                                state.with('east', false)
                                    .with('south', false)
                                    .with('west', true)
                                    .with('north', false)
                                    .with('up', true)
                                    .with('down', false)
                            , false)
                        }

                        if (dz == -4) {
                            scene.world.modifyBlock([6 + dx, 2, 6 + dz], state => 
                                state.with('east', false)
                                    .with('south', true)
                                    .with('west', false)
                                    .with('north', false)
                                    .with('up', false)
                                    .with('down', true)
                            , false)

                            scene.world.modifyBlock([6 + dx, 1, 6 + dz], state =>
                                state.with('east', false)
                                    .with('south', false)
                                    .with('west', true)
                                    .with('north', false)
                                    .with('up', true)
                                    .with('down', false)
                            , false)
                        }
                    } else if (dz == 2) {
                        if (dx == 3 || dx == -3) {
                            scene.world.modifyBlock([6 + dx, 2, 6 + dz], state => 
                                state.with('east', true)
                                    .with('south', false)
                                    .with('west', true)
                                    .with('north', false)
                                    .with('up', false)
                                    .with('down', false)
                            , false)
                        }

                        if (dx == 4) {
                            scene.world.modifyBlock([6 + dx, 2, 6 + dz], state => 
                                state.with('east', false)
                                    .with('south', false)
                                    .with('west', true)
                                    .with('north', false)
                                    .with('up', false)
                                    .with('down', true)
                            , false)

                            scene.world.modifyBlock([6 + dx, 1, 6 + dz], state =>
                                state.with('east', false)
                                    .with('south', true)
                                    .with('west', false)
                                    .with('north', false)
                                    .with('up', true)
                                    .with('down', false)
                            , false)
                        }

                        if (dx == -4) {
                            scene.world.modifyBlock([6 + dx, 2, 6 + dz], state => 
                                state.with('east', true)
                                    .with('south', false)
                                    .with('west', false)
                                    .with('north', false)
                                    .with('up', false)
                                    .with('down', true)
                            , false)

                            scene.world.modifyBlock([6 + dx, 1, 6 + dz], state =>
                                state.with('east', false)
                                    .with('south', true)
                                    .with('west', false)
                                    .with('north', false)
                                    .with('up', true)
                                    .with('down', false)
                            , false)
                        }
                    } else if (dz == -2) {
                        if (dx == 3 || dx == -3) {
                            scene.world.modifyBlock([6 + dx, 2, 6 + dz], state => 
                                state.with('east', true)
                                    .with('south', false)
                                    .with('west', true)
                                    .with('north', false)
                                    .with('up', false)
                                    .with('down', false)
                            , false)
                        }

                        if (dx == 4) {
                            scene.world.modifyBlock([6 + dx, 2, 6 + dz], state => 
                                state.with('east', false)
                                    .with('south', false)
                                    .with('west', true)
                                    .with('north', false)
                                    .with('up', false)
                                    .with('down', true)
                            , false)

                            scene.world.modifyBlock([6 + dx, 1, 6 + dz], state =>
                                state.with('east', false)
                                    .with('south', true)
                                    .with('west', false)
                                    .with('north', false)
                                    .with('up', true)
                                    .with('down', false)
                            , false)
                        }

                        if (dx == -4) {
                            scene.world.modifyBlock([6 + dx, 2, 6 + dz], state => 
                                state.with('east', true)
                                    .with('south', false)
                                    .with('west', false)
                                    .with('north', false)
                                    .with('up', false)
                                    .with('down', true)
                            , false)

                            scene.world.modifyBlock([6 + dx, 1, 6 + dz], state =>
                                state.with('east', false)
                                    .with('south', false)
                                    .with('west', false)
                                    .with('north', true)
                                    .with('up', true)
                                    .with('down', false)
                            , false)
                        }
                    }

                    scene.world.showSection([6 + dx, 2, 6 + dz], Direction.DOWN)
                    scene.idle(1)
                }
            }

            scene.idle(20 * 1)
            scene.text(20 * 2, 'kubejs:aboveground_5', [2, 1, 5])
            scene.idle(20 * 3)

            //流体管道箱
            scene.addKeyframe()

            for (let dx of [-2, 2]) {
                for (let dz of [-2, 2]) {
                    scene.showControls(20 * 1.5, [6 + dx, 2, 6 + dz], 'left')
                        .rightClick()
                        .withItem('create:copper_casing')

                    scene.idle(20 * 2)

                    scene.world.setBlocks([6 + dx, 2, 6 + dz], 'create:encased_fluid_pipe', true)
                    scene.idle(20 * 0.5)
                }
            }

            scene.idle(20 * 1)
            scene.text(20 * 2, 'kubejs:aboveground_6', [4, 2, 8])
            scene.idle(20 * 3)

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

                    scene.world.setBlocks([6 + dx, 1, 6 + dz], 'create:encased_fluid_pipe', true)
                    scene.idle(1)
                }
            }

            scene.idle(20 * 1)
            scene.text(20 * 2, 'kubejs:aboveground_7', [4, 2, 5])
            scene.idle(20 * 3)

            //动力泵
            scene.addKeyframe()

            for (let d of [-3, 3]) {
                scene.world.setBlocks([6 + d, 2, 6], 'create:mechanical_pump', false)
                scene.world.setBlocks([6, 2, 6 + d], 'create:mechanical_pump', false)

                if (d == -3) {
                    scene.world.modifyBlock([6 + d, 2, 6], state => 
                        state.with('facing', 'west')
                    , false)

                    scene.world.modifyBlock([6, 2, 6 + d], state => 
                        state.with('facing', 'north')
                    , false)
                } else {
                    scene.world.modifyBlock([6 + d, 2, 6], state => 
                        state.with('facing', 'east')
                    , false)

                    scene.world.modifyBlock([6, 2, 6 + d], state => 
                        state.with('facing', 'south')
                    , false)
                }

                scene.world.showSection([6 + d, 2, 6], Direction.DOWN)
                scene.world.showSection([6, 2, 6 + d], Direction.DOWN)
            }

            for (let d of [-2, 2]) {
                if (d == -2) {
                    scene.world.modifyBlock([6 + d, 2, 6], state =>
                        state.with('west', true)
                    , false)

                    scene.world.modifyBlock([6, 2, 6 + d], state =>
                        state.with('north', true)
                    , false)
                } else {
                    scene.world.modifyBlock([6 + d, 2, 6], state =>
                        state.with('east', true)
                    , false)

                    scene.world.modifyBlock([6, 2, 6 + d], state =>
                        state.with('south', true)
                    , false)
                }
            }

            scene.idle(20 * 1)
            scene.text(20 * 2, 'kubejs:aboveground_8', [6, 2, 6])
            scene.idle(20 * 3)

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

                    scene.world.setBlocks([6 + dx, 2, 6 + dz], 'create:mechanical_pump', false)

                    if (dx == 3) {
                        scene.world.modifyBlock([6 + dx, 2, 6 + dz], state => 
                            state.with('facing', 'west')
                        , true) 
                    } else if (dx == -3) {
                        scene.world.modifyBlock([6 + dx, 2, 6 + dz], state => 
                            state.with('facing', 'east')
                        , true)
                    }

                    if (dz == 3) {
                        scene.world.modifyBlock([6 + dx, 2, 6 + dz], state => 
                            state.with('facing', 'north')
                        , true)
                    } else if (dz == -3) {
                        scene.world.modifyBlock([6 + dx, 2, 6 + dz], state => 
                            state.with('facing', 'south')
                        , true)
                    }

                    scene.idle(1)
                }
            }

            scene.idle(20 * 1)
            scene.text(20 * 2, 'kubejs:aboveground_9', [4, 2, 8])
            scene.idle(20 * 3)

            //安山脚手架
            scene.addKeyframe()

            for (let dx of [-2, 2]) {
                for (let dz of [-2, 2]) {
                    for (let dy of [3, 4]) {
                        scene.world.setBlocks([6 + dx, dy, 6 + dz], 'create:andesite_scaffolding', false)
                        scene.world.showSection([6 + dx, dy, 6 + dz], Direction.DOWN)
                        scene.idle(2)
                    }
                }
            }

            scene.idle(20 * 1)
            scene.text(20 * 2, 'kubejs:aboveground_10', [4, 3, 8])
            scene.idle(20 * 3)

            //发射台
            scene.addKeyframe()

            scene.world.setBlocks([6, 3, 6], 'ad_astra:launch_pad', false)
            scene.world.showSection([6, 3, 6], Direction.DOWN)

            scene.idle(20 * 1)
            scene.text(20 * 2, 'kubejs:aboveground_11', [6, 3, 6])
            scene.idle(20 * 3)

            //添加动力和注入水源
            scene.addKeyframe()

            for (let d of [-3, 3]) {
                scene.world.modifyBlockEntityNBT([6 + d, 2, 6], nbt => nbt.Speed = 16)
                scene.world.modifyBlockEntityNBT([6, 2, 6 + d], nbt => nbt.Speed = 16)
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

                    scene.world.modifyBlockEntityNBT([6 + dx, 2, 6 + dz], nbt => 
                        nbt.Speed = 16
                    )

                    if (dx == 3) {
                        scene.world.modifyBlockEntityNBT([6 + dx, 2, 6 + dz], nbt => 
                            nbt.west = {
                                Flow: {
                                    FluidName: 'minecraft:water',
                                    Amount: 1,
                                    ln: false
                                }
                            }
                        )
                    } else if (dx == -3) {
                        scene.world.modifyBlockEntityNBT([6 + dx, 2, 6 + dz], nbt => 
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
                        scene.world.modifyBlockEntityNBT([6 + dx, 2, 6 + dz], nbt => 
                            nbt.north = {
                                Flow: {
                                    FluidName: 'minecraft:water',
                                    Amount: 1,
                                    ln: false
                                }
                            }
                        )
                    } else if (dz == -3) {
                        scene.world.modifyBlockEntityNBT([6 + dx, 2, 6 + dz], nbt => 
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
                scene.world.setBlocks([6 + d, 2, 6], 'minecraft:air', false)
                scene.world.setBlocks([6, 2, 6 + d], 'minecraft:air', false)
                scene.world.showSection([6 + d, 2, 6], Direction.DOWN)
                scene.world.showSection([6, 2, 6 + d], Direction.DOWN)
                scene.idle(20 * 1)
                scene.world.setBlocks([6 + d, 2, 6], 'minecraft:water', false)
                scene.world.setBlocks([6, 2, 6 + d], 'minecraft:water', false)
            }

            scene.idle(20 * 1)
            scene.text(20 * 2, 'kubejs:aboveground_12', [3, 3, 6])
            scene.idle(20 * 3)

            for (let d of [-4, 4]) {
                scene.world.hideSection([6 + d, 2, 6], Direction.UP)
                scene.world.hideSection([6, 2, 6 + d], Direction.UP)
            }

            scene.idle(20 * 1)

            for (let d of [-5, -4, 4, 5]) {
                scene.world.setBlocks([6 + d, 2, 6], 'create:fluid_pipe', false)
                scene.world.modifyBlock([6 + d, 2, 6], state => 
                    state.with('east', true)
                        .with('south', false)
                        .with('west', true)
                        .with('north', false)
                        .with('up', false)
                        .with('down', false)
                , false)
                scene.world.setBlocks([6, 2, 6 + d], 'create:fluid_pipe', false)
                scene.world.modifyBlock([6, 2, 6 + d], state => 
                    state.with('east', false)
                        .with('south', true)
                        .with('west', false)
                        .with('north', true)
                        .with('up', false)
                        .with('down', false)
                , false)
                scene.world.showSection([6 + d, 2, 6], Direction.DOWN)
                scene.world.showSection([6, 2, 6 + d], Direction.DOWN)
            }

            scene.idle(20 * 1)
            scene.text(20 * 2, 'kubejs:aboveground_13', [2, 3, 6])
            scene.idle(20 * 3)

            for (let d of [-5, -4, 4, 5]) {
                scene.world.hideSection([6 + d, 2, 6], Direction.UP)
                scene.world.hideSection([6, 2, 6 + d], Direction.UP)
            }

            scene.idle(20 * 1)
            scene.text(20 * 2, 'kubejs:aboveground_14', [4, 1, 8])
            scene.idle(20 * 3)
        })
})