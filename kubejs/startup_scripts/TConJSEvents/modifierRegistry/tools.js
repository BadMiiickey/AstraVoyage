TConJSEvents.modifierRegistry(event => {

    //堕落 => 攻击时40%概率为敌人随机附加一种负面效果, 每级效果等级上限+1, 持续时间延长约80%
    event.createNew('kubejs:degenerate', builder => {
        builder.onAfterMeleeHit((view, level, context, damage) => {  
            
            let harmfulPotions = global.definitionsArray.harmfulPotionEffectsArray
            let length = harmfulPotions.length

            if (Math.random() <= 0.4) {
                context.livingTarget.potionEffects.add(
                    harmfulPotions[Math.floor(Math.random() * length)],
                    20 * (level ** 1.5),
                    Math.floor(Math.random() * level),
                    false, false
                )
            }
        })
    })

    //掠夺 => 攻击时掠夺敌人上的随机正面效果, 每级效果等级上限+1, 持续时间延长约80%
    event.createNew('kubejs:looting', builder => {
        builder.onAfterMeleeHit((view, level, context, damage) => {
            if (context.livingTarget.potionEffects.active.length > 0) {
                context.livingTarget.potionEffects.active.forEach(effect => {
                    if (effect.effect.beneficial) {
                        context.livingTarget.potionEffects.active.remove(effect)
                        context.playerAttacker.potionEffects.add(
                            effect.effect, 
                            20 * (level ** 1.5), 
                            Math.floor(Math.random() * level), 
                            false, false
                        )
                    }
                })
            }
        })
    })

    //逐光 => 当玩家位置光照强度大于等于7时, 每级光照强度和每级使伤害倍率增加20%
    event.createNew('kubejs:lightbane', builder => {
        builder.getMeleeDamage((view, level, context, baseDamage, finalDamage) => {
            if (context.attacker.block.light >= 7) {
                return finalDamage * (1 + (context.attacker.block.light - 7) * level * 0.2)
            }
        })
    })

    //炎灼 => 攻击时引爆敌人的灼烧效果, 每级伤害增加10%
    event.createNew('kubejs:burning', builder => {
        builder.onAfterMeleeHit((view, level, context, damage) => {
            if (context.livingTarget.onFire) {
                
                let fireSeconds = context.livingTarget.remainingFireTicks / 20
                let explodeDamage = fireSeconds * 2 * (1 + level * 0.1)

                view.item.defaultInstance.nbt?.tic_modifiers.forEach(modifier => {
                    switch (modifier.name) {
                        case 'tconstruct:scorching':
                            explodeDamage += modifier.level * 2
                            break
                        case 'tconstruct:conducting':
                            explodeDamage *= Math.min(1 + context.attacker.remainingFireTicks / 20 * 0.01, 1.3)
                            break
                    }
                })
                context.livingTarget.attack(explodeDamage)
            }
        })
    })

    //地缚 => 攻击时若脚下三格为泥土或草方块, 则给予敌人缓慢DeBuff, 每级增加缓慢等级
    event.createNew('kubejs:ground_binding', builder => {
        builder.onAfterMeleeHit((view, level, context, damage) => {
            for (let i = -3; i <= -1; i++) {
                if (
                    context.attacker.block.offset(0, i, 0).id == 'minecraft:dirt' || 
                    context.attacker.block.offset(0, i, 0).id == 'minecraft:grass_block'
                ) {
                    context.livingTarget.potionEffects.add(
                        'minecraft:slowness', 
                        20 * 1.5, 
                        level - 1, 
                        false, false
                    )
                    break
                }
            }
        })
    }) 
})