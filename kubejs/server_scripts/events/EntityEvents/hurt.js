EntityEvents.hurt(event => {

    const { source, entity } = event
    const { actual } = source

    if (source.actual != null) {

        //玩家受伤事件
        if (entity.player) {
            
            //寒霜芯核 => 佩戴时免疫灼烧
            if (global.methods.slotResult(entity, 'kubejs:freezing_core')) {
                if (source.type().msgId() == 'inFire' || 'onFire') {
                    event.cancel()
                }
            }

            //下界骷髅附加凋零效果
            if (
                source.actual.type == 'minecraft:skeleton'
                && source.immediate.type == 'minecraft:arrow'
                && entity.level.dimension.toString() == 'minecraft:the_nether'
            ) {
                entity.potionEffects.add('minecraft:wither', 20 * 2, 0, false, false)
            }
        }
            
        if (entity.monster && actual == null) return

        //敌对生物事件
        //受到来自玩家的伤害概率获得Buff
        if (
            entity.monster
            && actual?.player
        ) {
            if (Math.random() <= 0.5) {

                let potionEffect = global.definitionsArray.beneficialPotionEffectsArray
                let length = potionEffect.length

                entity.potionEffects.add(
                    potionEffect[Math.floor(Math.random() * length)],
                    20 * 20,
                    Math.floor(Math.random() * 1.25),
                    false, false
                )
            }
        }

        //非亡灵生物生命值降至阈值获得DeBuff
        if (!entity.player) {
            if (entity.undead) {
                if (entity.health <= entity.maxHealth * 0.15) {
                    entity.potionEffects.add('minecraft:slowness', 20 * 3, 2, false, false)
                    entity.potionEffects.add('minecraft:weakness', 20 * 3, 2, false, false)
                } else if (entity.health <= entity.maxHealth * 0.5) {
                    entity.potionEffects.add('minecraft:slowness', 20 * 3, 0, false, false)
                    entity.potionEffects.add('minecraft:weakness', 20 * 3, 0, false, false)
                }
            }
        }

        //持有嗜血效果的敌对生物攻击其他活体生物时获得生命值
        if (actual instanceof $LivingEntity) {
            if (actual.potionEffects.getActive('kubejs:bloodthirsty')) {
                actual.heal(entity.lastHurt * 10)
            }    
        }

        //寒霜芯核 => 佩戴时使被攻击的敌对生物获得冰冻DeBuff
        if (
            entity.monster
            && actual?.player
        ) {
            if (global.methods.slotResult(actual, 'kubejs:freezing_core')) {
                entity.ticksFrozen = global.methods.frozenSeconds(3)
            }
        }

        //恶业之戒 => 佩戴时吸取攻击伤害的10%用于回复生命值
        if (actual?.player) {
            if (global.methods.slotResult(actual, 'kubejs:evil_ring')) {
                source.player.heal(entity.lastHurt * 0.1)
            }
        }

        //惊霆裂爪 => 佩戴时30%的概率召唤雷霆攻击该生物
        if (
            entity.monster
            && actual?.player
        ) {
            if (global.methods.slotResult(actual, 'kubejs:lightning_claw')) {
                if (Math.random() <= 0.3) {
                    
                    let thunder = entity.level.createEntity('minecraft:lightning_bolt')

                    thunder.setPos(entity.block.pos)
                    thunder.spawn()
                }
            }
        }
    }
})