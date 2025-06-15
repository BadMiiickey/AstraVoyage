JEIAddedEvents.registerRecipeCatalysts(event => {

    const { data } = event
    const { jeiHelpers } = data

    let transmutatingTypeId = new ResourceLocation('create', 'transmutating')
    let recipeType = jeiHelpers.getRecipeType(transmutatingTypeId).get()

    data["addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])"]
        (Item.of('create:encased_fan').setHoverName('在嬗变龙血后放置鼓风机'), recipeType)
})