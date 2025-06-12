JEIAddedEvents.registerCategories(event => {

    const { data } = event
    const { jeiHelpers } = data
    const { guiHelper } = jeiHelpers

    event.custom('create:freezing', builder => {
        builder.title('批量冷冻')
        builder.iconSupplier(() => {
            return new $DoubleItemIcon(
                () => Item.of('create:propeller'),
                () => Item.of('minecraft:powder_snow_bucket')
            )
        })
        builder.setWidth(178)
        builder.setHeight(72)
        builder.background(guiHelper.createBlankDrawable(0, 0))
        builder.setSetRecipeHandler((layoutBuilder, recipe, focuses) => {
            layoutBuilder.addSlot($RecipeIngredientRole.INPUT, 21, 48)
                .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
                .addItemStack(recipe.recipeData.input)

            layoutBuilder.addSlot($RecipeIngredientRole.OUTPUT, 141, 48)
                .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
                .addItemStack(recipe.recipeData.output)
        })

        builder.setDrawHandler((recipe, recipeSlotsView, graphics, mouseX, mouseY) => {

            $AllGuiTextures.JEI_SHADOW.render(graphics, 46, 29)
            $AllGuiTextures.JEI_SHADOW.render(graphics, 65, 39)
            $AllGuiTextures.JEI_LONG_ARROW.render(graphics, 54, 51)

            let matrixStack = graphics.pose()

            matrixStack.pushPose()
            matrixStack.translate(56, 33, 0)
            matrixStack.mulPose($Axis.XP.rotationDegrees(-12.5))
            matrixStack.mulPose($Axis.YP.rotationDegrees(22.5))

            $AnimatedKinetics["defaultBlockElement(dev.engine_room.flywheel.lib.model.baked.PartialModel)"]
                ($AllPartialModels.ENCASED_FAN_INNER)
                    .rotateBlock(180, 0, $AnimatedKinetics.getCurrentAngle() * 16)
                    .scale(24.0)
                    .render(graphics)

            $AnimatedKinetics.defaultBlockElement(Block.getBlock('create:encased_fan').defaultBlockState())
                .rotateBlock(0, 180, 0)
                .atLocal(0.0, 0.0, 0.0)
                .scale(24.0)
                .render(graphics)

            let snowState = Block.getBlock('minecraft:snow').defaultBlockState()
                .setValue(BlockProperties.LAYERS, $Integer.valueOf(String(5)))

            $AnimatedKinetics.defaultBlockElement(snowState)
                .rotateBlock(0, 180, 0)
                .atLocal(0.0, 0.0, 2.0)
                .scale(24.0)
                .render(graphics)

            matrixStack.popPose()
        })
    })
})