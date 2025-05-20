PlayerEvents.respawned(event => {

    const { player } = event

    //死亡惩罚
    player.potionEffects.add('minecraft:blindness', 20 * 5, 0, false, false)
    player.potionEffects.add('minecraft:hunger', 20 * 5, 0, false, false)
    player.setMaxHealth(player.maxHealth * 0.3)

    //死亡难度削减
    player.persistentData.mobKillCount = Math.floor(player.persistentData.mobKillCount * 0.75)
})