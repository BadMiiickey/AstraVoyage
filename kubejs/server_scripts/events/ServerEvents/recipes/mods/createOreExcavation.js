ServerEvents.recipes(event => {
    
    const { createoreexcavation } = event.recipes
    
    //岩浆囊
    createoreexcavation.vein('§4§l岩浆囊', 'minecraft:lava_bucket')
        .placement(128, 8, 8192)
        .biomeWhitelist('minecraft:is_nether')
        .priority(8192)
        .id('kubejs:magma_sac_stage_vein')
    createoreexcavation.extracting('minecraft:lava 125', 'kubejs:magma_sac_stage_vein', 20)
        .stress(4)
        .fluid(Fluid.of('ad_astra:cryo_fuel', 10))
        .drill('createoreexcavation:netherite_drill')
        .id('kubejs:vein_magma_sac_stage')

    //酸液囊
    createoreexcavation.vein('§7§l酸液囊', 'kubejs:acid_bucket')
        .placement(128, 8, 8193)
        .biomeWhitelist('kubejs:is_wasteland')
        .priority(8191)
        .id('kubejs:acid_stage_vein')
    createoreexcavation.extracting('kubejs:acid 125', 'kubejs:acid_stage_vein', 20)
        .stress(4)
        .fluid(Fluid.of('minecraft:water', 10))
        .id('kubejs:vein_acid_stage')

    //煤炭矿脉
    createoreexcavation.vein('§8§l煤炭矿脉', 'minecraft:coal')
        .placement(128, 8, 16384)
        .biomeWhitelist('minecraft:is_overworld')
        .priority(4096)
        .id('kubejs:coal_vein')
    createoreexcavation.drilling('minecraft:coal', 'kubejs:coal_vein', 20)
        .stress(8)
        .fluid(Fluid.of('minecraft:water', 10))
        .id('kubejs:vein_coal')

    //下界石英矿脉
    createoreexcavation.vein('§f§l下界石英矿脉', 'minecraft:quartz')
        .placement(128, 8, 32768)
        .biomeWhitelist('minecraft:is_nether')
        .priority(2048)
        .id('kubejs:quartz_vein')
    createoreexcavation.drilling(
        [
            'minecraft:quartz', 
            Item.of('minecraft:sand').withChance(0.1), 
            Item.of('minecraft:gravel').withChance(0.05)
        ],
        'kubejs:quartz_vein', 20
    )
    .stress(8)
    .fluid(Fluid.of('ad_astra:cryo_fuel', 10))
    .id('kubejs:vein_quartz')

    //萤石矿脉
    createoreexcavation.vein('§e§l萤石矿脉', 'minecraft:glowstone_dust')
        .placement(128, 8, 32767)
        .biomeWhitelist('minecraft:is_nether')
        .priority(2047)
        .id('kubejs:glowstone_dust_vein')
    createoreexcavation.drilling(
        [
            'minecraft:glowstone_dust', 
            Item.of('minecraft:raw_iron').withChance(0.01)
        ], 
        'kubejs:glowstone_dust_vein', 20
    )
    .stress(8)
    .fluid(Fluid.of('ad_astra:cryo_fuel', 10))
    .id('kubejs:vein_glowstone_dust')

    //粗铜矿脉
    createoreexcavation.vein('§6§l粗铜矿脉', 'minecraft:raw_copper')
        .placement(128, 8, 65538)
        .biomeWhitelist('minecraft:is_overworld')
        .priority(1026)
        .id('kubejs:raw_copper_vein')
    createoreexcavation.drilling('minecraft:raw_copper', 'kubejs:raw_copper_vein', 20)
        .stress(8)
        .fluid(Fluid.of('minecraft:water', 10))
        .id('kubejs:vein_copper')

    //粗锌矿脉
    createoreexcavation.vein('§a§l粗锌矿脉', 'create:raw_zinc')
        .placement(128, 8, 65537)
        .biomeWhitelist('minecraft:is_overworld')
        .priority(1025)
        .id('kubejs:raw_zinc_vein')
    createoreexcavation.drilling(
        [
            'create:raw_zinc',
            Item.of('minecraft:raw_copper').withChance(0.05),
        ],
        'kubejs:raw_zinc_vein', 20
    )
    .stress(8)
    .fluid(Fluid.of('minecraft:water', 10))
    .id('kubejs:vein_zinc')

    //粗铁矿脉
    createoreexcavation.vein('§6§l粗铁矿脉', 'minecraft:raw_iron')
        .placement(128, 8, 65536)
        .biomeWhitelist('kubejs:is_mars')
        .priority(1024)
        .id('kubejs:raw_iron_vein')
    createoreexcavation.drilling('minecraft:raw_iron', 'kubejs:raw_iron_vein', 20)
        .stress(8)
        .fluid(Fluid.of('minecraft:water', 10))
        .id('kubejs:vein_iron')

    //红石原石矿脉
    createoreexcavation.vein('§4§l红石原石矿脉', 'createoreexcavation:raw_redstone')
        .placement(128,8, 65534)
        .biomeWhitelist('minecraft:is_overworld')
        .priority(1022)
        .id('kubejs:redstone_vein')
    createoreexcavation.drilling('createoreexcavation:raw_redstone', 'kubejs:redstone_vein', 20)
        .stress(8)
        .fluid(Fluid.of('minecraft:water', 10))
        .id('kubejs:vein_redstone')

    //粗金矿脉
    createoreexcavation.vein('§e§l粗金矿脉', 'minecraft:raw_gold')
        .placement(128, 16, 131072)
        .biomeWhitelist('minecraft:is_overworld')
        .priority(512)
        .id('kubejs:raw_gold_vein')
    createoreexcavation.drilling('minecraft:raw_gold', 'kubejs:raw_gold_vein', 20)
        .stress(8)
        .fluid(Fluid.of('minecraft:water', 20))
        .id('kubejs:vein_gold')
    
    //青金石矿脉
    createoreexcavation.vein('§1§l青金石矿脉', 'minecraft:lapis_lazuli')
        .placement(128, 16, 131071)
        .biomeWhitelist('minecraft:is_overworld')
        .priority(511)
        .id('kubejs:lapis_lazuli_vein')
    createoreexcavation.drilling(
        [
            'minecraft:lapis_lazuli',
            Item.of('minecraft:calcite').withChance(0.1)
        ],
        'kubejs:lapis_lazuli_vein', 20
    )
    .stress(8)
    .fluid(Fluid.of('minecraft:water', 10))
    .id('kubejs:vein_lapis_lazuli')

    //钻石原石矿脉
    createoreexcavation.vein('§3§l钻石原石矿脉', 'createoreexcavation:raw_diamond')
        .placement(256, 32, 262144)
        .biomeWhitelist('minecraft:is_overworld')
        .priority(256)
        .id('kubejs:raw_diamond_vein')
    createoreexcavation.drilling(
        [
            'createoreexcavation:raw_diamond',
            Item.of('minecraft:coal').withChance(0.1)
        ],
        'kubejs:raw_diamond_vein', 20
    )
    .stress(16)
    .fluid(Fluid.of('minecraft:water', 20))
    .id('kubejs:vein_diamond')

    //绿宝石原石矿脉
    createoreexcavation.vein('§2§l绿宝石原石矿脉', 'createoreexcavation:raw_emerald')
        .placement(256, 32, 524288)
        .biomeWhitelist('minecraft:is_overworld')
        .priority(128)
        .id('kubejs:raw_emerald_vein')
    createoreexcavation.drilling('createoreexcavation:raw_emerald', 'kubejs:raw_emerald_vein', 20)
        .stress(8)
        .fluid(Fluid.of('minecraft:water', 10))
        .id('kubejs:vein_emerald')

    //远古残骸矿脉
    createoreexcavation.vein('§6§l远古残骸矿脉', 'minecraft:ancient_debris')
        .placement(256, 32, 1050976)
        .biomeWhitelist('minecraft:is_nether')
        .priority(64)
        .id('kubejs:ancient_debris_vein')
    createoreexcavation.drilling(
        [
            'minecraft:ancient_debris',
            Item.of('minecraft:obsidian').withChance(0.2)
        ],
        'kubejs:ancient_debris_vein', 20
    )
    .stress(32)
    .fluid(Fluid.of('ad_astra:cryo_fuel', 20))
    .drill(['createoreexcavation:diamond_drill', 'createoreexcavation:netherite_drill'])
    .id('kubejs:vein_ancient_debris')

    //紫水晶矿脉
    createoreexcavation.vein('§d§l紫水晶矿脉', 'minecraft:amethyst_shard')
        .placement(256, 32, 1050975)
        .biomeWhitelist('minecraft:is_overworld')
        .priority(63)
        .id('kubejs:amethyst_shard_vein')
    createoreexcavation.drilling(
        [
            'minecraft:amethyst_shard',
            Item.of('minecraft:amethyst_shard').withChance(0.1)
        ],
        'kubejs:amethyst_shard_vein', 20
    )
    .stress(32)
    .fluid(Fluid.of('minecraft:water', 20))
    .id('kubejs:vein_amethyst_shard')

    //粗戴斯矿脉
    createoreexcavation.vein('§6§l粗戴斯矿脉', 'ad_astra:raw_desh')
        .placement(128, 8, 2101952)
        .biomeWhitelist('kubejs:is_moon')
        .priority(32)
        .id('kubejs:raw_desh_vein')
    createoreexcavation.drilling('ad_astra:raw_desh', 'kubejs:raw_desh_vein', 20)
        .stress(16)
        .fluid(Fluid.of('minecraft:water', 10))
        .id('kubejs:vein_raw_desh')

    //粗紫金矿脉
    createoreexcavation.vein('§9§l粗紫金矿脉', 'ad_astra:raw_ostrum')
        .placement(128, 8, 2101951)
        .biomeWhitelist('kubejs:is_mars')
        .priority(31)
        .id('kubejs:raw_ostrum_vein')
    createoreexcavation.drilling(
        [
            'ad_astra:raw_ostrum',
            Item.of('minecraft:raw_iron').withChance(0.1)
        ],
        'kubejs:raw_ostrum_vein', 20
    )
    .stress(32)
    .fluid(Fluid.of('minecraft:water', 20))
    .id('kubejs:vein_raw_ostrum')

    //粗耐热金属矿脉
    createoreexcavation.vein('§c§l粗耐热金属矿脉', 'ad_astra:raw_calorite')
        .placement(128, 8, 2101950)
        .biomeWhitelist('kubejs:is_venus')
        .priority(30)
        .id('kubejs:raw_calorite_vein')
    createoreexcavation.drilling(
        'ad_astra:raw_calorite',
        'kubejs:raw_calorite_vein', 20
    )
    .stress(64)
    .fluid(Fluid.of('ad_astra:cryo_fuel', 30))
    .id('kubejs:vein_raw_calorite')

    //粗铅矿脉
    createoreexcavation.vein('§d§l粗铅矿脉', 'createnuclear:raw_lead')
        .placement(128, 8, 2101951)
        .biomeWhitelist('kubejs:is_wasteworld')
        .priority(31)
        .id('kubejs:raw_lead_vein')
    createoreexcavation.drilling(
        [
            'createnuclear:raw_lead',
            Item.of('minecraft:raw_iron').withChance(0.1)
        ],
        'kubejs:raw_lead_vein', 20
    )   
    .stress(64)
    .fluid(Fluid.of('minecraft:water', 20))
    .id('kubejs:vein_raw_lead')

    //粗铀矿脉
    createoreexcavation.vein('§2§l粗铀矿脉', 'createnuclear:raw_uranium')
        .placement(128, 8, 2101952)
        .biomeWhitelist('kubejs:is_wasteworld')
        .priority(32)
        .id('kubejs:raw_uranium')
    createoreexcavation.drilling('createnuclear:raw_uranium', 'kubejs:raw_uranium_vein', 20)
        .stress(64)
        .fluid(Fluid.of('ad_astra:cryo_fuel', 20))
        .id('kubejs:vein_raw_uranium')

    //粗钴矿脉
    createoreexcavation.vein('§1§l粗钴矿脉', 'tconstruct:raw_cobalt')
        .placement(256, 16, 2101953)
        .biomeWhitelist('minecraft:is_nether')
        .priority(32)
        .id('kubejs:raw_cobalt_vein')
    createoreexcavation.drilling('tconstruct:raw_cobalt', 'kubejs:raw_cobalt_vein', 20)
        .stress(64)
        .fluid(Fluid.of('ad_astra:cryo_fuel', 20))
        .drill(['createoreexcavation:diamond_drill', 'createoreexcavation:netherite_drill'])
        .id('kubejs:vein_raw_cobalt')

    //粗铝矿脉
    createoreexcavation.vein('§7§l粗铝土矿脉', 'kubejs:raw_bauxite')
    .placement(256, 16, 2101953)
        .biomeWhitelist('minecraft:is_overworld')
        .priority(32)
        .id('kubejs:raw_bauxite_vein')
    createoreexcavation.drilling('kubejs:raw_bauxite', 'kubejs:raw_bauxite_vein', 20)
        .stress(64)
        .fluid(Fluid.of('minecraft:water', 20))
        .id('kubejs:vein_raw_bauxite')

    //寒冰碎片矿脉
    createoreexcavation.vein('§b§l寒冰碎片矿脉', 'ad_astra:ice_shard')
        .placement(256, 16, 2101954)
        .biomeWhitelist('kubejs:is_iceworld')
        .priority(32)
        .id('ad_astra:ice_shard_vein')
    createoreexcavation.drilling('ad_astra:ice_shard', 'ad_astra:ice_shard_vein', 20)
        .stress(8)
        .fluid(Fluid.of('minecraft:water', 20))
        .id('kubejs:vein_ice_shard')

    //粗银矿脉
    createoreexcavation.vein('§f§l粗银矿脉', 'kubejs:raw_silver')
        .placement(256, 16, 2101955)
        .biomeWhitelist('kubejs:is_mercury')
        .priority(32)
        .id('kubejs:raw_silver_vein')
    createoreexcavation.drilling('kubejs:raw_silver', 'kubejs:raw_silver_vein', 20)
        .stress(16)
        .fluid(Fluid.of('minecraft:water', 20))
        .id('kubejs:vein_raw_silver')
})