BlockEvents.broken(event => {

    const { block } = event

    //移除全局方块Map中已不存在的方块信息
        //工作盆
        if (block.id == 'create:basin') {
            global.mapArray.basinsMapArray = global.mapArray.basinsMapArray
                .filter(basin => 
                    basin.dimension != block.dimension
                    && basin.pos != block.pos
                )
        }

        //营火
        if (block.id == 'minecraft:campfire') {
            global.mapArray.campfiresMapArray = global.mapArray.campfiresMapArray
                .filter(campfire => 
                    campfire.dimension != block.dimension
                    && campfire.pos != block.pos
                )
        }

        //发射台
        if (block.id == 'ad_astra:launch_pad') {
            global.mapArray.launchPadsMapArray = global.mapArray.launchPadsMapArray
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
            global.mapArray.platformsMapArray = global.mapArray.platformsMapArray
                .filter(platform => 
                    platform.dimension != block.dimension
                    && platform.pos != block.pos
                )
        }
        
        //钢燃料储罐
        if (block.id == 'kubejs:steel_tank') {
            global.mapArray.steelTanksMapArray = global.mapArray.steelTanksMapArray
                .filter(steelTank => 
                    steelTank.dimension != block.dimension
                    && steelTank.pos != block.pos
                    && steelTank.hasBuildCorrectly != undefined
                    && steelTank.failedMessageHasSent != undefined
                    && steelTank.blockResult != undefined
                    && steelTank.buttonResult != undefined
                    && steelTank.glassResult != undefined
                    && steelTank.pillarResult != undefined
                    && steelTank.platingResult != undefined
                    && steelTank.railwayResult != undefined
                    && steelTank.slabResult != undefined
                    && steelTank.stairsResult != undefined
                )
        }

        //戴斯燃料储罐
        if (block.id == 'kubejs:desh_tank') {
            global.mapArray.deshTanksMapArray = global.mapArray.deshTanksMapArray
                .filter(deshTank => 
                    deshTank.dimension != block.dimension
                    && deshTank.pos != block.pos
                    && deshTank.hasBuildCorrectly != undefined
                    && deshTank.failedMessageHasSent != undefined
                    && deshTank.blockResult != undefined
                    && deshTank.buttonResult != undefined
                    && deshTank.glassResult != undefined
                    && deshTank.pillarResult != undefined
                    && deshTank.platingResult != undefined
                    && deshTank.railwayResult != undefined
                    && deshTank.slabResult != undefined
                    && deshTank.stairsResult != undefined
                )
        }
})