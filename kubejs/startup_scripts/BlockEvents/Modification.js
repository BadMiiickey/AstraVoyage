BlockEvents.modification(event => {

    //工作盆
    event.modify('create:basin', block => {
        block.blockBuilder.blockEntity(info => {
            info.tick(20 * 1, 0, blockEntity => {
                
                let block = blockEntity.block

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
            })
        })
    })

    //营火
    event.modify('minecraft:campfire', block => {
        block.blockBuilder.blockEntity(info => {
            info.tick(20 * 3, 0, blockEntity => {

                let block = blockEntity.block

                block.getPlayersInRadius(16).forEach(player => {
                    player.potionEffects.add('minecraft:regeneration', 20 * 3, 0, false, false)
                })

                if (
                    block.canSeeSky
                    && block.level.raining
                ) {
                    let litFalse = block.blockState
                        .setValue($BlockStateProperties.LIT, $Boolean.FALSE)
            
                    block.level.setBlockAndUpdate(campfire.pos, litFalse)
                }
            })
        })
    })

    //发射台
    event.modify('ad_astra:launch_pad', block => {
        block.blockBuilder.blockEntity(info => {
            info.tick(20 * 2.5, 1, blockEntity => {
                if (!blockEntity.persistentData) {
                    blockEntity.persistentData = {
                        hasBuildCorrectly: false,
                        failedMessageHasSent: false,
                        hasExploded: false,
                    }
                }
                multiblockCheck.launchPad(blockEntity)
            })
        })
    })
})