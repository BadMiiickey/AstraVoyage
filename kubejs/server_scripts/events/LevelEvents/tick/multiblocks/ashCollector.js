LevelEvents.tick(event => {

    const { server } = event

    if (global.methods.tickCountCheck(server, 0, 1)) {
        if (
            global.mapArray.basinsMapArray
            && global.mapArray.basinsMapArray.length > 0
        ) {
            global.mapArray.basinsMapArray.forEach(basin => {
                server.players.forEach(player => {
                    if (player.level.dimension == basin.dimension) {

                        let block = level.getBlock(basin.pos)

                        if (
                            block.id == 'create:basin'
                            && block.biomeId == 'minecraft:basalt_deltas'
                            && block.offset(0, 2, 0).id == 'create:nozzle'
                            && block.offset(0, 3, 0).id == 'create:encased_fan'
                            && block.offset(0, 3, 0).entityData.Speed > 0
                        ) {
                            let fanSpeed = block.offset(0, 3, 0).entityData.Speed
                            let collectInterval = 9 - Math.floor(Math.log2(fanSpeed))

                            if (global.methods.tickCountCheck(server, 0, collectInterval)) {
                                block.inventory.insertItem('kubejs:ash', false)
                            }
                        }
                    }
                })
            })
        }
    }
})