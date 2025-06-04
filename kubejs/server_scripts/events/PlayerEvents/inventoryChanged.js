PlayerEvents.inventoryChanged(event => {

    const { item } = event

    //记忆手链NBT初始化
    if (
        item.id == 'kubejs:memory_bracelet'
        && item.nbt?.AutoStoredXP == undefined
    ) {
        item.setNbt({
            AutoStoredXP: false,
            StoredXP: 0
        })
    }

    //时隙腕璇NBT初始化
    if (
        item.id == 'kubejs:phase_bracelet'
        && item.nbt?.Coordinate == undefined
    ) {
        item.setNbt({
            Coordinate: {},
            hasTeleport: false
        })
    }
})