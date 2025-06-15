JEIAddedEvents.registerRecipeCatalysts(event => {

    const { data } = event
    const { jeiHelpers } = data

    let freezingTypeId = new ResourceLocation('create', 'freezing')
    let recipeType = jeiHelpers.getRecipeType(freezingTypeId).get()

    data["addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])"]
        (Item.of('create:encased_fan').setHoverName('在雪后放置鼓风机'), recipeType)
})