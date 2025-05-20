ServerEvents.recipes(event => {
    
    //添加配方
        //有序合成
        event.shaped(
            'createaddition:capacitor',
            [
                ' Z ',
                'ICI',
                ' R '
            ],
            {
                Z: 'createaddition:zinc_sheet',
                I: 'create:iron_sheet',
                C: 'create:copper_sheet',
                R: 'minecraft:redstone_torch'
            }
        ).id('kubejs:shaped_capacitor')//电容
            
        event.shaped(
            'sophisticatedbackpacks:backpack',
            [
                'SLS',
                'LCL',
                'DLD'
            ],
            {
                S: 'minecraft:string',
                L: 'minecraft:leather',
                C: '#forge:chests/wooden',
                D: 'ad_astra:desh_plate'
            }
        ).id('kubejs:shaped_backpack')//背包

        event.shaped(
            'create:wrench',
            [
                'GG ',
                'GC ',
                ' S '
            ],
            {
                G: 'create:golden_sheet',
                C: 'create:cogwheel',
                S: 'minecraft:stick'
            }
        ).id('kubejs:shaped_wrench')//扳手

        event.shaped(
            'createaddition:rolling_mill',
            [
                'ISI',
                'ASA',
                'ACA'
            ],
            {
                I: 'create:iron_sheet',
                S: 'create:shaft',
                A: 'create:andesite_alloy',
                C: 'create:andesite_casing'
            }
        ).id('kubejs:shaped_rolling_mill')//轧机

        event.shaped(
            'createaddition:spool',
            [
                ' I ',
                ' N ',
                ' I '
            ],
            {
                I: 'create:iron_sheet',
                N: 'minecraft:iron_nugget'
            }
        ).id('kubejs:shaped_spool')//空线轴

        event.shaped(
            'ad_astra:etrionic_core',
            [
                ' G ',
                'GCG',
                ' G '
            ],
            {
                G: 'createnuclear:graphene',
                C: 'createaddition:capacitor'
            }
        ).id('kubejs:shaped_etrionic_core')//电容核心

        event.shaped(
            'ad_astra:etrionic_capacitor',
            [
                ' I ',
                'ICI',
                ' I '
            ],
            {
                I: 'create:iron_sheet',
                C: 'ad_astra:etrionic_core'
            }
        ).id('kubejs:shaped_etrionic_capacitor')//电容器

        event.shaped(
            'ad_astra:gas_tank',
            [
                'SI ',
                'SS ',
                'SS '
            ],
            {
                S: 'ad_astra:steel_plate',
                I: 'createaddition:iron_rod'
            }
        ).id('kubejs:shaped_gas_tank')//流体储罐

        event.shaped(
            'kubejs:magnet',
            [
                ' H ',
                'BLR',
                'III'
            ],
            {
                H: 'tconstruct:sledge_hammer',
                B: 'minecraft:blue_dye',
                L: 'minecraft:lodestone',
                R: 'minecraft:red_dye',
                I: 'minecraft:iron_ingot'
            }
        ).id('kubejs:shaped_magnet')//吸金磁

        event.shaped(
            'kubejs:granite_alloy',
            [
                'GA',
                'AG'
            ],
            {
                G: 'minecraft:granite',
                A: 'supplementaries:ash'
            }
        ).id('kubejs:shaped_granite_alloy')//花岗合金

        event.shaped(
            'kubejs:diorite_alloy',
            [
                'DZ',
                'ZD'
            ],
            {
                D: 'minecraft:diorite',
                Z: 'create:zinc_nugget'
            }
        ).id('kubejs:shaped_diorite_alloy')//闪长合金

        event.shaped(
            'kubejs:echo_crystal_nucleus',
            [
                ' E ',
                'ACA',
                ' E '
            ],
            {
                E: 'minecraft:ender_pearl',
                A: 'minecraft:amethyst_shard',
                C: 'kubejs:echo_mechanism'
            }
        ).id('kubejs:shaped_echo_crystal_nucleus')//回响晶核
        
        //无序合成

        /**
         * 
         * @param { string } modName 
         * @param { Internal.Material_ } material 
         */
        function ingotTransformation(modName, material) {
            event.shapeless(
                Item.of(`${modName}:${material}_nugget`, 9),
                `${modName}:${material}_ingot`
            ).id(`kubejs:shapeless_${material}_nugget`)

            event.shapeless(
                Item.of(`${modName}:${material}_ingot`, 9),
                `${modName}:${material}_block`
            ).id(`kubejs:shapeless_${material}_ingot/block`)

            event.shapeless(
                `${modName}:${material}_ingot`,
                Item.of(`${modName}:${material}_nugget`, 9),
            ).id(`kubejs:shapeless_${material}_ingot/nugget`)

            event.shapeless(
                `${modName}:${material}_block`,
                Item.of(`${modName}:${material}_ingot`, 9)
            ).id(`kubejs:shapeless_${material}_block`)
        }

        ingotTransformation('ad_astra', 'etrium')//埃忒恩锭
        ingotTransformation('kubejs', 'aluminum')//铝锭
        ingotTransformation('kubejs', 'rock_core')//岩核锭
        ingotTransformation('kubejs', 'dense_planet_core')//致密星核锭

        //熔炉 *** 高炉

        /**
         * 
         * @param { Internal.ItemStack_ } output 
         * @param { Internal.ItemStack_ } input 
         */
        function smeltAndBlast(output, input) {

            let outputPath = output.toString().replace(':', '_')

            event.smelting(output, input).id(`kubejs:smelting_${outputPath}`)
            event.blasting(output, input).id(`kubejs:blasting_${outputPath}`)
        }

        smeltAndBlast('ad_astra:desh_ingot', 'kubejs:crushed_raw_desh')//戴斯锭
        smeltAndBlast('ad_astra:ostrum_ingot', 'kubejs:crushed_raw_ostrum')//紫金锭
        smeltAndBlast('ad_astra:calorite_ingot', 'kubejs:crushed_raw_calorite')//耐热金属锭
        smeltAndBlast('tconstruct:seared_brick', 'kubejs:granite_alloy')//焦黑砖
        smeltAndBlast('kubejs:alumina', 'kubejs:aluminum_hydroxide')//氧化铝
})