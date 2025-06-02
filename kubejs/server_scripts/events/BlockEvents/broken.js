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

        //紫金燃料储罐
        if (block.id == "kubejs:ostrum_tank") {
            global.mapArray.ostrumTanksMapArray = global.mapArray.ostrumTanksMapArray
                .filter(ostrumTank => 
                    ostrumTank.dimension != block.dimension
                    && ostrumTank.pos != block.pos
                    && ostrumTank.hasBuildCorrectly != undefined
                    && ostrumTank.failedMessageHasSent != undefined
                    && ostrumTank.blockResult != undefined
                    && ostrumTank.buttonResult != undefined
                    && ostrumTank.glassResult != undefined
                    && ostrumTank.pillarResult != undefined
                    && ostrumTank.platingResult != undefined
                    && ostrumTank.railwayResult != undefined
                    && ostrumTank.slabResult != undefined
                    && ostrumTank.stairsResult != undefined
                )
        }

        //耐热金属燃料储罐
        if (block.id == "kubejs:calorite_tank") {
            global.mapArray.caloriteTanksMapArray = global.mapArray.caloriteTanksMapArray
                .filter(caloriteTank => 
                    caloriteTank.dimension != block.dimension
                    && caloriteTank.pos != block.pos
                    && caloriteTank.hasBuildCorrectly != undefined
                    && caloriteTank.failedMessageHasSent != undefined
                    && caloriteTank.blockResult != undefined
                    && caloriteTank.buttonResult != undefined
                    && caloriteTank.glassResult != undefined
                    && caloriteTank.pillarResult != undefined
                    && caloriteTank.platingResult != undefined
                    && caloriteTank.railwayResult != undefined
                    && caloriteTank.slabResult != undefined
                    && caloriteTank.stairsResult != undefined
                )
        }
})