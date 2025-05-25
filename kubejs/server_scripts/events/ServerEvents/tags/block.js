ServerEvents.tags('block', event => {

    //minecraft:infiniburn_overworld
    event.add('minecraft:infiniburn_overworld', 'create:scoria')

    //minecraft:dead_bush_may_replace_on
    event.add('minecraft:dead_bush_may_place_on', 'create:scoria')
})