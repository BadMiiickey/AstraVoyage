LootJS.modifiers(event => {

    //战利品箱
    event.addLootTypeModifier(LootType.CHEST)
        .removeLoot('minecraft:enchanted_book')//删除附魔书
        .removeLoot('#minecraft:tools')//删除工具
        .removeLoot('#minecraft:trimmable_armors')//删除原版盔甲

    //生物掉落
    event.addLootTypeModifier(LootType.ENTITY)
        .removeLoot('#minecraft:tools')//删除工具掉落
        .removeLoot('#minecraft:trimmable_armors')//删除盔甲掉落
        .removeLoot('#minecraft:arrows')//删除弓箭掉落
        .removeLoot('minecraft:totem_of_undying')//删除不死图腾掉落

    event.addEntityLootModifier('minecraft:enderman')
        .addLoot('minecraft:echo_shard', 0.1)//添加回响碎片掉落
})