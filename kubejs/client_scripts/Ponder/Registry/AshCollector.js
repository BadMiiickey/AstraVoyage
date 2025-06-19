Ponder.registry(event => {

    //灰烬收集器
    event.create('create:nozzle')
        .scene('kubejs:ash_collector', 'kubejs:ash_collector', (builder, util) => {

            //显示地板
            builder.showBasePlate()
            builder.idle(10)

            //显示工作盆
            builder.world().setBlocks([2, 1, 2], 'create:basin', false)
            builder.world().showSection([2, 1, 2], Direction.DOWN)
            
            builder.idle(20 * 1)
            builder.text(20 * 2, 'kubejs:ash_collector_1', [2, 2, 2])
            builder.idle(20 * 3)

            //显示分散网
            builder.overlay().showControls(20 * 1.5, [2, 2, 2], 'left')
                .rightClick()
                .withItem('create:nozzle')

            builder.idle(20 * 2.5)
            builder.world().setBlocks([2, 3, 2], 'create:nozzle', false)
            builder.world().modifyBlock([2, 3, 2], state => 
                state.setValue(BlockProperties.FACING, Direction.DOWN)
            )
            builder.world().showSection([2, 3, 2], Direction.DOWN)
            builder.idle(20 * 1)

            //显示鼓风机
            builder.overlay().showControls(20 * 1.5, [2, 4, 2], 'left')
                .rightClick()
                .withItem('create:encased_fan')
            
            builder.idle(20 * 2.5)
            builder.world().setBlocks([2, 4, 2], 'create:encased_fan', false)
            builder.world().modifyBlock([2, 4, 2], state => 
                state.setValue(BlockProperties.FACING, Direction.DOWN)
            )
            builder.world().showSection([2, 4, 2], Direction.DOWN)

            builder.idle(20 * 1)
            builder.text(20 * 2, 'kubejs:ash_collector_2', [2, 5, 2])
            builder.idle(20 * 3)

            builder.world().modifyBlockEntityNBT([2, 4, 2], nbt => 
                nbt.Speed = 16
            )
        })
})