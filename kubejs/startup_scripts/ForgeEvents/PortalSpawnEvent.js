ForgeEvents.onEvent('net.minecraftforge.event.level.BlockEvent$PortalSpawnEvent', event => {

    //禁用传送门生成
    event.setCanceled(true)
})