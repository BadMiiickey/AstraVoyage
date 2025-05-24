EntityEvents.hurt(event => {

    const { source, entity, level } = event
    const { actual, immediate } = source

    var $CuriosApi = Java.loadClass('top.theillusivec4.curios.api.CuriosApi')
    var $LivingEntity = Java.loadClass('net.minecraft.world.entity.LivingEntity')
    var $Minecraft = Java.loadClass('net.minecraft.client.Minecraft')

    if (source.actual == null) return

    //玩家受伤事件
    if (entity.player) {
        
        //守护之盾 => 吸收爬行者部分爆炸伤害和箭矢伤害并转化为能量, 受击时自动释放护盾格挡
        //检测是否佩戴守护之盾
        if (global.methods.slotResult(entity, 'kubejs:guardian_shield')) {
            
            let slotsList = $CuriosApi.getCuriosInventory(entity).resolve().get()
            
            for (let i = 0; i < slotsList.getSlots(); i++) {
                if (slotsList.getEquippedCurios().getStackInSlot(i).id == 'kubejs:guardian_shield') {
                    
                    let target = slotsList.getEquippedCurios().getStackInSlot(i)

                    //玩家佩戴守护之盾时吸收爆炸伤害和箭矢伤害
                    if (target.nbt.Energy <= 96000) {
                        if (immediate?.type == 'minecraft:arrow') {
                            entity.heal(event.damage * 0.3)
                            target.nbt.Energy = 
                                Math.floor(target.nbt.Energy + Math.pow(event.damage * 0.3 * 480000, 1 / 2))
                        }
    
                        if (entity.damageSources().explosion(actual, immediate).type().msgId() == 'explosion.player') {
                            entity.heal(event.damage * 0.3)
                            target.nbt.Energy = 
                                Math.floor(target.nbt.Energy + Math.pow(event.damage * 0.3 * 960000, 1 / 3))
                        }
                    }

                    //玩家佩戴守护之盾时受到致命伤害时扣除48000FE抵消本次伤害
                    if (
                        target.nbt.Energy >= 48000
                        && !entity.deadOrDying
                    ) {
                        target.nbt.Energy -= 48000
                        $Minecraft.getInstance().gameRenderer.displayItemActivation(target)
                        level.spawnParticles(
                            'minecraft:totem_of_undying', false,
                            entity.x, entity.y + 0.75, entity.z,
                            0, 0, 0,
                            20, 0
                        )
                        event.cancel()
                    } 
                    break
                }
            }
        }
        
        //检测是否佩戴冷冻核心
        if (global.methods.slotResult(entity, 'kubejs:freezing_core')) {

            //玩家佩戴冷冻核心时免疫灼烧
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
                entity.potionEffects.add(
                    global.definitionsArray.beneficialPotionEffectsArray[
                        Math.floor(Math.random() * global.definitionsArray.beneficialPotionEffectsArray.length)
                    ],
                    20 * 20,
                    Math.floor(Math.random() * 1.25),
                    false, false
                )
            }
        }

        //非亡灵生物生命值降至阈值获得DeBuff
        if (!entity.player) {
            global.definitionsArray.undeads.forEach(undead => {
                if (entity.type == undead) {
                    if (entity.health <= entity.maxHealth * 0.15) {
                        entity.potionEffects.add('minecraft:slowness', 20 * 3, 2, false, false)
                        entity.potionEffects.add('minecraft:weakness', 20 * 3, 2, false, false)
                    } else if (entity.health <= entity.maxHealth * 0.5) {
                        entity.potionEffects.add('minecraft:slowness', 20 * 3, 0, false, false)
                        entity.potionEffects.add('minecraft:weakness', 20 * 3, 0, false, false)
                    }
                }
            })
        }

        //持有嗜血效果的敌对生物攻击其他活体生物时获得生命值
        if (actual instanceof $LivingEntity) {
            if (actual.potionEffects.getActive('kubejs:bloodthirsty')) {
                actual.heal(entity.lastHurt * 10)
            }    
        }

        //受到佩戴有冷冻核心的玩家攻击时获得冰冻DeBuff
        if (
            entity.monster
            && actual?.player
        ) {
            if (global.methods.slotResult(actual, 'kubejs:freezing_core')) {
                entity.ticksFrozen = 200
            }
        }
})