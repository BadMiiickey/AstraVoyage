ServerEvents.tags('item', event => {
        
    //curios
        //#curios:necklace
        event.add('curios:necklace', 'createaddition:electrum_amulet')

    //forge
        //forge:ingots
        event.add('forge:ingots/void_steel', 'createutilities:void_steel_ingot')
        event.add('forge:ingots/aluminum', 'kubejs:aluminum_ingot')
        event.add('forge:ingots/aluminum_alloy', 'kubejs:aluminum_alloy_ingot')
        event.add('forge:ingots/andesite_alloy', 'create:andesite_alloy')
        event.add('forge:ingots/granite_alloy', 'kubejs:granite_alloy')
        event.add('forge:ingots/diorite_alloy', 'kubejs:diorite_alloy')
        event.add('forge:ingots/rock_core', 'kubejs:rock_core_ingot')
        event.add('forge:ingots/dense_planet_core', 'kubejs:dense_planet_core_ingot')
        event.add('forge:ingots/chromatic_compound', 'create:chromatic_compound')
        event.add('forge:ingots/refined_radiance', 'create:refined_radiance')
        event.add('forge:ingots/shadow_steel', 'create:shadow_steel')
        event.add('forge:ingots/silver', 'kubejs:silver_ingot')

        event.remove('forge:ingots/steel', 'ad_astra:steel_ingot')

        //forge:nuggets
        event.remove('forge:nuggets/steel', 'ad_astra:steel_nugget')
        event.remove('forge:nuggets/copper', 'tconstruct:copper_nugget')
        event.add('forge:nuggets/silver', 'kubejs:silver_nugget')

        //forge:rods
        event.remove('forge:rods/iron', 'ad_astra:iron_rod')

        //forge:storage_blocks
        event.add('forge:storage_blocks/void_steel', 'createutilities:void_steel_block')
        event.add('forge:storage_blocks/aluminum', 'kubejs:aluminum_block')
        event.add('forge:storage_blocks/aluminum_alloy', 'kubejs:aluminum_alloy_block')
        event.add('forge:storage_blocks/granite_alloy', 'kubejs:granite_alloy_block')
        event.add('forge:storage_blocks/diorite_alloy', 'kubejs:diorite_alloy_block')
        event.add('forge:storage_blocks/silver', 'kubejs:silver_block')

        //forge:plates
        event.remove('forge:plates/iron', 'ad_astra:iron_plate')

    //kubejs:corals
    event.add('kubejs:corals', [
        'minecraft:brain_coral',
        'minecraft:bubble_coral',
        'minecraft:fire_coral',
        'minecraft:horn_coral',
        'minecraft:tube_coral',
        'minecraft:brain_coral_fan',
        'minecraft:bubble_coral_fan',
        'minecraft:fire_coral_fan',
        'minecraft:horn_coral_fan',
        'minecraft:tube_coral_fan'
    ])
})