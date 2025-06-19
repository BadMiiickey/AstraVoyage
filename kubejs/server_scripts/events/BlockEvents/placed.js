BlockEvents.placed(event => {

    const { block, server } = event

    //多方块机器条件判断
        //灰烬收集器 => 工作盆、分散网、鼓风机
        if (block.id == 'create:basin') {
            global.mapArray.basinsMapArray.push({
                dimension: block.dimension,
                pos: block.pos
            })
        }

        //紫金燃料储罐
        if (block.id == 'kubejs:ostrum_tank') {
            global.mapArray.ostrumTanksMapArray.push({
                dimension: block.dimension,
                pos: block.pos,
                hasBuildCorrectly: false,
                failedMessageHasSent: false,
                hasBuilt: false,
                pillarResult: undefined,
                stairsResult: undefined,
                slabResult: undefined,
                railwayResult: undefined,
                buttonResult: undefined,
                blockResult: undefined,
                glassResult: undefined,
                platingResult: undefined
            })
        }

        //耐热金属燃料储罐
        if (block.id == 'kubejs:calorite_tank') {
            global.mapArray.caloriteTanksMapArray.push({
                dimension: block.dimension,
                pos: block.pos,
                hasBuildCorrectly: false,
                failedMessageHasSent: false,
                hasBuilt: false,
                pillarResult: undefined,
                stairsResult: undefined,
                slabResult: undefined,
                railwayResult: undefined,
                buttonResult: undefined,
                blockResult: undefined,
                glassResult: undefined,
                platingResult: undefined
            })
        }
})