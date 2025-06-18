JEIAddedEvents.registerCategories(event => {

    const { data } = event
    const { jeiHelpers } = data
    const { guiHelper } = jeiHelpers

    event.custom('create:ripening', category => {
        category.title('催熟')
        category.setWidth(178)
        category.setHeight(72)
        category.background(guiHelper.createBlankDrawable(0, 0))

        category.iconSupplier(() => {
            return new $DoubleItemIcon(
                () => Item.of('create:brass_hand'),
                () => Item.of('minecraft:bone_meal')
            )
        })

        category.handleLookup((layoutBuilder, recipe, focuses) => {
            layoutBuilder.addSlot($RecipeIngredientRole.INPUT, 34, 48)
                .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
                .addItemStack(Item.of('minecraft:bone_meal'))
            layoutBuilder.addSlot($RecipeIngredientRole.OUTPUT, 128, 48)
                .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
                .addItemStack(recipe.recipeData.output)
        })

        category.setDrawHandler((recipe, recipeSlotsView, graphics, mouseX, mouseY) => {

            $AllGuiTextures.JEI_SHADOW.render(graphics, 62, 52)
            $AllGuiTextures.JEI_DOWN_ARROW.render(graphics, 122, 28)

            let matrixStack = graphics.pose()

            matrixStack.pushPose()
            matrixStack.translate(35, 34, 100)
            matrixStack.mulPose($Axis.XP.rotationDegrees(-12.5))
            matrixStack.mulPose($Axis.YP.rotationDegrees(-15.5))

            let shaftState = Block.getBlock('create:shaft').defaultBlockState()
                .setValue(BlockProperties.AXIS, $DirectionAxis.Z)

            $AnimatedKinetics.defaultBlockElement(shaftState)
                .rotateBlock(0, 0, $AnimatedKinetics.getCurrentAngle())
                .scale(20.0)
                .render(graphics)

            let deployerState = Block.getBlock('create:deployer').defaultBlockState()
                .setValue($DeployerBlock.FACING, Direction.EAST)
                .setValue($DeployerBlock.AXIS_ALONG_FIRST_COORDINATE, $Boolean.FALSE)

            $AnimatedKinetics.defaultBlockElement(deployerState)
                .scale(20.0)
                .render(graphics)

            matrixStack.pushPose()

            let offset = 0
            let cycle = ($AnimationTickHolder.getRenderTime() - offset * 8) % 30
            offset = cycle < 10 ? cycle / 10 : cycle < 20 ? (20 - cycle) / 10 : 0
            
            matrixStack.translate(offset * 17, 0, 0)

            $AnimatedKinetics["defaultBlockElement(dev.engine_room.flywheel.lib.model.baked.PartialModel)"]
                ($AllPartialModels.DEPLOYER_POLE)
                    .rotateBlock(0, 90, 0)
                    .scale(20.0)
                    .render(graphics)

            $AnimatedKinetics["defaultBlockElement(dev.engine_room.flywheel.lib.model.baked.PartialModel)"]
                ($AllPartialModels.DEPLOYER_HAND_HOLDING)
                    .rotateBlock(0, 90, 0)
                    .scale(20.0)
                    .render(graphics)

            matrixStack.popPose()

            matrixStack.translate(75, -5, 100)
            $AnimatedKinetics.defaultBlockElement(recipe.recipeData.dirtState)
                .scale(20.0)
                .render(graphics)

            matrixStack.translate(11, -29, 0)
            $AnimatedKinetics.defaultBlockElement(recipe.recipeData.input)
                .atLocal(0.0, 0.0, 2.0)
                .scale(20.0)
                .render(graphics)

            matrixStack.popPose()
        })
    })
})