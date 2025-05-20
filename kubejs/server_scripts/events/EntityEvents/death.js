EntityEvents.death(event =>{ 

    const { source, entity } = event
    const { player } = source

    if (source.actual == null) return

    //玩家击杀怪物数量记录
    if (
        !entity.player
        && source.actual.player
    ) {
        if (!player.persistentData.mobKillCount) {
            player.persistentData.mobKillCount = 0
        }
        
        player.persistentData.mobKillCount++
    }
})