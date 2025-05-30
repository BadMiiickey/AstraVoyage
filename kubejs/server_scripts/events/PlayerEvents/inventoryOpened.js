PlayerEvents.inventoryOpened(event => {

    const { player, inventoryContainer } = event

    if (inventoryContainer instanceof $NasaWorkbenchMenu) {
        player.sendData('openNasaWorkbench')
    }
})