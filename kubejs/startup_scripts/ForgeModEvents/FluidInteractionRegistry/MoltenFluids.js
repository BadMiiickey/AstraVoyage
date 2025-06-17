ForgeModEvents.onEvent('net.minecraftforge.fml.event.lifecycle.FMLCommonSetupEvent', event => {

    var $FluidInteractionRegistry = Java.loadClass('net.minecraftforge.fluids.FluidInteractionRegistry')
    var $InteractionInformation = Java.loadClass('net.minecraftforge.fluids.FluidInteractionRegistry$InteractionInformation')
    var $HasFluidInteraction = Java.loadClass('net.minecraftforge.fluids.FluidInteractionRegistry$HasFluidInteraction')
    var $FluidInteraction = Java.loadClass('net.minecraftforge.fluids.FluidInteractionRegistry$FluidInteraction')
    var $Context = Java.loadClass('dev.latvian.mods.rhino.Context')
    var $KubeJS = Java.loadClass('dev.latvian.mods.kubejs.KubeJS')

    const FluidInteractionLib = {

        information: {
            coolingFluid: [
                'minecraft:water',
                'homeostatic:purified_water',
                'kubejs:nuclear_waste',
                'kubejs:acid',
                'kubejs:aluminate_solution',
                'ad_astra:cryo_fuel'
            ],
        
            mayBelongsMod: [
                'minecraft',
                'kubejs',
                'tconstruct',
                'create',
                'createaddition',
                'createnuclear',
                'createutilities',
                'ad_astra'
            ]
        },

        basicMethods: {

            /**
             * 
             * @param { Internal.Level } level 
             * @param { BlockPos } currentPos 
             * @param { string } interactFluid
             */
            hasFluidInteraction(level, currentPos, interactFluid) {
                for (let d of [-1, 1]) {
                    if (
                        level.getBlock(currentPos).offset(d, 0, 0).id == interactFluid
                        || level.getBlock(currentPos).offset(0, d, 0).id == interactFluid
                        || level.getBlock(currentPos).offset(0, 0, d).id == interactFluid
                    ) return true
                }

                return false
            },

            /**
             * 
             * @param { Internal.FluidType } fluidType 
             * @param { (level: Internal.Level, currentPos: BlockPos, relativePos: BlockPos, currentState: Internal.FluidState) => boolean } hasFluidInteraction 
             * @param { (level: Internal.Level, currentPos: BlockPos, relativePos: BlockPos, currentState: Internal.FluidState) => void } fluidInteraction 
             */
            addInteraction(fluidType, hasFluidInteraction, fluidInteraction) {

                let context = $KubeJS.getStartupScriptManager().context
                let constructor = new $InteractionInformation(
                    $Context.jsToJava(context, hasFluidInteraction, $HasFluidInteraction),
                    $Context.jsToJava(context, fluidInteraction, $FluidInteraction)
                )

                $FluidInteractionRegistry.addInteraction(fluidType, constructor)
            }
        }
    }

    const moltenFluidInteract = {

        /**
         * 
         * @param { Internal.Level } level 
         * @param { BlockPos } currentPos
         * @param { Internal.FluidState } currentState
         * @param { ResourceLocation_ } sourceTransferToBlock 
         * @param { ResourceLocation_ } flowingTransferToBlock 
         */
        fluidInteraction(level, currentPos, currentState, sourceTransferToBlock, flowingTransferToBlock) {

            let sourceTransferToBlockState = Block.getBlock(sourceTransferToBlock).defaultBlockState()
            let flowingTransferToBlockState = Block.getBlock(flowingTransferToBlock).defaultBlockState()
            let blockState = currentState.source ? sourceTransferToBlockState : flowingTransferToBlockState
            let source = global.methods.traceFluidSource(level.getBlock(currentPos))

            level.setBlockAndUpdate(currentPos, blockState)
            level.levelEvent(1501, currentPos, 0)
            source.set('minecraft:air')
        },

        /**
         * 
         * @param { ResourceLocation_ } fluid
         * @param { string } interactFluid 
         * @param { ResourceLocation_ } sourceTransferToBlock 
         * @param { ResourceLocation_ } flowingTransferToBlock 
         */
        create(fluid, interactFluid, sourceTransferToBlock, flowingTransferToBlock) {
            FluidInteractionLib.basicMethods.addInteraction(
                Fluid.getType(fluid).fluidType,
                (level, currentPos, relativePos, currentState) => {
                    return FluidInteractionLib.basicMethods.hasFluidInteraction(level, currentPos, interactFluid)
                },
                (level, currentPos, relativePos, currentState) => {
                    this.fluidInteraction(level, currentPos, currentState, sourceTransferToBlock, flowingTransferToBlock)
                }
            )
        }
    }

    //熔融流体交互事件
    Fluid.getTypes().forEach(fluid => {
        FluidInteractionLib.information.coolingFluid.forEach(interactFluid => {
            if (
                fluid.startsWith('tconstruct:molten_')
                || fluid.startsWith('kubejs:molten_')
            ) {
                let materialName = fluid.replace('tconstruct:molten_', '').replace('kubejs:molten_', '')
                
                FluidInteractionLib.information.mayBelongsMod.forEach(mod => {
                    if (!Item.of(`${ mod }:${ materialName }_block`).empty) {

                        let transferBlock = `${ mod }:${ materialName }_block`

                        moltenFluidInteract.create(fluid, interactFluid, transferBlock, transferBlock)
                    }
                })
            }
        })
    })
})