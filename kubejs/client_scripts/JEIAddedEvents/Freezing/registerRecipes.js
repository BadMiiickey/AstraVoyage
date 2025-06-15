JEIAddedEvents.registerRecipes(event => {

    const { data } = event
    const { jeiHelpers } = data

    let freezingTypeId = new ResourceLocation('create', 'freezing')
    let recipeBuilder = event.custom(freezingTypeId)
    
    // 添加冷冻配方
    recipeBuilder.add({
        input: Item.of('minecraft:water_bucket'),
        output: Item.of('minecraft:powder_snow_bucket')
    })
})