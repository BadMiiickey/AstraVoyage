JEIAddedEvents.registerRecipes(event => {

    const { data } = event
    const { jeiHelpers } = data

    let transmutatingTypeId = new ResourceLocation('create', 'transmutating')
    let recipeBuilder = event.custom(transmutatingTypeId)
    
    // 添加嬗变配方
    recipeBuilder.add({
        input: Item.of('minecraft:scute'),
        output: Item.of('quark:dragon_scale')
    })

    recipeBuilder.add({
        input: Item.of('minecraft:apple'),
        output: Item.of('minecraft:chorus_fruit')
    })

    recipeBuilder.add({
        input: Item.of('minecraft:sugar'),
        output: Item.of('minecraft:honeycomb')
    })
})