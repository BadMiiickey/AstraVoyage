//ad_astra:main
StartupEvents.modifyCreativeTab('ad_astra:main', event => {

    event.remove('ad_astra:oil')
    event.remove('ad_astra:oil_bucket')
    event.remove('ad_astra:coal_generator')
    event.remove('ad_astra:compressor')
    event.remove('ad_astra:etrionic_blast_furnace')
    event.remove('ad_astra:water_pump')
    event.remove('ad_astra:cheese')
    event.remove('ad_astra:cheese_block')
    event.remove('ad_astra:wrench')

    global.methods.itemsRemoveArray(
        'ad_astra',
        ['iron'],
        ['rod', 'plate']
    ).forEach(item => {
        event.remove(item)
    })

    global.methods.itemsRemoveArray(
        'ad_astra',
        ['iron', 'steel', 'desh', 'ostrum', 'calorite', 'etrium'],
        ['factory_block', 'plateblock', 'panel']
    ).forEach(item => {
        event.remove(item)
    })

    global.methods.itemsRemoveArray(
        'ad_astra',
        ['encased'],
        ['iron_block', 'steel_block', 'desh_block', 'ostrum_block', 'calorite_block', 'etrium_block']
    ).forEach(item => {
        event.remove(item)
    })
})

//create:base
StartupEvents.modifyCreativeTab('create:base', event => {

    event.remove('create:potato_cannon')

    event.add('create:chromatic_compound')
    event.add('create:refined_radiance')
    event.add('create:shadow_steel')
})

//createadditions
StartupEvents.modifyCreativeTab('createaddition:main', event => {

    event.remove('createaddition:tesla_coil')
})

//createnuclear:main
StartupEvents.modifyCreativeTab('createnuclear:main', event => {

    global.methods.itemsRemoveArray(
        'createnuclear',
        ['steel'],
        ['ingot', 'nugget', 'block']
    ).forEach(item => {
        event.remove(item)
    })
})

//createsifter:main
StartupEvents.modifyCreativeTab('createsifter:main', event => {

    event.remove('createsifter:advanced_custom_mesh')
    event.remove('createsifter:custom_mesh')
    event.remove('createsifter:dust')
    event.remove('createsifter:crushed_end_stone')
})

//create_mechanical_chicken:main
StartupEvents.modifyCreativeTab('create_mechanical_chicken:main', event => {

    event.remove('create_mechanical_chicken:seed_oil_bucket')
    event.remove('create_mechanical_chicken:seed_oil')
})

//homeostatic:items
StartupEvents.modifyCreativeTab('homeostatic:items', event => {

    event.remove('homeostatic:water_filter')
    event.remove('homeostatic:book')
    event.remove('homeostatic:thermometer')
}) 

//kubejs:tab
StartupEvents.modifyCreativeTab('kubejs:tab', event => {
        
    event.setIcon('kubejs:earth_coin')
    event.setDisplayName('AstraVoyage')

    event.remove('kubejs:incomplete_guardian_shield')
    event.remove('kubejs:incomplete_silicon')
    event.remove('kubejs:incomplete_sculk_sensor')
    event.remove('kubejs:incomplete_electronic_mechanism')
    event.remove('kubejs:incomplete_rock_core_mechanism')
    event.remove('kubejs:incomplete_dense_planet_core_mechanism')
    event.remove('kubejs:incomplete_echo_mechanism')
    event.remove('kubejs:incomplete_creative_mechanism')
    event.remove('kubejs:incomplete_aviation_mechanism')
})

//minecraft    
    //minecraft:combat
    StartupEvents.modifyCreativeTab('minecraft:combat', event => {

        global.methods.itemsRemoveArray(
            'minecraft',
            ['wooden', 'stone', 'iron', 'golden', 'diamond', 'netherite'],
            ['sword', 'axe']
        ).forEach(item => {
            event.remove(item)
        })

        global.methods.itemsRemoveArray(
            'minecraft',
            ['leather', 'chainmail', 'iron', 'golden', 'diamond', 'netherite'],
            ['helmet', 'chestplate', 'leggings', 'boots']
        ).forEach(item => { 
            event.remove(item)
        })

        event.remove('minecraft:turtle_helmet')
        event.remove('minecraft:totem_of_undying')
        event.remove('minecraft:bow')
        event.remove('minecraft:crossbow')
        event.remove('minecraft:shield')
        event.remove('minecraft:tipped_arrow')
    })

    //minecraft:food_and_drinks
    StartupEvents.modifyCreativeTab('minecraft:food_and_drinks', event => {

        global.methods.itemsRemoveArray(
            'minecraft',
            ['splash', 'lingering'],
            ['potion']
        ).forEach(item => { 
            event.remove(item)
        })

        event.remove('minecraft:potion')
    })

    //minecraft:functional_blocks
    StartupEvents.modifyCreativeTab('minecraft:functional_blocks', event => {

        event.remove('minecraft:enchanting_table')
        event.remove('minecraft:end_portal_frame')
        event.remove('minecraft:brewing_stand')
        event.remove('supplementaries:bamboo_spikes_tipped')
        event.remove('#minecraft:anvil')
        event.remove('supplementaries:globe')
        event.remove('supplementaries:globe_sepia')
    })

    //minecraft:ingredients
    StartupEvents.modifyCreativeTab('minecraft:ingredients', event => {
        
        event.remove('minecraft:enchanted_book')
        event.remove('quark:ancient_tome')
    })

    StartupEvents.modifyCreativeTab('minecraft:spawn_eggs', event => {

        event.remove('minecraft:wandering_trader_spawn_egg')
    })

    //minecraft:tools_and_utilities
    StartupEvents.modifyCreativeTab('minecraft:tools_and_utilities', event => {

        event.remove('homeostatic:water_filter')
        event.remove('homeostatic:book')
        event.remove('homeostatic:thermometer')

        global.methods.itemsRemoveArray(
            'minecraft',
            ['wooden', 'stone', 'iron', 'golden', 'diamond', 'netherite'],
            ['shovel', 'pickaxe', 'axe', 'hoe']
        ).forEach(item => {
            event.remove(item)
        })

    })

//refinedstorage:general
StartupEvents.modifyCreativeTab('refinedstorage:general', event => {

    event.remove(/refinedstorage:white.*/)
    event.remove(/refinedstorage:orange.*/)
    event.remove(/refinedstorage:magenta.*/)
    event.remove(/refinedstorage:yellow.*/)
    event.remove(/refinedstorage:lime.*/)
    event.remove(/refinedstorage:pink.*/)
    event.remove(/refinedstorage:gray.*/)
    event.remove(/refinedstorage:light_gray.*/)
    event.remove(/refinedstorage:cyan.*/)
    event.remove(/refinedstorage:purple.*/)
    event.remove(/refinedstorage:blue.*/)
    event.remove(/refinedstorage:brown.*/)
    event.remove(/refinedstorage:green.*/)
    event.remove(/refinedstorage:red.*/)
    event.remove(/refinedstorage:black.*/)
    event.remove('refinedstorage:fortune_1_upgrade')
    event.remove('refinedstorage:fortune_2_upgrade')
    event.remove('refinedstorage:fortune_3_upgrade')
    event.remove('refinedstorage:silk_touch_upgrade')
})

//sophisticatedbackpacks:main
StartupEvents.modifyCreativeTab('sophisticatedbackpacks:main', event => {

    event.remove('sophisticatedbackpacks:anvil_upgrade')
})

//tconstruct:fluids
StartupEvents.modifyCreativeTab('tconstruct:fluids', event => {
    
    event.remove('tconstruct:potion_bucket')
    event.remove('tconstruct:honey_bucket')
})

//tconstruct:general
StartupEvents.modifyCreativeTab('tconstruct:general', event => {

    event.remove('tconstruct:copper_nugget')
})