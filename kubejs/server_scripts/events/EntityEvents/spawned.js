EntityEvents.spawned(event => {

    const { entity, server, level } = event

    const player = level.getNearestPlayer(entity, 128)

    //敌对生物生成事件
    if (
        entity.monster
        && entity instanceof $LivingEntity
    ) {
        //敌对生物强化
        let logscale = 15
        let timeFactor = 0.1
        let upperHealth = 25 * entity.maxHealth

        player.persistentData.healthFromKills = 
            logscale * Math.log1p(player.persistentData.mobKillCount * 0.5)
        player.persistentData.healthFromTime = 
            timeFactor * server.tickCount / (20 * 60 * 5)
        
        let ultimateHealth = 
            entity.maxHealth + player.persistentData.healthFromKills + player.persistentData.healthFromTime

        if (Math.min(ultimateHealth, upperHealth) >= entity.maxHealth) {
            entity.setMaxHealth(Math.min(ultimateHealth, upperHealth) * (Math.random() + 0.5))
            entity.setHealth(entity.maxHealth)
        }
    }

    //被动生物生成事件
    //禁用生物生成
    global.definitionsArray.banedEntities.forEach(banedEntity => {
        if (entity.type == banedEntity) {
            event.cancel()
        }
    })
})