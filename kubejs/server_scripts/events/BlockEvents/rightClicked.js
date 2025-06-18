BlockEvents.rightClicked(event => {
    
    const { player, block, level, server, facing, hand } = event

    if (hand != 'MAIN_HAND') return

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
        if (player.mainHandItem.id == 'create:nozzle') {
            block.offset(0, 2, 0).set('create:nozzle', { facing: 'down' })
            player.swing()
        }
    }

    if (block.id == 'create:nozzle') {
        if (player.mainHandItem.id == 'create:encased_fan') {
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

    // 一阶火箭
    if (player.mainHandItem.id == 'create:wrench') {
        if (global.mapArray.steelTanksMapArray) {
            global.mapArray.steelTanksMapArray.forEach(rocket_1 => {
                if (rocket_1.hasBuildCorrectly) {
                    if (block.dimension == rocket_1.dimension) {
                        player.swing()

                        const center = rocket_1.pos
                        const minX = center.x - 3, maxX = center.x + 3
                        const minY = center.y - 3, maxY = center.y + 9
                        const minZ = center.z - 3, maxZ = center.z + 3

                        if (
                            block.x >= minX && block.x <= maxX 
                            && block.y >= minY && block.y <= maxY 
                            && block.z >= minZ && block.z <= maxZ
                        ) {
                            for (let dx = -3; dx <= 3; dx++) {
                                for (let dy = -3; dy <= 9; dy++) {
                                    for (let dz = -3; dz <= 3; dz++) {

                                        let block = player.level.getBlock(center.x + dx, center.y + dy, center.z + dz)

                                        if (
                                            block.id.startsWith('ad_astra:') 
                                            || block.id == 'createnuclear:reinforced_glass' 
                                            || block.id == 'create:railway_casing' 
                                            || block.id == 'minecraft:lightning_rod'
                                            || block.id == 'kubejs:steel_tank'
                                        ) {
                                            block.set('minecraft:air')
                                        }
                                    }
                                }
                            }

                            let rocket = player.level.createEntity('ad_astra:tier_1_rocket')

                            rocket.setPos(center.x + 0.5, center.y - 2, center.z + 0.5)
                            rocket.spawn()

                            rocket_1.hasBuildCorrectly = false

                            event.cancel()
                        }
                    }
                }
            })
        }
        if (global.mapArray.deshTanksMapArray) {
            global.mapArray.deshTanksMapArray.forEach(rocket_2 => {
                if (rocket_2.hasBuildCorrectly) {
                    if (block.dimension == rocket_2.dimension) {
                        player.swing()

                        const center = rocket_2.pos
                        const minX = center.x - 3, maxX = center.x + 3
                        const minY = center.y - 12, maxY = center.y
                        const minZ = center.z - 3, maxZ = center.z + 3

                        if (
                            block.x >= minX && block.x <= maxX &&
                            block.y >= minY && block.y <= maxY &&
                            block.z >= minZ && block.z <= maxZ
                        ) {
                            for (let dx = -3; dx <= 3; dx++) {
                                for (let dy = 0; dy <= 14; dy++) {
                                    for (let dz = -3; dz <= 3; dz++) {

                                        let block = player.level.getBlock(center.x + dx, center.y - dy, center.z + dz) 
                                          
                                        if (
                                            block.id.startsWith('ad_astra:') ||
                                            block.id == 'createnuclear:reinforced_glass' ||
                                            block.id == 'minecraft:lightning_rod' || 
                                            block.id == 'kubejs:desh_tank'
                                        ) {
                                            block.set('minecraft:air')
                                        }
                                    }
                                }
                            }

                            let rocket = player.level.createEntity('ad_astra:tier_2_rocket')
                            
                            rocket.setPos(center.x + 0.5, center.y - 2, center.z + 0.5)
                            rocket.spawn()

                            rocket_2.hasBuildCorrectly = false

                            event.cancel()
                        }
                    }
                }
            })
        }
    }

    //流体管道箱 => 空手右键更改管道开关状态
    if (block.id == 'create:encased_fluid_pipe') {
        if (player.mainHandItem.empty) {

            let direction = facing.toString().toUpperCase()
            let state = block.blockState.getValue(BlockProperties[direction]) 
            let newState = 
                block.blockState.setValue(BlockProperties[direction], state ? $Boolean.FALSE : $Boolean.TRUE)
                
            player.swing()
            level.setBlockAndUpdate(block.pos, newState)
        }
    }

    //墙 => 扳手右键更改连接状态
    if (block.hasTag('minecraft:walls')) {
        if (player.mainHandItem.id == 'create:wrench') {
            if (facing == 'UP' || facing == 'DOWN') return

            let stateList = [
                $WallSide.NONE, 
                $WallSide.LOW, 
                $WallSide.TALL
            ]
            let direction = facing.toString().toUpperCase() + '_WALL'
            let newState = 
                block.blockState.setValue(BlockProperties[direction], stateList[global.other.stateCount])

            global.other.stateCount += 1

            if (global.other.stateCount >= stateList.length) {
                global.other.stateCount = 0
            }

            player.swing()
            level.setBlockAndUpdate(block.pos, newState)
            
        }
    }

    //栅栏 => 扳手右键更改连接状态
    if (block.hasTag('minecraft:fences')) {
        if (player.mainHandItem.id == 'create:wrench') {

            let direction = facing.toString().toUpperCase()
            let state = block.blockState.getValue(BlockProperties[direction]) 
            let newState = 
                block.blockState.setValue(BlockProperties[direction], state ? $Boolean.FALSE : $Boolean.TRUE)

            player.swing()
            level.setBlockAndUpdate(block.pos, newState)
            
        }
    }

    //栅栏门 => Shift + 扳手右键更改状态
    if (block.hasTag('minecraft:fence_gates')) {
        if (player.mainHandItem.id == 'create:wrench') {
            if (player.crouching) {

                let state = block.blockState.getValue(BlockProperties.IN_WALL)
                let newState = 
                    block.blockState.setValue(BlockProperties.IN_WALL, state ? $Boolean.FALSE : $Boolean.TRUE)

                player.swing()
                level.setBlockAndUpdate(block.pos, newState)
            }
        }
    }

    //楼梯 => 扳手右键更改形状, Shift + 扳手右键更改朝向
    if (block.hasTag('minecraft:stairs')) {
        if (player.mainHandItem.id == 'create:wrench') {
            if (player.crouching) {

                let stateList = [
                    Direction.NORTH, 
                    Direction.SOUTH, 
                    Direction.EAST, 
                    Direction.WEST
                ]
                let newState = 
                    block.blockState.setValue(BlockProperties.HORIZONTAL_FACING, stateList[global.other.stateCount])

                global.other.stateCount += 1

                if (global.other.stateCount >= stateList.length) {
                    global.other.stateCount = 0
                }

                player.swing()
                level.setBlockAndUpdate(block.pos, newState)
                return
            }
            
            let stateList = [
                $StairsShape.STRAIGHT, 
                $StairsShape.OUTER_LEFT, $StairsShape.OUTER_RIGHT,
                $StairsShape.INNER_LEFT, $StairsShape.INNER_RIGHT
            ] 
            let newState = 
                block.blockState.setValue(BlockProperties.STAIRS_SHAPE, stateList[global.other.stateCount])

            global.other.stateCount += 1

            if (global.other.stateCount >= stateList.length) {
                global.other.stateCount = 0
            }
            
            player.swing()
            level.setBlockAndUpdate(block.pos, newState)
        }
    }

    //台阶 => 扳手右键更改上下位置
    if (block.hasTag('minecraft:slabs')) {
        if (
            player.mainHandItem.id == 'create:wrench'
            && block.blockState.getValue(BlockProperties.SLAB_TYPE) != $SlabType.DOUBLE
        ) {
            let stateList = [
                $SlabType.BOTTOM, 
                $SlabType.TOP,
            ]
            let newState = 
                block.blockState.setValue(BlockProperties.SLAB_TYPE, stateList[global.other.stateCount])

            global.other.stateCount += 1

            if (global.other.stateCount >= stateList.length) {
                global.other.stateCount = 0
            }
            
            player.swing()
            level.setBlockAndUpdate(block.pos, newState)
        }
    }

    //竖直台阶 => 扳手右键更改朝向
    if (block.hasTag('quark:vertical_slabs')) {
        if (
            player.mainHandItem.id == 'create:wrench'
            && block.blockState.getValue($QuarkVerticalSlabBlock.TYPE) != $VerticalSlabType.DOUBLE
        ) {
            let stateList = [
                $VerticalSlabType.NORTH,
                $VerticalSlabType.SOUTH,
                $VerticalSlabType.EAST,
                $VerticalSlabType.WEST
            ]
            let newState = 
                block.blockState.setValue($QuarkVerticalSlabBlock.TYPE, stateList[global.other.stateCount])

            global.other.stateCount += 1

            if (global.other.stateCount >= stateList.length) {
                global.other.stateCount = 0
            }

            player.swing()
            level.setBlockAndUpdate(block.pos, newState)
        }
    }

    //避雷针、末地烛 => 扳手右键更改上下朝向
    if (
        block.id == 'minecraft:lightning_rod' 
        || block.id == 'minecraft:end_rod'
    ) {
        if (player.mainHandItem.id == 'create:wrench') {

            let stateList = [
                Direction.UP,
                Direction.DOWN
            ]
            let newState = 
                block.blockState.setValue(BlockProperties.FACING, stateList[global.other.stateCount])

            global.other.stateCount += 1

            if (global.other.stateCount >= stateList.length) {
                global.other.stateCount = 0
            }

            player.swing()
            level.setBlockAndUpdate(block.pos, newState)
        }
    }

    //活板门 => 扳手右键更改上下位置, Shift + 扳手右键更改朝向
    if (block.hasTag('minecraft:trapdoors')) {
        if (player.mainHandItem.id == 'create:wrench') {
            if (player.crouching) {

                let stateList = [
                    Direction.NORTH, 
                    Direction.SOUTH, 
                    Direction.EAST, 
                    Direction.WEST
                ]
                let newState = 
                    block.blockState.setValue(BlockProperties.HORIZONTAL_FACING, stateList[global.other.stateCount])

                global.other.stateCount += 1

                if (global.other.stateCount >= stateList.length) {
                    global.other.stateCount = 0
                }

                player.swing()
                level.setBlockAndUpdate(block.pos, newState)
                return
            }
            
            let stateList = [
                $Half.BOTTOM,
                $Half.TOP
            ]
            let newState = 
                block.blockState.setValue(BlockProperties.HALF, stateList[global.other.stateCount])

            global.other.stateCount += 1

            if (global.other.stateCount >= stateList.length) {
                global.other.stateCount = 0
            }
            
            player.swing()
            level.setBlockAndUpdate(block.pos, newState)
            event.cancel()
        }
    }

    //杆 => Shift + 扳手右键更改连接状态
    if (block.hasTag('quark:posts')) {
        if (player.mainHandItem.id == 'create:wrench') {
            if (player.crouching) {
                $WoodPostBlock.SIDES.forEach(side => {

                    let stateList = [
                        $PostSideType.NONE,
                        $PostSideType.CHAIN,
                        $PostSideType.OTHER_POST,
                    ]
                    let direction = 'CONNECT_' + facing.toString().toUpperCase()

                    if (side.name.toUpperCase() != direction) return

                    let newState = 
                        block.blockState.setValue(side, stateList[global.other.stateCount])
    
                    global.other.stateCount += 1
    
                    if (global.other.stateCount >= stateList.length) {
                        global.other.stateCount = 0
                    }
    
                    player.swing()
                    level.setBlockAndUpdate(block.pos, newState)
                })
            }
        }
    }

    //具有AXIS属性的方块 => 扳手右键更改轴向
    if (block.blockState.hasProperty(BlockProperties.AXIS)) {
        if (player.crouching) return
        if (player.mainHandItem.id == 'create:wrench') {

            let stateList = [
                DirectionAxis.X,
                DirectionAxis.Y,
                DirectionAxis.Z
            ]
            let newState = 
                block.blockState.setValue(BlockProperties.AXIS, stateList[global.other.stateCount])

            global.other.stateCount += 1

            if (global.other.stateCount >= stateList.length) {
                global.other.stateCount = 0
            }

            player.swing()
            level.setBlockAndUpdate(block.pos, newState)
        }
    }

    /**
     * 
     * @param { Internal.Level } level 
     * @param { Internal.BlockContainerJS } block 
     */
    function composterSpawn(level, block) {
        for (let i = 0; i <= 40; i++) {
                level.spawnParticles(
                'minecraft:composter', false,
                block.x + Math.random(),
                block.y + Math.random(),
                block.z + Math.random(),
                0, 0, 0, 1, 0
            )
        }

    }

    //矮花、珊瑚、睡莲、海泡菜 => 骨粉右键产出
    if (
        block.hasTag('minecraft:small_flowers')
        || block.hasTag('minecraft:corals')
        || block.id == 'minecraft:lily_pad'
        || block.id == 'minecraft:sea_pickle'
    ) {
        if (player.mainHandItem.id == 'minecraft:bone_meal') {
            player.swing()
            block.popItem(block.id)
            composterSpawn(level, block)
            
            if (!player.creative) {
                player.mainHandItem.count--
            }
        }
    }

    //甘蔗 => 骨粉右键根部催熟
    if (
        block.id == 'minecraft:sugar_cane' 
        && block.offset(0, -1, 0).id != 'minecraft:sugar_cane'
    ) {
        if (player.mainHandItem.id == 'minecraft:bone_meal') {
            player.swing()

            let state = block.blockState.getValue(BlockProperties.AGE_15)
            let newState = 
                block.blockState.setValue(BlockProperties.AGE_15, $Integer.valueOf(String(Math.min(state + 1, 15))))

            level.setBlockAndUpdate(block.pos, newState)
            composterSpawn(level, block)
            
            if (!player.creative) {
                player.mainHandItem.count--
            }
        }
    }

    //下界疣 => 骨粉右键催熟
    if (block.id == 'minecraft:nether_wart') {
        if (player.mainHandItem.id == 'minecraft:bone_meal') {
            player.swing()

            let state = block.blockState.getValue(BlockProperties.AGE_3)
            let newState = 
                block.blockState.setValue(BlockProperties.AGE_3, $Integer.valueOf(String(Math.min(state + 1, 3))))

            level.setBlockAndUpdate(block.pos, newState)
            composterSpawn(level, block)
            
            if (!player.creative) {
                player.mainHandItem.count--
            }
        }
    }
})