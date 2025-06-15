ForgeModEvents.onEvent('net.minecraftforge.fml.event.lifecycle.FMLCommonSetupEvent', event => {

    var $AllFanProcessingTypes = Java.loadClass('com.simibubi.create.content.kinetics.fan.processing.AllFanProcessingTypes')
    var $FanProcessingType = Java.loadClass('com.simibubi.create.content.kinetics.fan.processing.FanProcessingType')
    var $ParticleTypes = Java.loadClass('net.minecraft.core.particles.ParticleTypes')
    var $LivingEntity = Java.loadClass('net.minecraft.world.entity.LivingEntity')
    var $ItemStack = Java.loadClass('net.minecraft.world.item.ItemStack')
    var $ArrayList = Java.loadClass('java.util.ArrayList')
    var $Context = Java.loadClass('dev.latvian.mods.rhino.Context')
    var $KubeJS = Java.loadClass('dev.latvian.mods.kubejs.KubeJS')

    let context = $KubeJS.getStartupScriptManager().context

    const transmutatingRecipes = {
        'minecraft:scute': 'quark:dragon_scale',
        'minecraft:apple': 'minecraft:chorus_fruit',
        'minecraft:sugar': 'minecraft:honeycomb'
    }

    const transmutatingTypeImplementation = {

        /**
         * 
         * @param { Internal.Level } level 
         * @param { BlockPos } pos 
         */
        isValidAt(level, pos) {
            if (!level || !pos) return false
            return level.getBlockState(pos).block.id === 'kubejs:dragon_blood'
        },

        getPriority() {
            return 450
        },

        /**
         * 
         * @param { Internal.ItemStack } stack 
         * @param { Internal.Level } level 
         */
        canProcess(stack, level) {
            if (!stack || !level) return false
            if (transmutatingRecipes[stack.id]) return true
            return false
        },

        /**
         * 
         * @param { Internal.ItemStack } stack 
         * @param { Internal.Level } level 
         */
        process(stack, level) {
            if (!stack || !level) return null

            let itemId = stack.id
            let resultId = transmutatingRecipes[itemId]
            
            if (!resultId) return null

            let result = Item.getItem(resultId)
            let arrayList = new $ArrayList()
            
            arrayList.add(new $ItemStack(result, stack.count))

            return arrayList
        },

        /**
         * 
         * @param { Internal.Level } level 
         * @param { net.minecraft.world.phys.Vec3 } pos 
         */
        spawnProcessingParticles(level, pos) {
            if (!level || !pos) return
            if (!level.random) return
                
            let x = typeof pos.x === 'number' ? pos.x : 0
            let y = typeof pos.y === 'number' ? pos.y : 0
            let z = typeof pos.z === 'number' ? pos.z : 0
            
            if (level.random.nextInt(5) == 0) {
                level.addParticle(
                    $ParticleTypes.DRAGON_BREATH, 
                    x + (level.random.nextFloat() - 0.5) * 0.5, 
                    y + 0.1, 
                    z + (level.random.nextFloat() - 0.5) * 0.5, 
                    0.0, 0.02, 0.0
                )
            }
        },

        /**
         * 
         * @param { Internal.FanProcessingType$AirFlowParticleAccess } particleAccess
         * @param { Internal.RandomSource } random 
         */
        morphAirFlow(particleAccess, random) {
            if (!particleAccess || !random) return

            particleAccess.setColor(0xb277f8)
            particleAccess.setAlpha(0.75)
            
            if (random.nextFloat() < 0.04) {
                particleAccess.spawnExtraParticle($ParticleTypes.DRAGON_BREATH, 0.2)
            }
        },

        /**
         * 
         * @param { Internal.Entity } entity 
         * @param { Internal.Level } level 
         */
        affectEntity(entity, level) {
            if (!entity || !level) return

            if (
                !level.clientSide
                && entity.alive
                && entity instanceof $LivingEntity
            ) {
                entity.attack(entity.damageSources().magic(), 1.0)
            }
        }
    }

    /** @type { Internal.FanProcessingType } */
    let transmutatingType = $Context.jsToJava(context, transmutatingTypeImplementation, $FanProcessingType)

    $AllFanProcessingTypes.register('transmutating', transmutatingType)
})