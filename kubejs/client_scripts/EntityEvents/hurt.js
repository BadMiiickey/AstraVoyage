EntityEvents.hurt(event => {
    
    const { entity } = event

    //玩家受伤事件
    if (entity.player) {
        if (global.methods.slotResult(entity, 'kubejs:guardian_shield')) {
            
            let slotsList = $CuriosApi.getCuriosInventory(entity).resolve().get()
            
            for (let i = 0; i < slotsList.getSlots(); i++) {
                if (slotsList.getEquippedCurios().getStackInSlot(i).id == 'kubejs:guardian_shield') {
                    
                    let target = slotsList.getEquippedCurios().getStackInSlot(i)
                    /** @type { number } */
                    let energy = target.nbt.Energy

                    //玩家佩戴守护之盾时受到致命伤害时播放不死图腾音效
                    if (
                        energy >= 72000
                        && !entity.deadOrDying
                    ) {
                        entity.playSound('minecraft:item.totem.use')
                    }
                    break
                }
            }
        }
    }
})