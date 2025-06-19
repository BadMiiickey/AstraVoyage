JEIAddedEvents.registerCategories(event => {

    const { data } = event
    const { jeiHelpers } = data
    const { guiHelper } = jeiHelpers

    event.custom('create:crystallizing', category => {
        category.title('结晶')
        category.setWidth(178)
        category.setHeight(72)
        category.background(guiHelper.createBlankDrawable(0, 0))

        category.iconSupplier(() => {
            return new $DoubleItemIcon(
                () => Item.of('create:spout'),
                () => Item.of('minecraft:amethyst_shard')
            )
        })

        category.handleLookup((layoutBuilder, recipe, focuses) => {
            layoutBuilder.addSlot($RecipeIngredientRole.INPUT, 27, 51)
                .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
                .addItemStack(recipe.recipeData.input)
            layoutBuilder.addSlot($RecipeIngredientRole.INPUT, 27, 32)
                .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
                .addFluidStack('homeostatic:purified_water')
            layoutBuilder.addSlot($RecipeIngredientRole.OUTPUT, 132, 51)
                .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
                .addItemStack(recipe.recipeData.output)
        })

        category.setDrawHandler((recipe, recipeSlotsView, graphics, mouseX, mouseY) => {

            $AllGuiTextures.JEI_SHADOW.render(graphics, 62, 57)
            $AllGuiTextures.JEI_DOWN_ARROW.render(graphics, 126, 29)

            let matrixStack = graphics.pose()

            matrixStack.pushPose()
            matrixStack.translate(76, 22, 100)
            matrixStack.mulPose($Axis.XP.rotationDegrees(-15.5))
            matrixStack.mulPose($Axis.YP.rotationDegrees(22.5))

            $AnimatedKinetics.defaultBlockElement(Block.getBlock('create:spout').defaultBlockState())
                .scale(20.0)
                .render(graphics)

            let squeeze = 0
            let cycle = ($AnimationTickHolder.getRenderTime() - squeeze * 8) % 120
            let squeezeAnimationCycle = cycle % 30
            let stateIndex = Math.min(Math.floor((cycle - 5) / 30), 4)
            squeeze = squeezeAnimationCycle < 20 ? Math.sin(squeezeAnimationCycle / 20 * KMath.PI) : 0
            squeeze *= 20

            matrixStack.pushPose()

            $AnimatedKinetics["defaultBlockElement(dev.engine_room.flywheel.lib.model.baked.PartialModel)"]
                ($AllPartialModels.SPOUT_TOP)
                    .scale(20.0)
                    .render(graphics)

            matrixStack.translate(0, -3 * squeeze / 32, 0)

            $AnimatedKinetics["defaultBlockElement(dev.engine_room.flywheel.lib.model.baked.PartialModel)"]
                ($AllPartialModels.SPOUT_MIDDLE)
                    .scale(20.0)
                    .render(graphics)

            matrixStack.translate(0, -3 * squeeze / 32, 0)

            $AnimatedKinetics["defaultBlockElement(dev.engine_room.flywheel.lib.model.baked.PartialModel)"]
                ($AllPartialModels.SPOUT_BOTTOM)
                    .scale(20.0)
                    .render(graphics)

            matrixStack.translate(0, -3 * squeeze / 32, 0)

            matrixStack.popPose()

            $AnimatedKinetics.defaultBlockElement(recipe.recipeData.buddingState)
                .atLocal(0, 2, 0)
                .scale(20.0)
                .render(graphics)

            matrixStack.translate(0, -42, 24)
            $AnimatedKinetics.defaultBlockElement(recipe.recipeData.processingBudState[stateIndex])
                .atLocal(0, 4, 0)
                .scale(20.0)
                .render(graphics)
            
            matrixStack.translate(0, 42, -24)
            $AnimatedKinetics.DEFAULT_LIGHTING.applyLighting()
            
            let buffer = $MultiBufferSource.immediate($Tesselator.getInstance().getBuilder())

            matrixStack.pushPose()
            $UIRenderHelper.flipForGuiRender(matrixStack)
            matrixStack.scale(16, 16, 16)

            let from = 3 / 16
            let to = 17 / 16

            $ForgeCatnipServices.FLUID_RENDERER.renderFluidBox(
                Fluid.getType('homeostatic:purified_water').defaultFluidState(),
                from, from, from,
                to, to, to,
                graphics.bufferSource(), matrixStack,
                $LightTexture.FULL_BRIGHT, false, true
            )

            matrixStack.popPose()

            let width = 1 / 128 * squeeze

            matrixStack.translate(10, 30, 10)
            $UIRenderHelper.flipForGuiRender(matrixStack)
            matrixStack.scale(16, 16, 16)
            matrixStack.translate(-0.5, 0, -0.5)

            from = 0.5 - width / 2
            to = 0.5 + width / 2

            $ForgeCatnipServices.FLUID_RENDERER.renderFluidBox(
                Fluid.getType('homeostatic:purified_water').defaultFluidState(),
                from, 0, from,
                to, 2, to,
                graphics.bufferSource(), matrixStack,
                $LightTexture.FULL_BRIGHT, false, true
            )
            buffer.endBatch()
            $Lighting.setupFor3DItems()

            matrixStack.popPose()
        })
    })
})