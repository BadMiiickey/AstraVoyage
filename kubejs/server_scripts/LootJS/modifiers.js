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

    /**
     * 
     * @param { Internal.List<Internal.Material> } materials
     */
    function oreLootModifier(materials) {
        materials.forEach(material => {
            event.addBlockLootModifier(`kubejs:${ material }_ore`)
                .removeLoot(Ingredient.all)
                .addLoot(`kubejs:raw_${ material }`)
                .dropExperience(10)

            event.addBlockLootModifier(`kubejs:deepslate_${ material }_ore`)
                .removeLoot(Ingredient.all)
                .addLoot(`kubejs:raw_${ material }`)
                .dropExperience(15)
        })
    }

    oreLootModifier(['bauxite', 'silver'])
})