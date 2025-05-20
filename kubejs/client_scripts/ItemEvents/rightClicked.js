ItemEvents.rightClicked(event => {

    const { player } = event
    
    //声音播放
        //玩家潜行倒空水袋
        if (
            player.mainHandItem.id == 'homeostatic:leather_flask'
            && player.mainHandItem.nbt.Fluid != undefined
            && player.crouching
            && player.rayTrace(5).block != null
        ) {
            player.playSound('minecraft:item.bucket.empty')
        }
})