BlockEvents.broken(event => {

    const { block } = event

    //移除全局方块Map中已不存在的方块信息
        //工作盆
        if (block.id == 'create:basin') {
            global.basinsMapArray = global.basinsMapArray
                .filter(basin => 
                    basin.dimension != block.dimension
                    && basin.pos != block.pos
                )
        }

        //营火
        if (block.id == 'minecraft:campfire') {
            global.campfiresMapArray = global.campfiresMapArray
                .filter(campfire => 
                    campfire.dimension != block.dimension
                    && campfire.pos != block.pos
                )
        }

        //发射台
        if (block.id == 'ad_astra:launch_pad') {
            global.launchPadsMapArray = global.launchPadsMapArray
                .filter(launchPad => 
                    launchPad.dimension != block.dimension
                    && launchPad.pos != block.pos
                    && launchPad.hasBuildCorrectly != undefined
                    && launchPad.failedMessageHasSent != undefined
                    && launchPad.hasExploded != undefined
                )
        }

        //简易工业平台
        if (block.id == 'kubejs:simple_industrial_platform') {
            global.platformsMapArray = global.platformsMapArray
                .filter(platform => 
                    platform.dimension != block.dimension
                    && platform.pos != block.pos
                )
        }
})