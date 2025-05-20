ItemEvents.canPickUp(event => {

    const { player, item } = event

    //非创造模式下未佩戴虚化手套时无法拾起创造系列物品
    if (!player.creative) {
        if (!global.slotResult(player, 'kubejs:phantom_glove').length) {
            if (item.id.includes('creative')) {
                player.setStatusMessage('§c创世之力岂能被凡人随意掌控!')
                event.cancel()
            }
        }
    }
})