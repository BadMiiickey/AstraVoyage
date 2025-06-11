ServerEvents.recipes(event => {

    const { create } = event.recipes

    //饰品
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
    ).id('kubejs:mechanical_crafting_freezing_core')//寒霜芯核

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
    ).id('kubejs:mechanical_crafting_memory_bracelet')//慧泽丝链

    create.mechanical_crafting(
        'kubejs:phantom_glove',
        [
            ' DDD ',
            'DVVV ',
            'VEEED',
            'ESSSV',
            'SSSSS'
        ],
        {
            D: 'kubejs:dense_planet_core_mechanism',
            V: 'kubejs:void_mechanism',
            E: 'kubejs:echo_mechanism',
            S: 'kubejs:silicon_sheet'
        }
    ).id('kubejs:mechanical_crafting_phantom_glove')//幻虚手衣

    create.mechanical_crafting(
        'kubejs:evil_ring',
        [
            ' BBB ',
            'BHHHB',
            'BN NB',
            'BHHHB',
            ' BBB '
        ],
        {
            B: 'tconstruct:blood_slime_leaves',
            H: 'tconstruct:blaze_head',
            N: 'tconstruct:necrotic_bone'
        }
    ).id('kubejs:mechanical_crafting_evil_ring')//血恶环戒

    create.mechanical_crafting(
        'kubejs:light_crystal',
        [
            '   RRR',
            ' REEER',
            'RRER  '
        ],
        {
            R: 'create:refined_radiance',
            E: 'create:experience_nugget'
        }
    ).id('kubejs:mechanical_crafting_light_crystal')//曦光缀玉

    create.mechanical_crafting(
        'kubejs:lightning_claw',
        [
            '  A  ',
            'A V A',
            'VECEV'
        ],
        {
            A: 'minecraft:amethyst_shard',
            V: 'createutilities:polished_amethyst',
            E: 'kubejs:electronic_mechanism',
            C: 'kubejs:creative_mechanism'
        }
    ).id('kubejs:mechanical_crafting_lightning_claw')//惊霆裂爪

    create.mechanical_crafting(
        'kubejs:requiem_ring',
        [
            'SSS',
            'SDS',
            'S S',
            'SDS',
            'SSS'
        ],
        {
            S: 'quark:soul_bead',
            D: 'quark:diamond_heart'
        }
    ).id('kubejs:mechanical_crafting_requiem_ring')//安魂指箍

    create.mechanical_crafting(
        'kubejs:phase_bracelet',
        [
            ' SSS ',
            'S V S',
            'SV VS',
            'S V S',
            ' SSS '
        ],
        {
            S: '#quark:shards',
            V: 'kubejs:void_mechanism'
        }
    ).id('kubejs:mechanical_crafting_phase_bracelet')//时隙腕璇

    //其他
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

    create.mechanical_crafting(
        'ad_astra:nasa_workbench',
        [
            ' I I ',
            'I   I',
            'PAAAP',
            'SSSSS'
        ],
        {
            I: 'createaddition:iron_rod',
            P: 'ad_astra:steel_plate',
            A: 'kubejs:aviation_mechanism',
            S: 'ad_astra:steel_block'
        }
    ).id('kubejs:mechanical_crafting_nasa_workbench')//NASA工作台

    create.mechanical_crafting(
        'ad_astra:gravity_normalizer',
        [
            '  D  ',
            ' EME ',
            'SPPPS'
        ],
        {
            D: 'minecraft:diamond_block',
            E: 'ad_astra:etrionic_capacitor',
            M: 'kubejs:electronic_mechanism',
            S: 'ad_astra:steel_block',
            P: 'ad_astra:desh_plate'
        }
    ).id('kubejs:mechanical_crafting_gravity_normalizer')//重力规正器

    create.mechanical_crafting(
        'ad_astra:cryo_freezer',
        [
            ' O ',
            ' P ',
            'OTO',
            'OIO',
            'SES'
        ],
        {
            O: 'ad_astra:ostrum_plate',
            P: 'ad_astra:ostrum_fluid_pipe',
            T: 'ad_astra:large_gas_tank',
            I: 'minecraft:ice',
            S: 'ad_astra:steel_block',
            E: 'kubejs:electronic_mechanism'
        }
    ).id('kubejs:mechanical_crafting_cryo_freezer')//凛冰冻结装置

    create.mechanical_crafting(
        'createutilities:void_motor',
        [
            ' GGG ',
            'VCCCV',
            ' MSM '
        ],
        {
            G: 'createutilities:graviton_tube',
            V: 'createutilities:void_steel_sheet',
            C: 'createutilities:void_casing',
            M: 'kubejs:void_mechanism',
            S: 'create:shaft'
        }
    ).id('kubejs:mechanical_crafting_void_motor')//虚空马达

    create.mechanical_crafting(
        'createutilities:void_tank',
        [
            ' GGG ',
            'VFFFV',
            ' MCM '
        ],
        {
            G: 'createutilities:graviton_tube',
            V: 'createutilities:void_steel_sheet',
            F: 'create:fluid_tank',
            M: 'kubejs:void_mechanism',
            C: 'createutilities:void_casing'
        }
    ).id('kubejs:mechanical_crafting_void_tank')//虚空流体储罐

    create.mechanical_crafting(
        'createutilities:void_battery',
        [
            ' GGG ',
            'VAAAV',
            ' MCM '
        ],
        {
            G: 'createutilities:graviton_tube',
            V: 'createutilities:void_steel_sheet',
            A: 'createaddition:modular_accumulator',
            M: 'kubejs:void_mechanism',
            C: 'createutilities:void_casing'
        }
    ).id('kubejs:mechanical_crafting_void_battery')//虚空蓄电池

    create.mechanical_crafting(
        'createnuclear:reactor_core',
        [
            'CCCCC',
            'CNINC',
            'CIUIC',
            'CNINC',
            'CCCCC'
        ],
        {
            C: 'createnuclear:reactor_casing',
            N: 'kubejs:nuclear_mechanism',
            I: 'minecraft:netherite_ingot',
            U: 'createnuclear:uranium_bucket'
        }
    ).id('kubejs:mechanical_crafting_reactor_core')//反应堆核心

    create.mechanical_crafting(
        'createnuclear:reactor_cooler',
        [
            'CCCCC',
            'CNGNC',
            'CFGFC',
            'CNGNC',
            'CCCCC'
        ],
        {
            C: 'createnuclear:reactor_casing',
            N: 'kubejs:nuclear_mechanism',
            G: 'createnuclear:reinforced_glass',
            F: 'ad_astra:cryo_freezer'
        }
    ).id('kubejs:mechanical_crafting_reactor_cooling_frame')//反应堆冷却器

    create.mechanical_crafting(
        'createnuclear:reactor_controller',
        [
            'CCCCC',
            'CNONC',
            'CEPEC',
            'CNVNC',
            'CCCCC'
        ],
        {
            C: 'createnuclear:reactor_casing',
            N: 'kubejs:nuclear_mechanism',
            O: 'create:content_observer',
            E: 'kubejs:electronic_mechanism',
            P: 'kubejs:dense_planet_core_mechanism',
            V: 'create:item_vault'
        }
    ).id('kubejs:mechanical_crafting_reactor_controller')//反应堆控制器
})