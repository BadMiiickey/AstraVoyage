ServerEvents.recipes(event => {
    
    //兼容配方

    /**
     * 
     * @param { Internal.ItemStack | Internal.Ingredient } match 
     * @param { Internal.ItemStack | Internal.Ingredient } change 
     */
    function compatibility(match, change) {
        event.replaceInput({}, match, change)
        event.replaceOutput({}, match, change)
    }

    compatibility('ad_astra:cheese','tconstruct:cheese_ingot')//奶酪
    compatibility('ad_astra:cheese_block','tconstruct:cheese_block')//奶酪块
    compatibility('tconstruct:honey','create:honey')//蜂蜜
    compatibility('tconstruct:honey_bucket','create:honey_bucket')//蜂蜜桶

        //埃忒恩光伏电池
        event.replaceInput(
            'ad_astra:photovoltaic_etrium_cell',
            'ad_astra:desh_plate',
            'ad_astra:etrium_plate'
        )

        //NASA工作台
        event.replaceInput(
            'ad_astra:nasa_workbench',
            'minecraft:redstone_torch',
            'kubejs:diorite_alloy'
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


    //移除配方
    
    const removeRecipesId = (/** @type { ResourceLocation_ } */ name) => { event.remove({ id: name }) }
    const removeRecipesInput = (/** @type { Internal.ItemStack_ } */ name) => { event.remove({ input: name })}
    const removeRecipesOutput = (/** @type { Internal.ItemStack_ } */ name) => { event.remove({ output: name })}
    const removeRecipesType = (/** @type { Internal.ItemStack } */ name) => { event.remove({ type: name })}

        //Ad_Astra
        removeRecipesId('ad_astra:steel_rod')
        removeRecipesId('ad_astra:compressing/iron_plate_from_compressing_iron_block')
        removeRecipesId('ad_astra:compressing/iron_plate_from_compressing_iron_ingot')
        removeRecipesId('ad_astra:alloying/steel_ingot_from_alloying_iron_ingot_and_coals')
        removeRecipesId('ad_astra:etrionic_blast_furnace')
        removeRecipesId('ad_astra:coal_generator')
        removeRecipesId('ad_astra:compressor')
        removeRecipesId('ad_astra:water_pump')

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

        //CreateAddition
        removeRecipesId('createaddition:compat/tconstruct/pig_iron')
        removeRecipesId('createaddition:compat/tconstruct/pig_iron_2')
        removeRecipesId('createaddition:charging/channeling')

        //CreateDieselGenerators
        removeRecipesId('createdieselgenerators:distillation/crude_oil')

        //CreateNuclear
        removeRecipesId('createnuclear:crafting/steel_ingot_from_compacting')
        removeRecipesId('createnuclear:shapeless/steel_ingot_from_decompacting')
        removeRecipesId('createnuclear:crafting/steel_block_from_compacting')
        removeRecipesId('createnuclear:mixing/steel')

        removeRecipesInput('createnuclear:steel_ingot')
        removeRecipesInput('createnuclear:steel_block')
        removeRecipesInput('createnuclear:steel_nugget')

        //CreateOreExcavation
        removeRecipesType('createoreexcavation:vein')
        removeRecipesType('createoreexcavation:drilling')
        removeRecipesType('createoreexcavation:extracting')

        //CreateUtilities
        removeRecipesId('createutilities:mixing/void_steel_ingot')

        //Homeostatic
        removeRecipesId('homeostatic:smoking_purified_leather_flask')
        removeRecipesId('homeostatic:furnace_purified_leather_flask')
        removeRecipesId('homeostatic:water_filter')
        removeRecipesId('homeostatic:filling/water')

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
})