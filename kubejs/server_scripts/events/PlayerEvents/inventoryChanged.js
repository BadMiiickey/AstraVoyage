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

    //守护之盾NBT初始化 + 设置能量上限
    if (item.id == 'kubejs:guardian_shield') {
        if (item.nbt?.Energy == undefined) {
            item.setNbt({
                Energy: 0,
                MaxEnergy: 96000
            })
        }
        
        if (item.nbt.Energy >= 96000) {
            item.nbt.Energy = 96000
        }
    }
})