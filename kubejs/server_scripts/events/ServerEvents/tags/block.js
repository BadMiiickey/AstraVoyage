ServerEvents.tags('block', event => {

    //minecraft:infiniburn_overworld
    event.add('minecraft:infiniburn_overworld', 'create:scoria')

    //minecraft:dead_bush_may_replace_on
    event.add('minecraft:dead_bush_may_place_on', 'create:scoria')

    //create:wrench_pickup
    event.add('create:wrench_pickup', [
        'kubejs:tier_1_rocket_core',
        'kubejs:tier_2_rocket_core',
        'kubejs:tier_3_rocket_core',
        'kubejs:tier_4_rocket_core'
    ])
})