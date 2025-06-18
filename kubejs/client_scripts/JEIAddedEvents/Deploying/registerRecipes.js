JEIAddedEvents.registerRecipes(event => {

    let ripeningTypeId = new ResourceLocation('create', 'ripening')
    let recipeBuilder = event.custom(ripeningTypeId)
    
    //添加催熟配方
    Ingredient.of('#minecraft:small_flowers').itemIds.forEach(itemId => {
        recipeBuilder.add({
            input: Block.getBlock(itemId).defaultBlockState(),
            output: Item.of(itemId),
            dirtState: Blocks.GRASS_BLOCK.defaultBlockState() 
        })
    })

    Ingredient.of('#kubejs:corals').itemIds.forEach(itemId => {
        recipeBuilder.add({
            input: Block.getBlock(itemId).defaultBlockState(),
            output: Item.of(itemId),
            dirtState: Blocks.SAND.defaultBlockState() 
        })
    })

    recipeBuilder.add({
        input: Blocks.LILY_PAD.defaultBlockState(),
        output: Item.of('minecraft:lily_pad'),
        dirtState: Blocks.WATER.defaultBlockState() 
    })

    recipeBuilder.add({
        input: Blocks.SEA_PICKLE.defaultBlockState(),
        output: Item.of('minecraft:sea_pickle'),
        dirtState: Blocks.SAND.defaultBlockState() 
    })

    recipeBuilder.add({
        input: Blocks.SUGAR_CANE.defaultBlockState(),
        output: Item.of('minecraft:sugar_cane'),
        dirtState: Blocks.SAND.defaultBlockState() 
    })

    recipeBuilder.add({
        input: Blocks.NETHER_WART.defaultBlockState(),
        output: Item.of('minecraft:nether_wart'),
        dirtState: Blocks.SOUL_SAND.defaultBlockState()
    })
})