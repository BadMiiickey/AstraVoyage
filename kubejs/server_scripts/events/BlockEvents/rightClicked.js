BlockEvents.rightClicked(event => {
    
    const { player, block, level, server } = event

    //床 => 夜晚高亮让玩家无法入睡的敌对生物
    global.methods.stringListTransformation(Ingredient.of('#minecraft:beds').itemIds).forEach(bed => {   
        if (
            block.id == bed
            && player.level.night
        ) {
            let playerAABBForItems = player.boundingBox.inflate(8, 8, 8)
            let mobs = level.getEntitiesWithin(playerAABBForItems)
                .filter(entity => entity.monster && entity.living)
    
            mobs.forEach(/** @param { Internal.LivingEntity } mob */ mob => {
                mob.potionEffects.add('minecraft:glowing', 20 * 5, 0, false, false)
            })
        }
    })

    //灰烬收集器 => 工作盆、分散网、鼓风机 多方块机器 => 简易放置逻辑
    if (block.id == 'create:basin') {
        if (
            player.mainHandItem.id == 'create:nozzle'
            || player.offHandItem.id == 'create:nozzle'
        ) {
            block.offset(0, 2, 0).set('create:nozzle', { facing: 'down' })
            player.swing()
        }
    }

    if (block.id == 'create:nozzle') {
        if (
            player.mainHandItem.id == 'create:encased_fan' 
            || player.offHandItem.id == 'create:encased_fan'
        ) {
            block.offset(0, 1, 0).set('create:encased_fan', { facing: 'down' })
            player.swing()
            event.cancel()
        }
    }

    //简易工业平台 => 生成正方形平台
    
    /**
     * 
     * @param { Internal.BlockContainerJS } platform 
     */
    function platformFrameFilling(platform) {

        let counter = 1//当前迭代次数
        let totalStep = 32//总迭代次数

        /**
         * 
         * @param { number } i 
         */
        function fillStep(i) {
            for (let j = -19; j <= -18; j++) {
                for (let k = -19; k <= -18; k++) {
                    platform.offset(2 * i + j, 0, k)
                        .set(counter % 2 == 1 ? 'minecraft:black_concrete' : 'minecraft:yellow_concrete')
                }
            }
            
            for (let j = -19; j <= -18; j++) {
                for (let k = 17; k <= 18; k++) {
                    platform.offset(j, 0, -2 * i + k)
                        .set(counter % 2 == 1 ? 'minecraft:black_concrete' : 'minecraft:yellow_concrete')
                }
            }

            for (let j = 17; j <= 18; j++) {
                for (let k = 17; k <= 18; k++) {
                    platform.offset(-2 * i + j, 0, k)
                        .set(counter % 2 == 1 ? 'minecraft:black_concrete' : 'minecraft:yellow_concrete')
                }
            }

            for (let j = 17; j <= 18; j++) {
                for (let k = -19; k <= -18; k++) {
                    platform.offset(j, 0, 2 * i + k)
                        .set(counter % 2 == 1 ? 'minecraft:black_concrete' : 'minecraft:yellow_concrete')
                }
            }

            counter++
            i++

            if (counter > totalStep) return
            if (i > 17) return

            server.scheduleInTicks(5, callback => fillStep(i))
        }

        fillStep(0)
    }

    /**
     * 
     * @param { Internal.BlockContainerJS } platform 
     */
    function platformFilling(platform) {

        let counter = 1    //当前迭代次数
        let totalStep = 16  //总迭代次数
        let basicPlatform = false   //简易工业平台基础平台是否已经生成

        /**
         * 
         * @param { number } y
         */
        function fillStep(y) {
            for (let x = -9; x <= 9; x++) {
                for (let z = -9; z <= 9; z++) {
                    platform.offset(2 * x, y, 2 * z).set('minecraft:air')
                    platform.offset(2 * x - 1, y, 2 * z - 1).set('minecraft:air')
                    platform.offset(2 * x - 1, y, 2 * z).set('minecraft:air')
                    platform.offset(2 * x, y, 2 * z - 1).set('minecraft:air')  
                }       
            }
        
            counter++
            y--

            if (counter > totalStep) return
            if (y <= 0) return

            server.scheduleInTicks(5, callback => fillStep(y))
            server.scheduleInTicks(15 * 5, callback => {
                if (!basicPlatform) {
                    for (let x = -8; x <= 8; x++) {
                        for (let z = -8; z <= 8; z++) {
                            platform.offset(2 * x, 0, 2 * z).set('minecraft:white_concrete')
                            platform.offset(2 * x - 1, 0, 2 * z - 1).set('minecraft:white_concrete')
                            platform.offset(2 * x - 1, 0, 2 * z).set('minecraft:light_gray_concrete')
                            platform.offset(2 * x, 0, 2 * z - 1).set('minecraft:light_gray_concrete')  
                        }       
                    }
    
                    basicPlatform = true
                }
            })
        }

        fillStep(15)
    }

    if (
        block.id == 'kubejs:simple_industrial_platform'
        && player.mainHandItem.id == 'create:wrench'
    ) {
        player.swing()
        block.set('minecraft:air')
        global.mapArray.platformsMapArray = global.mapArray.platformsMapArray
            .filter(platform =>
                !(
                    platform.dimension == block.dimension
                    && platform.pos == block.pos
                )
            )
        platformFilling(block)
        server.scheduleInTicks(16 * 5, callback => platformFrameFilling(block))
    }

    //流体管道箱

    /**
     * 
     * @param { Vec3d } hit 
     * @param { BlockPos } pos 
     */
    function clickedFaceCheck(hit, pos) {
        
        let dx = hit.x() - pos.x
        let dy = hit.y() - pos.y
        let dz = hit.z() - pos.z

        if (dx == 0) {
            return 'west'
        } else if (dx == 1) {
            return 'east'
        }

        if (dy == 0) {
            return 'down'
        } else if (dy == 1) {
            return 'up'
        }

        if (dz == 0) {
            return 'north'
        } else if (dz == 1) {
            return 'south'
        }
    }

    if (block.id == 'create:encased_fluid_pipe') {
        if (player.mainHandItem.empty) {

            let properties = {
                east: block.properties.east,
                west: block.properties.west,
                north: block.properties.north,
                south: block.properties.south,
                up: block.properties.up,
                down: block.properties.down
            }

            player.swing()
            Client.tell(`before: ${properties}`)
            if (player.rayTrace().hit != null) {
                switch (clickedFaceCheck(player.rayTrace().hit, block.pos)) {
                    case 'west':
                        properties.west = properties.west == 'true' ? false : true
                        break
                    case 'east':
                        properties.east = properties.east == 'true' ? false : true
                        break
                    case 'north':
                        properties.north = properties.north == 'true' ? false : true
                        break
                    case 'south':
                        properties.south = properties.south == 'true' ? false : true
                        break
                    case 'up':
                        properties.up = properties.up == 'true' ? false : true
                        break
                    case 'down':
                        properties.down = properties.down == 'true' ? false : true
                        break
                }
                Client.tell(`after: ${properties}`)
                block.set('create:encased_fluid_pipe', properties)
            }
        }
    }
})