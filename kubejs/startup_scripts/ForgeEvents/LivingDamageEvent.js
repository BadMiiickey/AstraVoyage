ForgeEvents.onEvent($LivingDamageEvent, /** @param { Internal.LivingDamageEvent } event */ event => {
    
    const { entity, source } = event

    if (source == null) return

    //玩家伤害结算
        //玩家潜行获得伤害倍率加成
        if (source?.player?.crouching) {
            event.amount *= 1.75
            source.player.setStatusMessage('§a潜行攻击获得1.75x 伤害倍率加成!')
        }

        //玩家存储于记忆手链中的经验加成伤害
        if (
            source?.player
            && global.methods.slotResult(source?.player, 'kubejs:memory_bracelet')
        ) {
            let slotsList = $CuriosApi.getCuriosInventory(source.player).resolve().get()

            for (let i = 0; i < slotsList.getSlots(); i++) {
                if (slotsList.getEquippedCurios().getStackInSlot(i).id == 'kubejs:memory_bracelet') {
                    
                    let target = slotsList.getEquippedCurios().getStackInSlot(i)

                    event.amount *=  Math.log1p(target.nbt?.StoredXP / 15)
                    break
                }
            }
        }

        //玩家饱食度大于90%时获得1.25x伤害倍率
        if (source?.actual?.player) {
            if (source.player.foodData?.foodLevel >= 18) {
                event.amount *= 1.25
            }
        }

    //敌对生物伤害结算
        //亡灵生物着火或在岩浆中伤害加深
        global.definitionsArray.undeads.forEach(undead => {
            if (entity.type == undead) {
                if (
                    entity.inLava
                    || entity.onFire
                ) {
                    event.amount *= 2                
                }
            }
        })

        //敌对生物持有蛀蚀效果时伤害加深
        if (
            entity.monster
            && entity instanceof $LivingEntity
        ) {
            if (entity.potionEffects.getActive('kubejs:corrosion')) {
                
                let corrosionAmplifier = entity.potionEffects.getActive('kubejs:corrosion').amplifier

                event.amount *= (corrosionAmplifier + 2) * 0.6
            }
        }

    //全体生物伤害结算
        //弓箭爆头一击
        if (source?.immediate?.type == 'minecraft:arrow') {
            if (
                source.sourcePosition.y() >= (entity.eyeY - 0.17)
                && entity.headArmorItem.empty
            ) {
                if (source.actual.player) {
                    source.actual.setStatusMessage('§c爆头一击!')
                }
                
                //全体生物共享加成
                event.amount *= 2
            }
        }
})