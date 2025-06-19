JEIAddedEvents.registerRecipeCatalysts(event => {

    const { data } = event
    const { jeiHelpers } = data

    let crystallizingTypeId = new ResourceLocation('create', 'crystallizing')
    let recipeType = jeiHelpers.getRecipeType(crystallizingTypeId).get()

    data["addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])"]
        (Item.of('create:spout'), recipeType)
})