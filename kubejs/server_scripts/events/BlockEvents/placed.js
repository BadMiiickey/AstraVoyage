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

        //火箭发射基座
        if (block.id == 'ad_astra:launch_pad') {
            global.mapArray.launchPadsMapArray.push({
                dimension: block.dimension,
                pos: block.pos,
                hasBuildCorrectly: false,
                failedMessageHasSent: false,
                hasExploded: false
            })
        }
        //
        //火箭
        if (block.id == 'minecraft:lightning_rod') {
            global.mapArray.rocket_1MapArray.push({
                dimension: block.dimension,
                pos: block.pos,
                hasBuildCorrectly: false,
                failedMessageHasSent: false,
            })
            global.mapArray.rocket_2MapArray.push({
                dimension: block.dimension,
                pos: block.pos,
                hasBuildCorrectly: false,
                failedMessageHasSent: false,
            })
            global.mapArray.rocket_3MapArray.push({
                dimension: block.dimension,
                pos: block.pos,
                hasBuildCorrectly: false,
                failedMessageHasSent: false,
            })
            global.mapArray.rocket_4MapArray.push({
                dimension: block.dimension,
                pos: block.pos,
                hasBuildCorrectly: false,
                failedMessageHasSent: false,
            })
        }

    //营火
    if (block.id == 'minecraft:campfire') {
        global.mapArray.campfiresMapArray.push({
            dimension: block.dimension,
            pos: block.pos
        })
    }

    //简易工业平台
    /**
     * 
     * @param { Internal.BlockContainerJS } platform 
     */
    function frameParticleForecast(platform) {

        let dxs = [19, -19]
        let dzs = [20, -18]
        let dys = [0, 15]

        dys.forEach(dy => {
            for (let x = -18; x <= 19; x++) {
                dzs.forEach(dz => {
                    platform.level.spawnParticles(
                        'minecraft:end_rod', false,
                        platform.x + x, platform.y + 0.25 + dy, platform.z + dz,
                        0, 0, 0,
                        10, 0
                    )
                })
            }

            for (let z = -18; z <= 20; z++) {
                dxs.forEach(dx => {
                    platform.level.spawnParticles(
                        'minecraft:end_rod', false,
                        platform.x + dx, platform.y + 0.25 + dy, platform.z + z,
                        0, 0, 0,
                        10, 0
                    )
                })
            }
        })

        for (let y = 0; y <= 15; y++) {
            dxs.forEach(dx => {
                dzs.forEach(dz => {
                    platform.level.spawnParticles(
                        'minecraft:end_rod', false,
                        platform.x + dx, platform.y + 0.25 + y, platform.z + dz,
                        0, 0, 0,
                        10, 0
                    )
                })
            })
        }
    }

    if (block.id == 'kubejs:simple_industrial_platform') {
        global.mapArray.platformsMapArray.push({
            dimension: block.dimension,
            pos: block.pos
        })
        frameParticleForecast(block)
        server.scheduleRepeatingInTicks(20 * 2.5, callback => {
            if (block.level.getBlock(block.pos).id == 'kubejs:simple_industrial_platform') {
                frameParticleForecast(block)
            }
        })
    }
})