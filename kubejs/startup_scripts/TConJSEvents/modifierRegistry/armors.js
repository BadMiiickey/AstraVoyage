TConJSEvents.modifierRegistry(event => {

    //流疫 => 受击时40%概率为敌人随机附加一种负面效果, 每级效果等级上限+1, 持续时间延长约80%
    event.createNew('kubejs:disease', builder => {
        builder.onDamageDealt((view, level, context, slot, entity, source, damage) => {

            let harmfulPotions = global.definitionsArray.harmfulPotionEffectsArray
            let length = harmfulPotions.length

            if (source.actual instanceof $LivingEntity) {
                if (Math.random() <= 0.4) {
                    source.actual.potionEffects.add(
                        harmfulPotions[Math.floor(Math.random() * length)],
                        20 * (level ** 1.5),
                        Math.floor(Math.random() * level),
                        false, false
                    )
                }
            }
        })
    })

    //吞噬 => 受击时掠夺敌人上的随机正面效果, 每级效果等级上限+1, 持续时间延长约80%
    event.createNew('kubejs:looter', builder => {
        builder.onDamageDealt((view, level, context, slot, entity, source, damage) => {
            if (source.actual instanceof $LivingEntity) {
                if (source.actual.potionEffects.active.length > 0) {
                    source.actual.potionEffects.active.forEach(effect => {
                        if (effect.effect.beneficial) {
                            source.actual.potionEffects.active.remove(effect)
                            entity.potionEffects.add(
                                effect.effect, 
                                20 * (level ** 1.5), 
                                Math.floor(Math.random() * level), 
                                false, false
                            )
                        }
                    })
                }
            }
        })
    })

    //沐辉 => 当玩家位置光照强度大于等于7时, 每级光照强度和每级使减伤倍率增加20%
    event.createNew('kubejs:lightbather', builder => {
        builder.modifyDamageTaken((view, level, context, slot, source, damage) => {
            if (context.entity.block.light >= 7) {
                return damage * (1 - (context.entity.block.light - 7) * level * 0.2)
            }
        })
    })

    //浴火 => 免疫灼烧伤害
    event.createNew('kubejs:fire_bathing', builder => {
        builder.canBlockAttacked((view, level, context, slot, source, damage) => {
            if (source.type().msgId() == 'inFire' || 'onfire') return false
        })
    })

    //缓冲 => 每级降低10%摔落伤害
    event.createNew('kubejs:buffer', builder => {
        builder.armorTakeAttacked((view, level, context, slot, source, damage) => {
            if (source.type().msgId() == 'fall') {
                return damage * (1 - 0.1 * level)
            }
        })
    })
})