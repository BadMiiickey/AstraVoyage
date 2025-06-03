EntityEvents.death(event =>{ 

    const { source, entity } = event
    const { player } = source

    if (source.actual == null) return

    //玩家击杀怪物数量记录
    if (
        !entity.player
        && source?.actual?.player
    ) {
        if (!player.persistentData.mobKillCount) {
            player.persistentData.mobKillCount = 0
        }
        
        player.persistentData.mobKillCount++
    }

    //安魂指箍 => 30%概率击杀时降低杀戮值, 浮动1~3
    if (source?.actual?.player) {
        if (global.methods.slotResult(player, 'kubejs:requiem_ring')) {
            if (Math.random() <= 0.3) {
                player.persistentData.mobKillCount -= Math.floor(Math.random() * 3) + 1
                player.persistentData.mobKillCount = Math.max(player.persistentData.mobKillCount, 0)
            }
        }
    }
})