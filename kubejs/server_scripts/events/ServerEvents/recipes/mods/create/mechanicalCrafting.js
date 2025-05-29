ServerEvents.recipes(event => {

    const { create } = event.recipes

    create.mechanical_crafting(
        'createdieselgenerators:pumpjack_crank',
        [
            'AIA',
            ' S ',
            'AIA',
            'ZSZ',
            'AZA'
        ],
        {
            A: 'create:andesite_alloy',
            I: 'create:iron_sheet',
            S: 'create:shaft',
            Z: 'create:zinc_ingot'
        }
    ).id('kubejs:mechanical_crafting_pumpjack_crank')//抽油机曲柄

    create.mechanical_crafting(
        'kubejs:freezing_core',
        [
            ' III ',
            'ISCSI',
            'ICFCI',
            'ISCSI',
            ' III '
        ],
        {
            I: 'minecraft:blue_ice',
            S: 'minecraft:snow_block',
            C: 'quark:bottled_cloud',
            F: 'ad_astra:cryo_freezer'
        }
    ).id('kubejs:mechanical_crafting_freezing_core')//冷冻核心

    create.mechanical_crafting(
        'kubejs:memory_bracelet',
        [
            'ARE',
            'SBS',
            'SBS',
            'SBS',
            'ERA'
        ],
        {
            A: 'createutilities:polished_amethyst',
            R: 'create:polished_rose_quartz',
            E: 'minecraft:emerald',
            S: 'minecraft:string',
            B: 'quark:soul_bead'
        }
    ).id('kubejs:mechanical_crafting_memory_bracelet')//记忆手链

    create.mechanical_crafting(
        'kubejs:dense_planet_core_ingot',
        [
            'ENDM',
            'AVGW'
        ],
        {
            E: 'kubejs:earth_core',
            N: 'kubejs:the_nether_core',
            D: 'kubejs:the_end_core',
            M: 'kubejs:mercury_core',
            A: 'kubejs:mars_core',
            V: 'kubejs:venus_core',
            G: 'kubejs:glacio_core',
            W: 'kubejs:wasteworld_core'
        }
    ).id('kubejs:mechanical_crafting_dense_planet_core_ingot')//致密星核锭

    create.mechanical_crafting(
        'refinedstorage:creative_storage_disk',
        [
            ' 6E6 ',
            'EECEE',
            ' 6E6 '
        ],
        {
            6: 'refinedstorage:64k_storage_disk',
            E: 'kubejs:electronic_mechanism',
            C: 'kubejs:creative_mechanism'
        }
    ).id('kubejs:mechanical_crafting_creative_storage_disk')//创造存储磁盘

    create.mechanical_crafting(
        'refinedstorage:creative_fluid_storage_disk',
        [
            ' 4E4 ',
            'ETCTE',
            ' 4E4 '
        ],
        {
            4: 'refinedstorage:4096k_fluid_storage_disk',
            E: 'kubejs:electronic_mechanism',
            T: 'create:fluid_tank',
            C: 'kubejs:creative_mechanism'
        }
    ).id('kubejs:mechanical_crafting_creative_fluid_storage_disk')//创造流体存储磁盘

    create.mechanical_crafting(
        'kubejs:steel_tank',
        [
            'SSSSS',
            'STTTS',
            'SSSSS'
        ],
        {
            S: 'ad_astra:steel_plate',
            T: 'ad_astra:steel_tank'
        }
    ).id('kubejs:mechanical_crafting_steel_tank')//钢燃料储罐

    create.mechanical_crafting(
        'kubejs:desh_tank',
        [
            'DDDDD',
            'DTTTD',
            'DDDDD'
        ],
        {
            D: 'ad_astra:desh_plate',
            T: 'ad_astra:desh_tank'
        }
    ).id('kubejs:mechanical_crafting_desh_tank')//戴斯燃料储罐

    create.mechanical_crafting(
        'kubejs:ostrum_tank',
        [
            'OOOOO',
            'OTTTO',
            'OOOOO'
        ],
        {
            O: 'ad_astra:ostrum_plate',
            T: 'ad_astra:ostrum_tank'
        }
    ).id('kubejs:mechanical_crafting_ostrum_tank')//紫金燃料储罐

    create.mechanical_crafting(
        'kubejs:calorite_tank',
        [
            'CCCCC',
            'CTTTC',
            'CCCCC'
        ],
        {
            C: 'ad_astra:calorite_plate',
            T: 'ad_astra:calorite_tank'
        }
    ).id('kubejs:mechanical_crafting_calorite_tank')//耐热金属燃料储罐
})