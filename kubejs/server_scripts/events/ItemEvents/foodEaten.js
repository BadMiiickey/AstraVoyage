ItemEvents.foodEaten(event => {

    const { item, player } = event

    //生食获得反胃 + 概率虚弱和中毒
    global.definitionsArray.rawMeets.forEach(meet => {
        if (item.id == meet) {
            player.potionEffects.add('minecraft:nausea', 20 * 15, 0, false, false)

            if (Math.random() <= 0.4) {
                player.potionEffects.add('minecraft:weakness', 20 * 10, 0, false, false)
                player.potionEffects.add('minecraft:poison', 20 * 10, 0, false, false)
            }
        }
    })
})