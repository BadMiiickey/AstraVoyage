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
            Item.of('create:copper_nugget', 2)
        ]
    ).id('kubejs:mixing_diorite_alloy')//闪长合金

    create.mixing(
        'kubejs:acid_silicon',
        [
            Item.of('kubejs:crushed_raw_silicon', 2),
            Fluid.of('kubejs:acid', 100)
        ]
    ).id('kubejs:mixing_acid_silicon')//酸性硅

    create.mixing(
        'kubejs:rock_core_ingot',
        [
            'kubejs:diorite_alloy',
            'create:andesite_alloy',
            'kubejs:granite_alloy'
        ]
    ).id('kubejs:mixing_rock_core_ingot')//岩核锭

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
})
