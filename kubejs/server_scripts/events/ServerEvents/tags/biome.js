ServerEvents.tags('worldgen/biome', event => {

    //kubejs:is_mars
    event.add(
        'kubejs:is_mars',
        [
            'ad_astra:martian_canyon_creek',
            'ad_astra:martian_polar_caps',
            'ad_astra:martian_wastelands'
        ]
    )

    //kubejs:is_mercury
    event.add('kubejs:is_mercury', 'ad_astra:mercury_deltas')

    //kubejs:is_moon
    event.add('kubejs:is_moon', 'ad_astra:lunar_wastelands')

    //kubejs:is_venus
    event.add(
        'kubejs:is_venus',
        [
            'ad_astra:venus_wastelands',
            'ad_astra:infernal_venus_barrens'
        ]
    )

    //kubejs:is_wasteworld
    event.add(
        'kubejs:is_wasteworld',
        [
            'kubejs:wasteland',
            'kubejs:wastecaves',
            'kubejs:wasteocean'
        ]
    )

    event.removeAll('ad_astra:has_structure/oil_well')
})