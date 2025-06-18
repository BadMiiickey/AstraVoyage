JEIAddedEvents.registerRecipeCatalysts(event => {

    const { data } = event
    const { jeiHelpers } = data

    let ripeningTypeId = new ResourceLocation('create', 'ripening')
    let recipeType = jeiHelpers.getRecipeType(ripeningTypeId).get()

    data["addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])"]
        (Item.of('create:deployer'), recipeType)
})