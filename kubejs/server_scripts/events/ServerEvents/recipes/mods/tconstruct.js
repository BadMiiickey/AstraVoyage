ServerEvents.recipes(event => {

    const { tconstruct } = event.recipes

    var components = [
        ['tconstruct:tough_handle', 270, 32.50],
        ['tconstruct:leggings_plating', 450, 41.25],
        ['tconstruct:tool_handle', 90, 18.75],
        ['tconstruct:small_blade', 180, 26.25],
        ['tconstruct:large_plate', 360, 37.50],
        ['tconstruct:hammer_head', 720, 52.50],
        ['tconstruct:broad_blade', 720, 52.50],
        ['tconstruct:small_axe_head', 180, 26.25],
        ['tconstruct:bow_limb', 180, 26.25],
        ['tconstruct:repair_kit', 180, 26.25],
        ['tconstruct:tough_binding', 240, 32.50],
        ['tconstruct:adze_head', 180, 26.25],
        ['tconstruct:helmet_plating', 240, 32.50],
        ['tconstruct:chestplate_plating', 540, 45.00],
        ['tconstruct:bow_grip', 180, 26.25],
        ['tconstruct:maille', 180, 26.25],
        ['tconstruct:broad_axe_head', 720, 52.50],
        ['tconstruct:tool_binding', 90, 18.75],
        ['tconstruct:boots_plating', 180, 26.25],
        ['tconstruct:pick_head', 180, 26.25]
    ]

    //冶炼炉
    const smeltryCompatibility = {

        /**
         * 
         * @param { string } modName 
         * @param { Internal.Material } material 
         */
        materialMelting(modName, material) {
            if (!Item.of(`${ modName }:${ material }_block`).empty) {
                event.custom({
                    "type": "tconstruct:material",
                    "ingredient": {
                        "item": `${ modName }:${ material }_block`
                    },
                    "leftover": {
                        "count": 1,
                        "item": `${ modName }:${ material }_ingot`
                    },
                    "material": `kubejs:${ material }`,
                    "needed": 1,
                    "value": 9
                }).id(`${modName}:${material}_block_melting`)
            }

            if (!Item.of(`${ modName }:${ material }_ingot`).empty) {
                event.custom({
                    "type": "tconstruct:material",
                    "ingredient": {
                        "item": `${ modName }:${ material }_ingot`
                    },
                    "material": `kubejs:${ material }`,
                    "needed": 1,
                    "value": 1
                })
            }

            if (!Item.of(`${ modName }:${ material }`).empty) {
                event.custom({
                    "type": "tconstruct:material",
                    "ingredient": {
                        "item": `${ modName }:${ material }`
                    },
                    "material": `kubejs:${ material }`,
                    "needed": 1,
                    "value": 1
                })
            }
        },
        
        /**
         * 
         * @param { Internal.OutputFluid_ } fluidName 
         * @param { Internal.List<[Input: InputItem_, FluidAmount: number, Time: number]> } inputs 
         * @param { number } temperature 
         * @param { number } time 
         */
        commonMelting(fluidName, inputs, temperature) {
            inputs.forEach(input => {
                tconstruct.melting(
                    Fluid.of(fluidName, input[1]),
                    input[0],
                    temperature,
                    input[2]
                ).id(`kubejs:melting_${ fluidName.replace(':', '_') }${ input[0].replace(':', '_') }`)
            })
        },

        /**
         * 
         * @param { Internal.OutputFluid_ } fluidName 
         * @param { Internal.Material } materialName 
         * @param { number } magnification
         * @param { number } temperature 
         */
        componentMelting(fluidName, materialName, magnification, temperature) {
            
            components.forEach(component => {
                tconstruct.melting(
                    Fluid.of(fluidName, component[1]),
                    Item.of(component[0], { Material: materialName }).strongNBT(),
                    temperature,
                    component[2] * magnification
                ).id(`kubejs:melting_${ fluidName.replace(':', '_') }${ component[0].replace(':', '_') }`)
            })
        },

        /**
         * 
         * @param { Internal.List<[InputFluid: Internal.InputFluid_, Amount: number]> } inputFluids 
         * @param { [OutputFluid: Internal.OutputFluid_, Amount: number] } outputFluid 
         * @param { number } temperature
         */
        alloying(inputFluids, outputFluid, temperature) {
            
            let recipe = {
                "type": "tconstruct:alloy",
                "inputs": [],
                "result": {
                    "amount": outputFluid[1],
                    "fluid": outputFluid[0]
                },
                "temperature": temperature
            }
            
            if (inputFluids) {
                inputFluids.forEach(inputFluid => {
                    if (inputFluid) {
                        recipe.inputs.push({
                            "amount": inputFluid[1],
                            "fluid": inputFluid[0]
                        })
                    }
                })
            }

            recipe = JSON.stringify(recipe)

            event.custom(recipe)
        }
    }

        //戴斯
        smeltryCompatibility.materialMelting('ad_astra', 'desh')

        smeltryCompatibility.commonMelting(
            'kubejs:molten_desh',
            [
                ['ad_astra:desh_ingot', 90, 18.75],
                ['ad_astra:desh_nugget', 10, 6.25],
                ['ad_astra:desh_block', 810, 56.25]
            ],
            800
        )

        smeltryCompatibility.componentMelting('kubejs:flowing_molten_desh', 'kubejs:desh', 2.75, 800)

        //紫金
        smeltryCompatibility.materialMelting('ad_astra', 'ostrum')

        smeltryCompatibility.commonMelting(
            'kubejs:molten_ostrum',
            [
                ['ad_astra:ostrum_ingot', 90, 18.75],
                ['ad_astra:ostrum_nugget', 10, 6.25],
                ['ad_astra:ostrum_block', 810, 56.25]
            ],
            800
        )

        smeltryCompatibility.componentMelting('kubejs:flowing_molten_ostrum', 'kubejs:ostrum', 2.75, 800)

        //耐热金属
        smeltryCompatibility.materialMelting('ad_astra', 'calorite')

        smeltryCompatibility.commonMelting(
            'kubejs:molten_calorite',
            [
                ['ad_astra:calorite_ingot', 90, 18.75],
                ['ad_astra:calorite_nugget', 10, 6.25],
                ['ad_astra:calorite_block', 810, 56.25]
            ],
            800
        )

        smeltryCompatibility.componentMelting('kubejs:molten_calorite', 'kubejs:calorite', 2.75, 1500)

        //埃忒恩
        smeltryCompatibility.materialMelting('ad_astra', 'etrium')

        smeltryCompatibility.alloying(
            [
                ['kubejs:molten_desh', 50],
                ['kubejs:molten_ostrum', 50],
                ['kubejs:molten_calorite', 50]
            ],
            ['kubejs:molten_etrium', 150],
            1200
        )

        smeltryCompatibility.commonMelting(
            'kubejs:molten_etrium',
            [
                ['ad_astra:etrium_ingot', 90, 18.75],
                ['ad_astra:etrium_nugget', 10, 6.25],
                ['ad_astra:etrium_block', 810, 56.25]
            ],
            1200
        )

        smeltryCompatibility.componentMelting('kubejs:molten_etrium', 'kubejs:etrium', 4.25, 1200)

        //铝合金
        smeltryCompatibility.materialMelting('kubejs', 'aluminum_alloy')

        smeltryCompatibility.alloying(
            [
                ['tconstruct:molten_aluminum', 90],
                ['kubejs:molten_zinc', 30],
                ['tconstruct:molten_copper', 30]
            ],
            ['kubejs:molten_aluminum_alloy', 90],
            610
        )

        smeltryCompatibility.commonMelting(
            'kubejs:molten_aluminum_alloy',
            [
                ['kubejs:aluminum_alloy_ingot', 90, 18.75],
                ['kubejs:aluminum_alloy_nugget', 10, 6.25],
                ['kubejs:aluminum_alloy_block', 810, 56.25]
            ],
            610
        )

        smeltryCompatibility.componentMelting('kubejs:molten_aluminum_alloy', 'kubejs:aluminum_alloy', 3.75, 610)

        //锌
        smeltryCompatibility.materialMelting('create', 'zinc')

        smeltryCompatibility.commonMelting(
            'kubejs:molten_zinc',
            [
                ['create:zinc_ingot', 90, 18.75],
                ['create:zinc_nugget', 10, 6.25],
                ['create:zinc_block', 810, 56.25]
            ],
            420
        )

        smeltryCompatibility.componentMelting('kubejs:molten_zinc', 'kubejs:zinc', 1.75, 420)

        //虚空钢
        smeltryCompatibility.materialMelting('createutilities', 'void_steel')

        smeltryCompatibility.commonMelting(
            'kubejs:molten_void_steel',
            [
                ['createutilities:void_steel_ingot', 90, 18.75],
                ['createutilities:void_steel_block', 810, 56.25]
            ],
            1500
        )

        smeltryCompatibility.componentMelting('kubejs:molten_void_steel', 'kubejs:void_steel', 5.75, 1500)

        //岩核
        smeltryCompatibility.materialMelting('kubejs', 'rock_core')

        smeltryCompatibility.alloying(
            [
                ['kubejs:molten_diorite_alloy', 90],
                ['kubejs:molten_granite_alloy', 90],
                ['kubejs:molten_andesite_alloy', 90]
            ],
            ['kubejs:molten_rock_core', 120],
            1000
        )

        smeltryCompatibility.commonMelting(
            'kubejs:molten_rock_core',
            [
                ['kubejs:rock_core_ingot', 90, 18.75],
                ['kubejs:rock_core_nugget', 10, 6.25],
                ['kubejs:rock_core_block', 810, 56.25]
            ],
            1000
        )

        smeltryCompatibility.componentMelting('kubejs:molten_rock_core', 'kubejs:rock_core', 4.25, 1000)

        //致密星核
        smeltryCompatibility.materialMelting('kubejs', 'dense_planet_core')

        smeltryCompatibility.commonMelting(
            'kubejs:molten_dense_planet_core',
            [
                ['kubejs:dense_planet_core_ingot', 90, 18.75],
                ['kubejs:dense_planet_core_nugget', 10, 6.25],
                ['kubejs:dense_planet_core_block', 810, 56.25]
            ],
            1500
        )

        smeltryCompatibility.componentMelting(
            'kubejs:molten_dense_planet_core', 'kubejs:dense_planet_core', 
            6.25, 1500
        )

        //异彩化合物
        smeltryCompatibility.materialMelting('create', 'chromatic_compound')

        tconstruct.melting(
            Fluid.of('kubejs:molten_chromatic_compound', 90),
            'create:chromatic_compound',
            1200,
            18.75 * 5.75
        )

        smeltryCompatibility.componentMelting(
            'kubejs:molten_chromatic_compound', 'kubejs:chromatic_compound',
            5.75, 1200
        )

        //光辉石
        smeltryCompatibility.materialMelting('create', 'refined_radiance')

        tconstruct.melting(
            Fluid.of('kubejs:molten_refined_radiance', 90),
            'create:refined_radiance',
            1500,
            18.75 * 6.25
        )

        smeltryCompatibility.componentMelting(
            'kubejs:molten_refined_radiance', 'kubejs:refined_radiance',
            6.25, 1500
        )

        //暗影钢
        smeltryCompatibility.materialMelting('create', 'shadow_steel')

        tconstruct.melting(
            Fluid.of('kubejs:molten_shadow_steel', 90),
            'create:shadow_steel',
            1500,
            18.75 * 6.25
        )

        smeltryCompatibility.componentMelting(
            'kubejs:molten_shadow_steel', 'kubejs:shadow_steel',
            6.25, 1500
        )

        //氧化铝
        tconstruct.melting(
            Fluid.of('tconstruct:molten_aluminum', 60),
            'kubejs:alumina',
            1500,
            18.75 * 4.25
        )

        //安山合金
        smeltryCompatibility.materialMelting('create', 'andesite_alloy')

        tconstruct.melting(
            Fluid.of('kubejs:molten_andesite_alloy', 90),
            'create:andesite_alloy',
            800,
            18.75 * 4.25
        )

        smeltryCompatibility.componentMelting(
            'kubejs:molten_andesite_alloy', 'kubejs:andesite_alloy',
            4.25, 800
        )

        //花岗合金
        smeltryCompatibility.materialMelting('kubejs', 'granite_alloy')

        tconstruct.melting(
            Fluid.of('kubejs:molten_granite_alloy', 90),
            'kubejs:granite_alloy',
            800,
            18.75 * 4.25
        )

        smeltryCompatibility.componentMelting(
            'kubejs:molten_granite_alloy', 'kubejs:granite_alloy',
            4.25, 800
        )

        //闪长合金
        smeltryCompatibility.materialMelting('kubejs', 'diorite_alloy')

        tconstruct.melting(
            Fluid.of('kubejs:molten_diorite_alloy', 90),
            'kubejs:diorite_alloy',
            800,
            18.75 * 4.25
        )

        smeltryCompatibility.componentMelting(
            'kubejs:molten_diorite_alloy', 'kubejs:diorite_alloy',
            4.25, 800
        )

    //铸件台
    
    const castingCompatibility = {

        /**
         * 
         * @param { Internal.Material } modMaterialName 
         * @param { Internal.InputFluid_ } fluidName 
         */
        commonCasting(modMaterialName, fluidName) {

            if (!Item.of(`${ modMaterialName }_nugget`).empty) {
                tconstruct.casting_table(
                    `${modMaterialName}_nugget`,
                    Fluid.of(fluidName, 10),
                    'tconstruct:nugget_cast',
                    false,
                    6.25
                )//粒
            }

            if (!Item.of(`${ modMaterialName }_ingot`).empty) {
                tconstruct.casting_table(
                    `${ modMaterialName }_ingot`,
                    Fluid.of(fluidName, 90),
                    'tconstruct:ingot_cast',
                    false,
                    42.25
                )//锭
            }

            if (!Item.of(`${ modMaterialName }`).empty) {
                tconstruct.casting_table(
                    modMaterialName,
                    Fluid.of(fluidName, 90),
                    'tconstruct:ingot_cast',
                    false,
                    42.25
                )//锭
            }

            if (!Item.of(`${ modMaterialName }_block`).empty) {
                tconstruct.casting_basin(
                    `${modMaterialName}_block`,
                    Fluid.of(fluidName, 810),
                    '#tconstruct:casts/empty/basin',
                    false,
                    162.25
                )//块
            }
        },

        /**
         * 
         * @param { Internal.Material } materialName 
         * @param { Internal.InputFluid_ } fluidName
         * @param { number } temperature 
         */
        componentsCasting(materialName, fluidName, temperature) {
            event.custom({
                "type": "tconstruct:material_fluid",
                "fluid": {
                    "amount": 900,
                    "fluid": fluidName
                },
                "temperature": temperature,
                "output": materialName
            })
        }
    }

        //戴斯
        castingCompatibility.commonCasting(
            'ad_astra:desh',
            'kubejs:molten_desh',
            800
        )

        castingCompatibility.componentsCasting(
            'kubejs:desh',
            'kubejs:molten_desh',
            800
        )

        //紫金
        castingCompatibility.commonCasting(
            'ad_astra:ostrum',
            'kubejs:molten_ostrum',
            800
        )

        castingCompatibility.componentsCasting(
            'kubejs:ostrum',
            'kubejs:molten_ostrum',
            800
        )

        //耐热金属
        castingCompatibility.commonCasting(
            'ad_astra:calorite',
            'kubejs:molten_calorite',
            1500
        )

        castingCompatibility.componentsCasting(
            'kubejs:calorite',
            'kubejs:molten_calorite',
            1500
        )

        //埃忒恩
        castingCompatibility.commonCasting(
            'ad_astra:etrium',
            'kubejs:molten_etrium',
            1200
        )

        castingCompatibility.componentsCasting(
            'kubejs:etrium',
            'kubejs:molten_etrium',
            1200
        )

        //铝合金
        castingCompatibility.commonCasting(
            'kubejs:aluminum_alloy',
            'kubejs:molten_aluminum_alloy',
            610
        )

        castingCompatibility.componentsCasting(
            'kubejs:aluminum_alloy',
            'kubejs:molten_aluminum_alloy',
            610
        )

        //锌
        castingCompatibility.commonCasting(
            'create:zinc',
            'kubejs:molten_zinc',
            420
        )

        castingCompatibility.componentsCasting(
            'kubejs:zinc',
            'kubejs:molten_zinc',
            420
        )

        //虚空钢
        castingCompatibility.commonCasting(
            'createutilities:void_steel',
            'kubejs:molten_void_steel',
            1500
        )

        castingCompatibility.componentsCasting(
            'kubejs:void_steel',
            'kubejs:molten_void_steel',
            1500
        )

        //岩核
        castingCompatibility.commonCasting(
            'kubejs:rock_core',
            'kubejs:molten_rock_core',
            1000
        )

        castingCompatibility.componentsCasting(
            'kubejs:rock_core',
            'kubejs:molten_rock_core',
            1000
        )

        //致密星核
        castingCompatibility.commonCasting(
            'kubejs:dense_planet_core',
            'kubejs:molten_dense_planet_core',
            1500
        )

        castingCompatibility.componentsCasting(
            'kubejs:dense_planet_core',
            'kubejs:molten_dense_planet_core',
            1500
        )

        //异彩化合物
        castingCompatibility.commonCasting(
            'create:chromatic_compound',
            'kubejs:molten_chromatic_compound',
            1200
        )

        castingCompatibility.componentsCasting(
            'kubejs:chromatic_compound',
            'kubejs:molten_chromatic_compound',
            1200
        )

        //光辉石
        castingCompatibility.commonCasting(
            'create:refined_radiance',
            'kubejs:molten_refined_radiance',
            1500
        )

        castingCompatibility.componentsCasting(
            'kubejs:refined_radiance',
            'kubejs:molten_refined_radiance',
            1500
        )

        //暗影钢
        castingCompatibility.commonCasting(
            'create:shadow_steel',
            'kubejs:molten_shadow_steel',
            1500
        )

        castingCompatibility.componentsCasting(
            'kubejs:shadow_steel',
            'kubejs:molten_shadow_steel',
            1500
        )
})