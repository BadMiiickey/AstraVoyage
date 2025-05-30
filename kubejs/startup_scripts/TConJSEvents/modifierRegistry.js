TConJSEvents.modifierRegistry(event => {

    //暗铁
        //工具 => 堕落
        event.createNew('degenerate', builder => {
            builder.onAfterMeleeHit((view, level, context, damage) => {  
                
                let length = global.harmfulPotionEffectsArray.length

                if (Math.random() <= 0.4) {
                    context.livingTarget.potionEffects.add(
                        global.definitionsArray.harmfulPotionEffectsArray[Math.floor(Math.random() * length)],
                        20 * (level ** 1.5),
                        Math.floor(Math.random() * level),
                        false, false
                    )
                }
            })
        })

        //盔甲 => 流疫
        event.createNew('disease', builder => {
            builder.onDamageDealt((view, level, context, slot, entity, source, damage) => {

                let length = global.definitionsArray.harmfulPotionEffectsArray.length

                if (source.actual instanceof $LivingEntity) {
                    if (Math.random() <= 0.4) {
                        source.actual.potionEffects.add(
                            global.definitionsArray.harmfulPotionEffectsArray[Math.floor(Math.random() * length)],
                            20 * (level ** 1.5),
                            Math.floor(Math.random() * level),
                            false, false
                        )
                    }
                }
            })
        })

    //岩核
        //工具 => 掠夺
        event.createNew('looting', builder => {
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

        //盔甲 => 吞噬
        event.createNew('looter', builder => {
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

    //紫金
        //工具 => 逐光
        event.createNew('lightbane', builder => {
            builder.getMeleeDamage((view, level, context, baseDamage, finalDamage) => {
                if (context.attacker.block.light >= 7) {
                    return finalDamage * (1 + (context.attacker.block.light - 7) * level * 0.2)
                }
            })
        })

        //盔甲 => 沐辉
        event.createNew('lightbather', builder => {
            builder.modifyDamageTaken((view, level, context, slot, source, damage) => {
                if (context.entity.block.light >= 7) {
                    return damage * (1 - (context.entity.block.light - 7) * level * 0.2)
                }
            })
        })
    
    //耐热金属
        //工具 => 炎灼
        event.createNew('burning', builder => {
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

        //盔甲 => 浴火
        event.createNew('fire_bathing', builder => {
            builder.canBlockAttacked((view, level, context, slot, source, damage) => {
                if (source.type().msgId() == 'inFire' || 'onfire') return false
            })
        })

    //花岗合金
        //工具 => 大地亲和
        event.createNew('earthbound', builder => {
            
        })
})