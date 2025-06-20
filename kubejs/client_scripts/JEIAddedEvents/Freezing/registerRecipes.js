JEIAddedEvents.registerRecipes(event => {

    let freezingTypeId = new ResourceLocation('create', 'freezing')
    let recipeBuilder = event.custom(freezingTypeId)
    
    // 添加冷冻配方
    recipeBuilder.add({
        input: Item.of('minecraft:water_bucket'),
        output: Item.of('minecraft:powder_snow_bucket')
    })

    recipeBuilder.add({
        input: Item.of('minecraft:ice'),
        output: Item.of('minecraft:blue_ice')
    })
})