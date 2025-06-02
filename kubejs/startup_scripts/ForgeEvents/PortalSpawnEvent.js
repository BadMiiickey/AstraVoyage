ForgeEvents.onEvent($PortalSpawnEvent, /** @param { Internal.BlockEvent$PortalSpawnEvent } event */ event => {

    //禁用传送门生成
    event.setCanceled(true)
})