ServerEvents.recipes(event => {

    const { createsifter } = event.recipes
   
    //泥土 => 砂砾 + 粘土球
    createsifter.sifting(
        [
            Item.of('minecraft:gravel').withChance(0.6),
            Item.of('minecraft:clay_ball').withChance(0.4)
        ],
        [
            'minecraft:dirt',
            'createsifter:zinc_mesh'
        ],
        100,
        false,
    ).id('kubejs:sifting_dirt/gravel_clayball')

    //熔渣 => 灰烬 + 砂土
    createsifter.sifting(
        [
            Item.of('supplementaries:ash').withChance(0.3),
            Item.of('minecraft:coarse_dirt').withChance(0.5)
        ],
        [
            'create:scoria',
            'createsifter:brass_mesh'
        ],
        200,
        true
    ).id('kubejs:sifting_scoria')

    //泥土 => 各类种子

    /** @type { Internal.List<string> } */
    let seeds = []

    global.stringListTransformation(Ingredient.of('#forge:seeds').itemIds).forEach(seed => {
        seeds.push(Item.of(seed).withChance(0.05))
    })

    createsifter.sifting(
        seeds,
        [
            'minecraft:dirt',
            'createsifter:andesite_mesh'
        ],
        100,
        false,
    ).id('kubejs:sifting_dirt/seeds')
})