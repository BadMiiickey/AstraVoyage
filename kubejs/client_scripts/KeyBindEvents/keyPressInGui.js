KeyBindEvents.keyPressInGui('memoryBraceletMode', event => {
    
    const { player } = event

    let slotsList = $CuriosApi.getCuriosInventory(player).resolve().get()

    player.inventory.allItems.forEach(item => {
        if (item.id == 'kubejs:memory_bracelet') {
            item.nbt.AutoStoredXP = !item.nbt?.AutoStoredXP
            player.sendData('autoMode', { AutoStoredXP: item.nbt?.AutoStoredXP })
        }
    })

    for (let i = 0; i < slotsList.getSlots(); i++) {
        if (slotsList.getEquippedCurios().getStackInSlot(i).id == 'kubejs:memory_bracelet') {
            
            let target = slotsList.getEquippedCurios().getStackInSlot(i)

            target.nbt.AutoStoredXP = !target.nbt?.AutoStoredXP
            player.sendData('autoMode', { AutoStoredXP: target.nbt?.AutoStoredXP })
            break
        }
    }
})