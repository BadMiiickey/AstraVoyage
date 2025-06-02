LootJS.modifiers(event => {

    //战利品箱
    event.addLootTypeModifier(LootType.CHEST)
        .removeLoot('minecraft:enchanted_book')
        .removeLoot('#minecraft:tools')
        .removeLoot('#minecraft:trimmable_armors')

    //生物掉落
    event.addLootTypeModifier(LootType.ENTITY)
        .removeLoot('#minecraft:tools')
        .removeLoot('#minecraft:trimmable_armors')
        .removeLoot('#minecraft:arrows')
        .removeLoot('minecraft:totem_of_undying')

    //方块掉落
        //铝土矿石
        event.addBlockLootModifier('kubejs:bauxite_ore')
            .removeLoot(Ingredient.all)
            .addLoot('kubejs:raw_bauxite')
            .dropExperience(10)

        //深层铝土矿石
        event.addBlockLootModifier('kubejs:deepslate_bauxite_ore')
            .removeLoot(Ingredient.all)
            .addLoot('kubejs:raw_bauxite')
            .dropExperience(15)
})