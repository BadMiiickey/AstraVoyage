Ponder.registry(event => {

    //灰烬收集器
    event.create('create:nozzle')
        .scene('kubejs:ash_collector', 'kubejs:ash_collector', 'kubejs:ash_collector', scene => {

            //显示地板
            scene.showBasePlate()
            scene.idle(10)

            //显示工作盆
            scene.world.setBlocks([2, 1, 2], 'create:basin', false)
            scene.world.showSection([2, 1, 2], Direction.DOWN)
            
            scene.idle(20 * 1)
            scene.text(20 * 2, 'kubejs:ash_collector_1', [2, 2, 2])
            scene.idle(20 * 3)

            //显示分散网
            scene.showControls(20 * 1.5, [2, 2, 2], 'left')
                .rightClick()
                .withItem('create:nozzle')

            scene.idle(20 * 2.5)
            scene.world.setBlocks([2, 3, 2], 'create:nozzle', false)
            scene.world.modifyBlock([2, 3, 2], state => 
                state.with('facing', 'down')
            , false)
            scene.world.showSection([2, 3, 2], Direction.DOWN)
            scene.idle(20 * 1)

            //显示鼓风机
            scene.showControls(20 * 1.5, [2, 4, 2], 'left')
                .rightClick()
                .withItem('create:encased_fan')
            
            scene.idle(20 * 2.5)
            scene.world.setBlocks([2, 4, 2], 'create:encased_fan', false)
            scene.world.modifyBlock([2, 4, 2], state => 
                state.with('facing', 'down')
            , false)
            scene.world.showSection([2, 4, 2], Direction.DOWN)

            scene.idle(20 * 1)
            scene.text(20 * 2, 'kubejs:ash_collector_2', [2, 5, 2])
            scene.idle(20 * 3)

            scene.world.modifyBlockEntityNBT([2, 4, 2], nbt => 
                nbt.Speed = 16
            )
        })
})