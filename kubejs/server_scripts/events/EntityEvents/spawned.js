EntityEvents.spawned(event => {

    const { entity, server, level } = event

    var $LivingEntity = Java.loadClass('net.minecraft.world.entity.LivingEntity')

    const player = level.getNearestPlayer(entity, 128)

    //敌对生物生成事件
    if (
        entity.monster
        && entity instanceof $LivingEntity
    ) {
        //敌对生物强化
        let logscale = 15//对数缩放系数
        let timeFactor = 0.1//时间影响系数
        let upperHealth = 25 * entity.maxHealth//生命值上限

        player.persistentData.healthFromKills = 
            logscale * Math.log1p(player.persistentData.mobKillCount * 0.5)//玩家击杀数贡献
        player.persistentData.healthFromTime = 
            timeFactor * server.tickCount / (20 * 60 * 5)//时间贡献 => 每五分钟强化一次
        
        /** @type { number } */
        let ultimateHealth = 
            entity.maxHealth + player.persistentData.healthFromKills + player.persistentData.healthFromTime//最终生命值

        if (Math.min(ultimateHealth, upperHealth) >= entity.maxHealth) {
            entity.setMaxHealth(Math.min(ultimateHealth, upperHealth) * (Math.random() + 0.5))//生命值随机强化
            entity.setHealth(entity.maxHealth)//生命值回满
        }
    }

    //被动生物生成事件
        //禁用生物生成
        global.banedEntities.forEach(banedEntity => {
            if (entity.type == banedEntity) {
                event.cancel()
            }
        })
})