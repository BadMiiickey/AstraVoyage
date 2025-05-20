ItemEvents.rightClicked(event => {

    const { player, item, level } = event

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

        //玩家右键存储经验至记忆手链中
        if (
            item.id == 'kubejs:memory_bracelet'
            && player.crouching
        ) {
            if (player.xp == 0) {
                player.setStatusMessage('§c当前经验为零!')
            } else {
                if (item.nbt?.AutoStoredXP == false) {
                    if (item.nbt?.StoredXP == undefined) {
                        item.nbt.StoredXP = player.xp
                    } else {
                        item.nbt.StoredXP += player.xp
                    }
                    
                    player.xp = 0
                }
            }
        }
})