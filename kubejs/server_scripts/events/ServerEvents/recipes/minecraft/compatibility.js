ServerEvents.recipes(event => {
    
    //兼容配方

    /**
     * 
     * @param { Internal.ItemStack_ | Internal.Ingredient_ } match 
     * @param { Internal.ItemStack_ | Internal.Ingredient_ } change 
     */
    function compatibility(match, change) {
        event.replaceInput({}, match, change)
        event.replaceOutput({}, match, change)
    }

    compatibility('ad_astra:cheese', 'tconstruct:cheese_ingot')//奶酪
    compatibility('ad_astra:cheese_block', 'tconstruct:cheese_block')//奶酪块
    compatibility('tconstruct:honey', 'create:honey')//蜂蜜
    compatibility('tconstruct:honey_bucket', 'create:honey_bucket')//蜂蜜桶
    compatibility('#forge:nuggets/copper', 'create:copper_nugget')//铜粒
    compatibility('#forge:ingots/steel', 'ad_astra:steel_ingot')//钢锭
    compatibility('#forge:nuggets/steel', 'ad_astra:steel_nugget')//钢粒
    compatibility('#forge:blocks/steel', 'ad_astra:steel_block')//钢块

        //埃忒恩光伏电池
        event.replaceInput(
            'ad_astra:photovoltaic_etrium_cell',
            'ad_astra:desh_plate',
            'ad_astra:etrium_plate'
        )

        //燃油精炼机
        event.replaceInput(
            'ad_astra:fuel_refinery',
            'minecraft:bucket',
            'kubejs:diorite_alloy'
        )

        event.replaceInput(
            'ad_astra:fuel_refinery',
            'minecraft:furnace',
            'tconstruct:seared_melter'
        )

        //太阳能板
        event.replaceInput(
            'ad_astra:solar_panel',
            'ad_astra:steel_plate',
            'kubejs:diorite_alloy'
        )

        //探矿杖
        event.replaceInput(
            'createoreexcavation:vein_finder',
            '#forge:ores/redstone',
            'kubejs:echo_mechanism'
        )

        //处理器粘合物
        event.replaceInput(
            'refinedstorage:processor_binding',
            '#forge:slimeballs',
            'create:super_glue'
        )

        //未处理的基础处理器
        event.replaceInput(
            'refinedstorage:raw_basic_processor',
            'refinedstorage:silicon',
            'kubejs:electronic_mechanism'
        )

        //未处理的进阶处理器
        event.replaceInput(
            'refinedstorage:raw_improved_processor',
            'refinedstorage:silicon',
            'kubejs:electronic_mechanism'
        )

        //未处理的高级处理器
        event.replaceInput(
            'refinedstorage:raw_advanced_processor',
            'refinedstorage:silicon',
            'kubejs:electronic_mechanism'
        )

        //充能器
        event.replaceInput(
            'ad_astra:energizer',
            'minecraft:diamond_block',
            'kubejs:electronic_mechanism'
        )

        event.replaceInput(
            'ad_astra:energizer',
            'ad_astra:ostrum_block',
            'ad_astra:desh_block'
        )

        //氧气装载机
        event.replaceInput(
            'ad_astra:oxygen_loader',
            'minecraft:redstone_block',
            'kubejs:electronic_mechanism'
        )

        event.replaceInput(
            'ad_astra:oxygen_loader',
            'minecraft:lightning_rod',
            'createaddition:copper_rod'
        )

        //钢电缆
        event.replaceInput(
            'ad_astra:steel_cable',
            'minecraft:copper_ingot',
            'createaddition:copper_wire'
        )

        //戴斯电缆
        event.replaceInput(
            'ad_astra:desh_cable',
            'minecraft:copper_ingot',
            'createaddition:copper_wire'
        )

        //电缆管道
        event.replaceInput(
            'ad_astra:cable_duct',
            'minecraft:copper_ingot',
            'create:copper_sheet'
        )

        //流体管道
        event.replaceInput(
            'ad_astra:fluid_pipe_duct',
            'minecraft:copper_ingot',
            'create:copper_sheet'
        )

        //动力筛子
        event.replaceInput(
            'createsifter:sifter',
            '#minecraft:planks',
            'createdieselgenerators:chip_wood_block'
        )

        //黄铜筛网
        event.replaceInput(
            'createsifter:brass_mesh',
            'minecraft:stick',
            'ad_astra:steel_rod'
        )

    //移除配方
    
    const removeRecipesId = (/** @type { ResourceLocation_ } */ name) => { event.remove({ id: name }) }
    const removeRecipesInput = (/** @type { Internal.ItemStack_ } */ name) => { event.remove({ input: name }) }
    const removeRecipesOutput = (/** @type { Internal.ItemStack_ } */ name) => { event.remove({ output: name }) }
    const removeRecipesType = (/** @type { Internal.ItemStack_ } */ name) => { event.remove({ type: name }) }

        //Ad_Astra
        removeRecipesId('ad_astra:steel_rod')
        removeRecipesId('ad_astra:compressing/iron_plate_from_compressing_iron_block')
        removeRecipesId('ad_astra:compressing/iron_plate_from_compressing_iron_ingot')
        removeRecipesId('ad_astra:alloying/steel_ingot_from_alloying_iron_ingot_and_coals')
        removeRecipesId('ad_astra:etrionic_blast_furnace')
        removeRecipesId('ad_astra:coal_generator')
        removeRecipesId('ad_astra:compressor')
        removeRecipesId('ad_astra:water_pump')
        removeRecipesId('ad_astra:nasa_workbench/tier_1_rocket_from_nasa_workbench')
        removeRecipesId('ad_astra:nasa_workbench/tier_2_rocket_from_nasa_workbench')
        removeRecipesId('ad_astra:nasa_workbench/tier_3_rocket_from_nasa_workbench')
        removeRecipesId('ad_astra:nasa_workbench/tier_4_rocket_from_nasa_workbench')
        removeRecipesId('ad_astra:etrionic_capacitor')
        removeRecipesId('ad_astra:gas_tank')
        removeRecipesId('ad_astra:rocket_nose_cone')
        removeRecipesId('ad_astra:nasa_workbench')
        removeRecipesId('ad_astra:wrench')
        removeRecipesId('ad_astra:oxygen_gear')
        removeRecipesId('ad_astra:engine_frame')
        removeRecipesId('ad_astra:gravity_normalizer')
        removeRecipesId('ad_astra:cryo_freezer')
        removeRecipesId('ad_astra:radio')

        global.methods.itemsRemoveArray(
            'ad_astra',
            ['encased'],
            ['iron_block', 'steel_block', 'desh_block', 'ostrum_block', 'calorite_block', 'etrium_block']
        ).forEach(item => {
            removeRecipesId(item)
        })

        global.methods.itemsRemoveArray(
            'ad_astra',
            ['iron', 'steel', 'desh', 'ostrum', 'calorite', 'etrium'],
            ['panel', 'factory_block']
        ).forEach(item => {
            removeRecipesId(item)
        })

        //ConstructionWand
        removeRecipesId('constructionwand:iron_wand')
        removeRecipesId('constructionwand:diamond_wand')
        removeRecipesId('constructionwand:infinity_wand')

        //Create
        removeRecipesId('create:crafting/materials/rose_quartz')
        removeRecipesId('create:mechanical_crafting/patato_cannon')
        removeRecipesId('create:crushing/deepslate_desh_ore')
        removeRecipesId('create:crushing/moon_desh_ore')
        removeRecipesId('create:crushing/deepslate_ostrum_ore')
        removeRecipesId('create:crushing/mars_ostrum_ore')
        removeRecipesId('create:crushing/deepslate_calorite_ore')
        removeRecipesId('create:crushing/venus_calorite_ore')
        removeRecipesId('create:compacting/blaze_cake')
        removeRecipesId('create:crafting/materials/copper_ingot')
        removeRecipesId('create:crafting/materials/copper_nugget')
        removeRecipesId('create:crafting/materials/andesite_alloy')

        removeRecipesOutput('create:copper_diving_helmet')
        removeRecipesOutput('create:copper_diving_boots')
        removeRecipesOutput('create:netherite_diving_helmet')
        removeRecipesOutput('create:netherite_diving_boots')

        //CreateAddition
        removeRecipesId('createaddition:compat/tconstruct/pig_iron')
        removeRecipesId('createaddition:compat/tconstruct/pig_iron_2')
        removeRecipesId('createaddition:charging/channeling')
        removeRecipesId('createaddition:mechanical_crafting/tesla_coil')
        removeRecipesId('createaddition:crafting/capacitor_1')
        removeRecipesId('createaddition:crafting/capacitor_2')

        //CreateDieselGenerators
        removeRecipesId('createdieselgenerators:distillation/crude_oil')

        //CreateMechanicalChicken
        removeRecipesId('create_mechanical_chicken:crafting/mechanical_chicken')

        //CreateNuclear
        removeRecipesId('createnuclear:crafting/steel_ingot_from_compacting')
        removeRecipesId('createnuclear:shapeless/steel_ingot_from_decompacting')
        removeRecipesId('createnuclear:crafting/steel_block_from_compacting')
        removeRecipesId('createnuclear:mixing/steel')
        removeRecipesId('createnuclear:item_application/reactor_casing_from_steel_and_brass_casing_using_deployer')
        removeRecipesId('createnuclear:item_application/reactor_input_from_hopper_and_reactor_casing_using_deployer')
        removeRecipesId('createnuclear:mechanical_crafting/reactor_core')
        removeRecipesId('createnuclear:mechanical_crafting/reactor_gauge')
        removeRecipesId('createnuclear:mechanical_crafting/reactor_cooling_frame')
        removeRecipesId('createnuclear:mechanical_crafting/reactor_controller')

        //CreateOreExcavation
        removeRecipesType('createoreexcavation:vein')
        removeRecipesType('createoreexcavation:drilling')
        removeRecipesType('createoreexcavation:extracting')

        //CreateUtilities
        removeRecipesId('createutilities:mixing/void_steel_ingot')
        removeRecipesId('createutilities:shaped/void_motor')
        removeRecipesId('createutilities:shaped/void_chest')
        removeRecipesId('createutilities:shaped/void_tank')
        removeRecipesId('createutilities:shaped/void_battery')

        //Homeostatic
        removeRecipesId('homeostatic:smoking_purified_leather_flask')
        removeRecipesId('homeostatic:furnace_purified_leather_flask')
        removeRecipesId('homeostatic:water_filter')
        removeRecipesId('homeostatic:filling/water')
        removeRecipesId('homeostatic:thermometer')

        //Minecraft
        removeRecipesId('minecraft:enchanting_table')
        removeRecipesId('minecraft:bow')
        removeRecipesId('minecraft:crossbow')
        removeRecipesId('minecraft:brewing_stand')
        removeRecipesId('minecraft:anvil')
        removeRecipesId('minecraft:shield')
        
        removeRecipesInput('minecraft:anvil')
        removeRecipesInput('minecraft:shield')
        removeRecipesInput('minecraft:tipped_arrow')
        removeRecipesInput('minecraft:enchanted_book')
        
        global.methods.stringListTransformation(Ingredient.of('#minecraft:tools').itemIds).forEach(tool => {
            removeRecipesInput(tool)
            removeRecipesOutput(tool)
        })
        
        global.methods.stringListTransformation(Ingredient.of('#minecraft:trimmable_armor').itemIds).forEach(armor => {
            removeRecipesInput(armor)
            removeRecipesOutput(armor)
        })

        //Quark
        removeRecipesId('quark:tools/crafting/pickarang_heart')
        removeRecipesId('quark:building/crafting/compressed/charcoal_block_uncompress')

        //RefinedStorage
        removeRecipesId('refinedstoraged:quartz_enriched_iron')
        removeRecipesId('refinedstorage:silicon')

        //Supplementaries
        removeRecipesId('supplementaries:soap/globe_sepia')

        //SophisticatedBackpacks
        removeRecipesId('sophisticatedbackpacks:backpack')

        //Tinker's Construct
        removeRecipesId('tconstruct:smeltery/casting/cheese_ingot_gold_cast')
        removeRecipesId('tconstruct:smeltery/casting/cheese_ingot_sand_cast')

        removeRecipesOutput('tconstruct:potion')
        removeRecipesOutput('tconstruct:potion_bucket')
        removeRecipesOutput('tconstruct:copper_nugget')
})