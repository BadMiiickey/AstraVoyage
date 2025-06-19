JEIAddedEvents.registerRecipes(event => {

    let crystallizingTypeId = new ResourceLocation('create', 'crystallizing')
    let recipeBuilder = event.custom(crystallizingTypeId)
    
    //添加结晶配方
    recipeBuilder.add({
        input: Item.of('minecraft:budding_amethyst'),
        output: Item.of('minecraft:amethyst_shard', 3),
        buddingState: Blocks.BUDDING_AMETHYST.defaultBlockState(),
        processingBudState: [
            Blocks.AIR.defaultBlockState(),
            Blocks.SMALL_AMETHYST_BUD.defaultBlockState()
                .setValue(BlockProperties.FACING, Direction.SOUTH),
            Blocks.MEDIUM_AMETHYST_BUD.defaultBlockState()
                .setValue(BlockProperties.FACING, Direction.SOUTH),
            Blocks.LARGE_AMETHYST_BUD.defaultBlockState()
                .setValue(BlockProperties.FACING, Direction.SOUTH),
            Blocks.AMETHYST_CLUSTER.defaultBlockState()
                .setValue(BlockProperties.FACING, Direction.SOUTH)
        ]
    })

    recipeBuilder.add({
        input: Item.of('tconstruct:budding_earth_slime_crystal'),
        output: Item.of('tconstruct:earth_slime_crystal', 3),
        buddingState: Block.getBlock('tconstruct:budding_earth_slime_crystal').defaultBlockState(),
        processingBudState: [
            Blocks.AIR.defaultBlockState(),
            Block.getBlock('tconstruct:small_earth_slime_crystal_bud').defaultBlockState()
                .setValue(BlockProperties.FACING, Direction.SOUTH),
            Block.getBlock('tconstruct:medium_earth_slime_crystal_bud').defaultBlockState()
                .setValue(BlockProperties.FACING, Direction.SOUTH),
            Block.getBlock('tconstruct:large_earth_slime_crystal_bud').defaultBlockState()
                .setValue(BlockProperties.FACING, Direction.SOUTH),
            Block.getBlock('tconstruct:earth_slime_crystal_cluster').defaultBlockState()
                .setValue(BlockProperties.FACING, Direction.SOUTH)
        ]
    })

    recipeBuilder.add({
        input: Item.of('tconstruct:budding_sky_slime_crystal'),
        output: Item.of('tconstruct:sky_slime_crystal', 3),
        buddingState: Block.getBlock('tconstruct:budding_sky_slime_crystal').defaultBlockState(),
        processingBudState: [
            Blocks.AIR.defaultBlockState(),
            Block.getBlock('tconstruct:small_sky_slime_crystal_bud').defaultBlockState()
                .setValue(BlockProperties.FACING, Direction.SOUTH),
            Block.getBlock('tconstruct:medium_sky_slime_crystal_bud').defaultBlockState()
                .setValue(BlockProperties.FACING, Direction.SOUTH),
            Block.getBlock('tconstruct:large_sky_slime_crystal_bud').defaultBlockState()
                .setValue(BlockProperties.FACING, Direction.SOUTH),
            Block.getBlock('tconstruct:sky_slime_crystal_cluster').defaultBlockState()
                .setValue(BlockProperties.FACING, Direction.SOUTH)
        ]
    })

    recipeBuilder.add({
        input: Item.of('tconstruct:budding_ichor_slime_crystal'),
        output: Item.of('tconstruct:ichor_slime_crystal', 3),
        buddingState: Block.getBlock('tconstruct:budding_ichor_slime_crystal').defaultBlockState(),
        processingBudState: [
            Blocks.AIR.defaultBlockState(),
            Block.getBlock('tconstruct:small_ichor_slime_crystal_bud').defaultBlockState()
                .setValue(BlockProperties.FACING, Direction.SOUTH),
            Block.getBlock('tconstruct:medium_ichor_slime_crystal_bud').defaultBlockState()
                .setValue(BlockProperties.FACING, Direction.SOUTH),
            Block.getBlock('tconstruct:large_ichor_slime_crystal_bud').defaultBlockState()
                .setValue(BlockProperties.FACING, Direction.SOUTH),
            Block.getBlock('tconstruct:ichor_slime_crystal_cluster').defaultBlockState()
                .setValue(BlockProperties.FACING, Direction.SOUTH)
        ]
    })

    recipeBuilder.add({
        input: Item.of('tconstruct:budding_ender_slime_crystal'),
        output: Item.of('tconstruct:ender_slime_crystal', 3),
        buddingState: Block.getBlock('tconstruct:budding_ender_slime_crystal').defaultBlockState(),
        processingBudState: [
            Blocks.AIR.defaultBlockState(),
            Block.getBlock('tconstruct:small_ender_slime_crystal_bud').defaultBlockState()
                .setValue(BlockProperties.FACING, Direction.SOUTH),
            Block.getBlock('tconstruct:medium_ender_slime_crystal_bud').defaultBlockState()
                .setValue(BlockProperties.FACING, Direction.SOUTH),
            Block.getBlock('tconstruct:large_ender_slime_crystal_bud').defaultBlockState()
                .setValue(BlockProperties.FACING, Direction.SOUTH),
            Block.getBlock('tconstruct:ender_slime_crystal_cluster').defaultBlockState()
                .setValue(BlockProperties.FACING, Direction.SOUTH)
        ]
    })
})