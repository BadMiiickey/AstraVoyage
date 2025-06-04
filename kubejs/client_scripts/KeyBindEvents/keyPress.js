KeyBindEvents.keyPress('phaseBraceletMode', event => {

    const { player } = event

    let slotsList = $CuriosApi.getCuriosInventory(player).resolve().get()

    for (let i = 0; i < slotsList.getSlots(); i++) {
        if (slotsList.getEquippedCurios().getStackInSlot(i).id == 'kubejs:phase_bracelet') {
            
            let target = slotsList.getEquippedCurios().getStackInSlot(i)

            target.nbt.hasTeleport = !target.nbt?.hasTeleport
            player.sendData('teleportMode', { hasTeleport: target.nbt?.hasTeleport })
            player.sendData('teleportMessage', { hasSentTeleportMessage: false })
            break
        }
    }
})