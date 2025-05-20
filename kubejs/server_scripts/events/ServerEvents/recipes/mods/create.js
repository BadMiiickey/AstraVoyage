ServerEvents.recipes(event => {
    
    const { create } = event.recipes

    //动力辊压机
        //压块
        create.compacting(
            'minecraft:magma_block',
            [
                Fluid.of('minecraft:lava', 250),
                Item.of('supplementaries:ash', 4)
            ]
        ).id('kubejs:compacting_magma_block')//岩浆块
        
        create.compacting(
            'minecraft:netherrack',
            [
                Fluid.of('minecraft:lava', 20),
                'minecraft:cobblestone',
                'minecraft:rotten_flesh'
            ]
        )
        .heated()
        .id('kubejs:compacting_netherrack')//下界岩

        create.compacting(
            'create:blaze_cake_base',
            [
                'create:cinder_flour',
                'supplementaries:ash',
                'minecraft:sugar',
                '#forge:eggs'
            ]
        ).id('kubejs:compacting_blaze_cake_base')//烈焰蛋糕胚

        //压片
        create.pressing(
            'create:golden_sheet',
            'minecraft:gold_ingot'
        ).id('kubejs:pressing_golden_sheet')//金板

        create.pressing(
            'ad_astra:etrium_plate',
            'ad_astra:etrium_ingot'
        ).id('kubejs:pressing_etrium_plate')//埃忒恩板

        create.pressing(
            'kubejs:aluminum_sheet',
            'kubejs:aluminum_ingot'
        ).id('kubejs:pressing_aluminum_sheet')//铝板

        create.pressing(
            'kubejs:aluminum_alloy_sheet',
            'kubejs:aluminum_alloy_ingot'
        ).id('kubejs:pressing_aluminum_alloy_sheet')//铝合金板

        create.pressing(
            'kubejs:silicon_sheet',
            'refinedstorage:silicon'
        ).id('kubejs:pressing_silicon_sheet')//硅板

        create.pressing(
            'kubejs:rock_core_sheet',
            'kubejs:rock_core_ingot'
        ).id('kubejs:pressing_rock_core_sheet')//岩核板

        create.pressing(
            'kubejs:dense_planet_core_sheet',
            'kubejs:dense_planet_core_ingot'
        ).id('kubejs:pressing_dense_planet_core_sheet')//压缩星核板

    //动力搅拌机
    create.mixing(
        'ad_astra:steel_ingot',
        [
            'minecraft:iron_ingot',
            'createnuclear:coal_dust'
        ]
    )
    .superheated()
    .id('kubejs:mixing_steel_ingot')//钢锭
    
    create.mixing(
        'create:rose_quartz',
        [
            'kubejs:quartz_dust',
            'minecraft:redstone',
            'minecraft:iron_ingot'
        ]
    )
    .heated()
    .id('kubejs:mixing_rose_quartz')//玫瑰石英

    create.mixing(
        'ad_astra:etrium_ingot',
        [
            'ad_astra:calorite_ingot',
            'ad_astra:desh_ingot',
            'ad_astra:ostrum_ingot'
        ]
    )
    .superheated()
    .id('kubejs:mixing_etrium_ingot')//埃忒恩锭

    create.mixing(
        'createutilities:void_steel_ingot',
        [
            'ad_astra:etrium_ingot',
            'minecraft:netherite_ingot',
            'minecraft:ender_pearl'
        ]
    )
    .superheated()
    .id('kubejs:mixing_void_steel_ingot')//虚空钢锭

    create.mixing(
        Fluid.of('minecraft:lava', 1000),
        Ingredient.of('#forge:cobblestone')
    )
    .superheated()
    .id('kubejs:mixing_lava')//熔岩

    create.mixing(
        Item.of('tconstruct:pig_iron_ingot', 9),
        [
            Item.of('minecraft:iron_ingot', 9),
            Item.of('tconstruct:blood_slime_sapling', 9),
            Fluid.of('create:honey', 1000)
        ]
    )
    .heated()
    .id('kubejs:mixing_pig_iron_ingot')//生铁锭

    create.mixing(
        [
            Fluid.of('kubejs:aluminate_solution', 100),
            Item.of('minecraft:iron_nugget').withChance(0.25)
        ],
        [
            'kubejs:crushed_bauxite',
            Fluid.of('kubejs:acid', 100)
        ]
    )
    .heated()
    .id('kubejs:mixing_aluminate_solution')//铝酸盐溶液

    create.mixing(
        [
            'kubejs:aluminum_hydroxide',
            Fluid.of('minecraft:water', 90)
        ],
        Fluid.of('kubejs:aluminate_solution', 100)
    )
    .superheated()
    .id('kubejs:mixing_aluminum_hydroxide')//氢氧化铝

    create.mixing(
        'refinedstorage:quartz_enriched_iron',
        [
            Item.of('minecraft:iron_ingot', 3),
            'kubejs:quartz_dust'
        ]
    )
    .heated()
    .id('kubejs:mixing_quartz_enriched_iron')//富石英铁

    create.mixing(
        'kubejs:raw_silicon',
        [
            Item.of('kubejs:quartz_dust', 2),
            '#minecraft:coals'
        ]
    )
    .heated()
    .id('kubejs:mixing_raw_silicon')//粗硅

    create.mixing(
        Item.of('kubejs:aluminum_alloy_ingot', 3),
        [
            Item.of('kubejs:aluminum_ingot', 3),
            'create:zinc_ingot',
            'minecraft:copper_ingot'
        ]
    )
    .heated()
    .id('kubejs:mixing_aluminum_alloy_ingot')//铝合金锭

    create.mixing(
        'kubejs:granite_alloy',
        [
            Item.of('minecraft:granite', 2),
            Item.of('supplementaries:ash', 2)
        ]
    ).id('kubejs:mixing_granite_alloy')//花岗合金

    create.mixing(
        'kubejs:diorite_alloy',
        [
            Item.of('minecraft:diorite', 2),
            Item.of('create:zinc_nugget', 2)
        ]
    ).id('kubejs:mixing_diorite_alloy')//闪长合金

    create.mixing(
        'kubejs:acid_silicon',
        [
            Item.of('kubejs:crushed_raw_silicon', 2),
            Fluid.of('kubejs:acid', 100)
        ]
    ).id('kubejs:mixing_acid_silicon')//酸性硅

    //鼓风机
        //洗涤
        create.splashing(
            'minecraft:calcite',
            'minecraft:tuff'
        ).id('kubejs:splashing_calcite')//方解石

        create.splashing(
            [
                Item.of('ad_astra:desh_nugget', 9),
                Item.of('minecraft:glowstone_dust').withChance(0.5)
            ],
            'kubejs:crushed_raw_desh'
        ).id('kubejs:splashing_desh_nugget')//戴斯粒

        create.splashing(
            [
                Item.of('ad_astra:ostrum_nugget', 9),
                Item.of('minecraft:amethyst_shard').withChance(0.25)
            ],
            'kubejs:crushed_raw_ostrum'
        ).id('kubejs:splashing_ostrum_nugget')//紫金粒

        create.splashing(
            [
                Item.of('ad_astra:calorite_nugget', 9),
                Item.of('minecraft:magma_cream').withChance(0.25)
            ],
            'kubejs:crushed_raw_calorite'
        ).id('kubejs:splashing_calorite_nugget')//耐热金属粒

        create.splashing(
            'refinedstorage:silicon',
            'kubejs:acid_silicon'
        ).id('kubejs:splashing_silicon')//硅

    //注液器
    create.filling(
        'homeostatic:purified_water_bottle',
        [
            'minecraft:glass_bottle',
            Fluid.of('homeostatic:purified_water', 250)
        ]
    ).id('kubejs:filling_purified_water_bottle')//纯净水瓶

    //粉碎轮

    /**
     * 
     * @param { Internal.ItemStack } output 
     * @param { Internal.List<Internal.ItemStack> } inputs 
     * @param { Internal.ItemStack } byProduct 
     */
    function crushingCompatibility(output, inputs, byProduct) {
        inputs.forEach(input => {

            let stringOutput = output.toString().replace(':', '_')
            let stringInput = input.toString()
            let id = `kubejs:crushing_${stringOutput}/${stringInput.replace(':', '_')}`

            if (stringInput.includes('deepslate')) {
                create.crushing(
                    [
                        output,
                        Item.of(output, 2).withChance(0.75),
                        Item.of('create:experience_nugget').withChance(0.75),
                        Item.of('minecraft:deepslate').withChance(0.12)
                    ],
                    input
                )
                .id(id)//深层矿
            } else if (stringInput.includes('ore') && !stringInput.includes('deepslate')) { 
                create.crushing(
                    [
                        output,
                        Item.of(output).withChance(0.75),
                        Item.of('create:experience_nugget').withChance(0.75),
                        Item.of(byProduct).withChance(0.12)
                    ],
                    input
                )
                .id(id)//浅层矿
            } else if (stringInput.includes('block')) {
                create.crushing(
                    [
                        Item.of(output, 9),
                        Item.of('create:experience_nugget', 9).withChance(0.75)
                    ],
                    input
                )
                .id(id)//粗矿块
            } else {
                create.crushing(
                    [
                        output,
                        Item.of('create:experience_nugget').withChance(0.75)
                    ],
                    input
                ).id(id)//粗矿
            }
        })
    }
        //粉碎戴斯矿石
        crushingCompatibility(
            'kubejs:crushed_raw_desh',
            [
                'ad_astra:moon_desh_ore',
                'ad_astra:deepslate_desh_ore',
                'ad_astra:raw_desh',
                'ad_astra:raw_desh_block'
            ],
            'ad_astra:moon_cobblestone'
        )

        //粉碎紫金矿石
        crushingCompatibility(
            'kubejs:crushed_raw_ostrum',
            [
                'ad_astra:mars_ostrum_ore',
                'ad_astra:deepslate_ostrum_ore',
                'ad_astra:raw_ostrum',
                'ad_astra:raw_ostrum_block'
            ],
            'ad_astra:mars_cobblestone'
        )

        //粉碎耐热金属矿石
        crushingCompatibility(
            'kubejs:crushed_raw_calorite',
            [
                'ad_astra:venus_calorite_ore',
                'ad_astra:deepslate_calorite_ore',
                'ad_astra:raw_calorite',
                'ad_astra:raw_calorite_block'
            ],
            'ad_astra:venus_cobblestone'
        )

        //粉碎铝土矿石
        crushingCompatibility(
            'kubejs:crushed_bauxite',
            [
                'kubejs:bauxite_ore',
                'kubejs:deepslate_bauxite_ore',
                'kubejs:raw_aluminum'
            ],
            'minecraft:cobblestone'
        )

    create.crushing(
        'kubejs:crushed_raw_silicon',
        'kubejs:raw_silicon'
    ).id('kubejs:crushing_crushed_raw_silicon')//粉碎粗硅

    //机械手

    /**
     * 
     * @param { Internal.List<[planet: string, input: Internal.ItemStack]> } planets
     */
    function globeDeploying(planets) {
        planets.forEach(planet => {
            create.deploying(
                `ad_astra:${planet[0]}_globe`,
                [
                    'create:golden_sheet',
                    planet[1]
                ]
            ).id(`kubejs:deploying_${planet[0]}_globe`)
        })
    }

    globeDeploying(
        [
            ['earth', 'minecraft:grass_block'],
            ['moon', 'ad_astra:moon_sand'],
            ['mars', 'ad_astra:mars_sand'],
            ['mercury', 'ad_astra:mercury_stone'],
            ['venus', 'ad_astra:venus_sand'],
            ['glacio', 'ad_astra:glacio_stone']
        ]
    )
        
    //动力合成器
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

    //序列合成
    create.sequenced_assembly(
        'kubejs:guardian_shield',
        'ad_astra:etrium_plate',
        [
            create.deploying(
                'kubejs:incomplete_guardian_shield',
                [
                    'ad_astra:etrium_plate',
                    'quark:diamond_heart'
                ]
            ),
            create.pressing(
                'kubejs:incomplete_guardian_shield',
                'kubejs:incomplete_guardian_shield'
            ),
            create.filling(
                'kubejs:incomplete_guardian_shield',
                [
                    'kubejs:incomplete_guardian_shield',
                    Fluid.of('kubejs:molten_etrium', 150)
                ]
            ),
            create.deploying(
                'kubejs:incomplete_guardian_shield',
                [
                    'kubejs:incomplete_guardian_shield',
                    'supplementaries:bomb'
                ]
            )
        ],
        'kubejs:incomplete_guardian_shield',
        5
    ).id('kubejs:sequenced_assembly_guardian_shield')//守护之盾

    create.sequenced_assembly(
        'kubejs:rock_core_mechanism',
        'kubejs:rock_core_sheet',
        [
            create.deploying(
                'kubejs:incomplete_rock_core_mechanism',
                [
                    'kubejs:incomplete_rock_core_mechanism',
                    'tconstruct:grout'
                ]
            ),
            create.filling(
                'kubejs:incomplete_rock_core_mechanism',
                [
                    'kubejs:rock_core_mechanism',
                    Fluid.of('minecraft:water', 1000)
                ]
            ),
            create.deploying(
                'kubejs:incomplete_rock_core_mechanism',
                [
                    'kubejs:incomplete_rock_core_mechanism',
                    'create:cogwheel'
                ]
            )
        ],
        'kubejs:incomplete_rock_core_mechanism',
        3
    ).id('kubejs:sequenced_assembly_rock_core_mechanism')//岩核构件

    create.sequenced_assembly(
        'kubejs:electronic_mechanism',
        'kubejs:silicon_sheet',
        [
            create.deploying(
                'kubejs:incomplete_electronic_mechanism',
                [
                    'kubejs:incomplete_electronic_mechanism',
                    'create:electron_tube'
                ]
            ),
            create.deploying(
                'kubejs:incomplete_electronic_mechanism',
                [
                    'kubejs:incomplete_electronic_mechanism',
                    'createaddition:copper_wire'
                ]
            ),
            create.deploying(
                'kubejs:incomplete_electronic_mechanism',
                [
                    'kubejs:incomplete_electronic_mechanism',
                    'kubejs:aluminum_sheet'
                ]
            ),
            create.pressing(
                'kubejs:incomplete_electronic_mechanism',
                'kubejs:incomplete_electronic_mechanism'
            )
        ],
        'kubejs:incomplete_electronic_mechanism',
        5
    ).id('kubejs:sequenced_assembly_electronic_mechanism')//电力构件

    create.sequenced_assembly(
        'kubejs:dense_planet_core_mechanism',
        'kubejs:dense_planet_core_sheet',
        [
            create.deploying(
                'kubejs:incomplete_dense_planet_core_mechanism',
                [
                    'kubejs:incomplete_dense_planet_core_mechanism',
                    'ad_astra:etrium_plate'
                ]
            ),
            create.filling(
                'kubejs:incomplete_dense_planet_core_mechanism',
                [
                    'kubejs:incomplete_dense_planet_core_mechanism',
                    Fluid.of('tconstruct:molten_amethyst', 500)
                ]
            ),
            create.deploying(
                'kubejs:incomplete_dense_planet_core_mechanism',
                [
                    'kubejs:incomplete_dense_planet_core_mechanism',
                    'kubejs:aluminum_alloy_sheet'
                ]
            ),
            create.pressing(
                'kubejs:incomplete_dense_planet_core_mechanism',
                'kubejs:incomplete_dense_planet_core_mechanism'
            )
        ],
        'kubejs:incomplete_dense_planet_core_mechanism',
        5
    ).id('kubejs:sequenced_assembly_dense_planet_core_mechanism')//压缩星核构件

    create.sequenced_assembly(
        'kubejs:echo_mechanism',
        'minecraft:echo_shard',
        [
            create.deploying(
                'kubejs:incomplete_echo_mechanism',
                [
                    'kubejs:incomplete_echo_mechanism',
                    'minecraft:amethyst_shard'
                ]
            ),
            create.deploying(
                'kubejs:incomplete_echo_mechanism',
                [
                    'kubejs:incomplete_echo_mechanism',
                    'quark:clear_shard'
                ]
            ),
            create.pressing(
                'kubejs:incomplete_echo_mechanism',
                'kubejs:incomplete_echo_mechanism'
            )
        ],
        'kubejs:incomplete_echo_mechanism',
        3
    ).id('kubejs:sequenced_assembly_echo_mechanism')//回响构件

    create.sequenced_assembly(
        'kubejs:creative_mechanism',
        'createutilities:void_steel_sheet',
        [
            create.deploying(
                'kubejs:incomplete_creative_mechanism',
                [
                    'kubejs:incomplete_creative_mechanism',
                    'createutilities:graviton_tube'
                ]
            ),
            create.filling(
                'kubejs:incomplete_creative_mechanism',
                [
                    'kubejs:incomplete_creative_mechanism',
                    Fluid.of('kubejs:molten_shadow_steel', 1000)
                ]
            ),
            create.deploying(
                'kubejs:incomplete_creative_mechanism',
                [
                    'kubejs:incomplete_creative_mechanism',
                    'kubejs:dense_planet_core_mechanism'
                ]
            ),
            create.pressing(
                'kubejs:incomplete_creative_mechanism',
                'kubejs:incomplete_creative_mechanism'
            ),
            create.filling(
                'kubejs:incomplete_creative_mechanism',
                [
                    'kubejs:incomplete_creative_mechanism',
                    Fluid.of('kubejs:molten_refined_radiance', 1000)
                ]
            )
        ],
        'kubejs:incomplete_creative_mechanism',
        7
    ).id('kubejs:sequenced_assembly_creative_mechanism')//创造构件
})
