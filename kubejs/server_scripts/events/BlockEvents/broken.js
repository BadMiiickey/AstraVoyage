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
//
        //简易工业平台
        if (block.id == 'kubejs:simple_industrial_platform') {
            global.mapArray.platformsMapArray = global.mapArray.platformsMapArray
                .filter(platform => 
                    platform.dimension != block.dimension
                    && platform.pos != block.pos
                )
        }
        
        //一阶火箭
        if (block.id == 'kubejs:steel_tank') {
            global.mapArray.rocket_1MapArray = global.mapArray.rocket_1MapArray
                .filter(rocket_1 => 
                    rocket_1.dimension != block.dimension
                    && rocket_1.pos != block.pos
                    && rocket_1.hasBuildCorrectly != undefined
                    && rocket_1.failedMessageHasSent != undefined
                    && rocket_1.isBuilding != undefined
                )
            }
        //二阶火箭
        if (block.id == 'kubejs:desh_tank') {
            global.mapArray.rocket_2MapArray = global.mapArray.rocket_2MapArray
                .filter(rocket_2 => 
                    rocket_2.dimension != block.dimension
                    && rocket_2.pos != block.pos
                    && rocket_2.hasBuildCorrectly != undefined
                    && rocket_2.failedMessageHasSent != undefined
                    && rocket_2.isBuilding != undefined
                )
            }
            /* global.mapArray.rocket_3MapArray = global.mapArray.rocket_3MapArray
                .filter(rocket_3 => 
                    rocket_3.dimension != block.dimension
                    && rocket_3.pos != block.pos
                    && rocket_3.hasBuildCorrectly != undefined
                    && rocket_3.failedMessageHasSent != undefined
                    && rocket_3.isBuilding != undefined
                )
            global.mapArray.rocket_4MapArray = global.mapArray.rocket_4MapArray
                .filter(rocket_4 => 
                    rocket_4.dimension != block.dimension
                    && rocket_4.pos != block.pos
                    && rocket_4.hasBuildCorrectly != undefined
                    && rocket_4.failedMessageHasSent != undefined
                    && rocket_4.isBuilding != undefined
                ) */
})