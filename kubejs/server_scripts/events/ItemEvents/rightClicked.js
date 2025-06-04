ItemEvents.rightClicked(event => {

    const { player, item, level, hand } = event

    if (hand != 'MAIN_HAND') return

    //物品事件          
        //末影珍珠
        if (item.id == 'minecraft:ender_pearl') {
            player.setStatusMessage('§c末影珍珠似乎失去了往日的力量')
            event.cancel()
        }
        
        //末影之眼
        if (item.id == 'minecraft:ender_eye') {
            player.setStatusMessage('§c末影之眼似乎失去了往日的力量')
            event.cancel()
        }

    //玩家事件

    /**
     * 
     * @param { BlockPos } pos
     */
    function isUnderRain(pos) {
        for (let i = 15; i >= 1; i--) {
            if (level.getBlock(pos).offset(0, i, 0).id != 'minecraft:air') return false
        }
        
        return true
    }

    //玩家雨天潜行仰头填充玻璃瓶或皮革水袋
    if (
        level.raining
        && player.pitch <= -75
        && player.crouching
        && isUnderRain(player.block.down.pos)
    ) {
        
        //纯净水瓶
        if (item.id == 'minecraft:glass_bottle') {
            if (item.count == 1) {
                player.inventory.setItem(player.selectedSlot, 'homeostatic:purified_water_bottle')
            } else {
                player.addItem('homeostatic:purified_water_bottle')
                item.count--
            }
        }

        //皮革水袋
        if (item.id == 'homeostatic:leather_flask') {

            /** @type { Internal.Tag } */
            let Fluid = item.nbt?.Fluid
            /** @type { string } */
            let FluidName = item.nbt?.Fluid?.FluidName
            /** @type { number } */
            let Amount = item.nbt?.Fluid?.Amount
            
            if (FluidName == 'homeostatic:purified_water') {
                item.nbt.Fluid.Amount = Math.min(Amount + 100, 1000)
                event.cancel()
            }
            
            if (Fluid == undefined) {
                item.nbt.Fluid = {
                    Amount: 100,
                    FluidName: 'homeostatic:purified_water'
                }
            }
        }
    }
    
    //玩家潜行倒空水袋
    if (
        item.id == 'homeostatic:leather_flask'
        && item.nbt.Fluid != undefined
        && player.crouching
        && player.rayTrace(5).block != null
    ) {
        item.nbt.remove('Fluid')
        level.spawnParticles(
            'minecraft:splash', false, 
            player.x, player.y + 0.5, player.z, 
            0.25, 0.25, 0.25, 
            20, 1
        )
        player.setStatusMessage('§a水袋已倒空')
        event.cancel()
    }

    /**
     * 
     * @param { Internal.Player } player 
     * @param { Internal.ItemStack } item 
     */
    function memoryBraceletCheck(player, item) {
        if (player.xp == 0) {
            player.setStatusMessage('§c当前经验为零!')
            return
        }

        if (item.nbt?.AutoStoredXP == false) {
            item.nbt.StoredXP += player.xp
            player.xp = 0
        }
    }

    //玩家右键存储经验至记忆手链中
    if (
        item.id == 'kubejs:memory_bracelet'
        && player.crouching
    ) {
        memoryBraceletCheck(player, item)
    }

    //玩家Shift+右键时隙腕璇记录坐标
    if (
        item.id == 'kubejs:phase_bracelet'
        && player.crouching
    ) {
        item.nbt.Coordinate.dimension = player.level.dimension.toString()
        item.nbt.Coordinate.x = Math.floor(player.x)
        item.nbt.Coordinate.y = Math.floor(player.y)
        item.nbt.Coordinate.z = Math.floor(player.z)
        player.setStatusMessage('§a已记录当前坐标')
    }

    //玩家手持空桶右键非流体源方块能够将桶装满并删除流体源

    /**
     * 
     * @param { Internal.BlockContainerJS } fluid 
     */
    function traceFluidSource(fluid) {

        let currentFluid = fluid
        
        for (let i = 1; i <= 1000; i++) {
            if (currentFluid.properties?.level == 0) return currentFluid
            for (let dx of [-1, 0, 1]) {
                for (let dz of [-1, 0, 1]) {
                    if (dx == 0 && dz == 0) continue

                    let nextFluid = currentFluid.offset(dx, 0, dz)

                    if (!nextFluid.properties?.level) continue
                    if (nextFluid.properties?.level == 0) return nextFluid
                    if (nextFluid.properties?.level == 8) {
                        currentFluid = nextFluid
                        break
                    }

                    if (nextFluid.properties?.level < currentFluid.properties?.level) {
                        currentFluid = nextFluid
                        break
                    }
                }
            }

            if (currentFluid.properties?.level == 8) {
                for (let dy = 1; dy <= 1000; dy++) {

                    let fluidAbove = currentFluid.offset(0, dy, 0)

                    if (fluidAbove.properties?.level == 0) return fluidAbove
                    if (fluidAbove.properties?.level != 8) {
                        currentFluid = fluidAbove
                        break
                    }
                }
            }
        }

        return currentFluid
    }

    if (
        item.id == 'minecraft:bucket'
        && player.rayTrace().block?.properties?.level
        && player.rayTrace().block?.properties?.level > 0
    ) {
        let fluidSource = traceFluidSource(player.rayTrace().block)
        let id = fluidSource.id
        
        if (fluidSource.properties?.level == 0) {
            id = id.endsWith('_fluid') ? id.replace('_fluid', '') : id
            fluidSource.set('minecraft:air')

            if (item.count == 1) {
                player.inventory.setItem(player.selectedSlot, `${id}_bucket`)
            } else {
                player.addItem(`${id}_bucket`)
                item.count--
            }
        }
    }
})