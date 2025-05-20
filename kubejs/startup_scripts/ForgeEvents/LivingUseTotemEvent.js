ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingUseTotemEvent', event => {

    const { entity, totem } = event

    //玩家死亡禁用不死图腾
    if (entity.player) {
        
        if (totem.id == 'minecraft:totem_of_undying') {
            event.setCanceled(true)
        }
    }
})