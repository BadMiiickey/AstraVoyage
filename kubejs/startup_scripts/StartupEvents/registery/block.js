StartupEvents.registry('block', event => {

    //铝土矿石
    event.create('kubejs:bauxite_ore', 'basic')
        .hardness(2.0)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .stoneSoundType()

    //深层铝土矿石
    event.create('kubejs:deepslate_bauxite_ore', 'basic')
        .hardness(2.5)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .stoneSoundType()

    //铝块
    event.create('kubejs:aluminum_block', 'basic')
        .hardness(1.5)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .stoneSoundType()

    //铝合金块
    event.create('kubejs:aluminum_alloy_block', 'basic')
        .hardness(3.0)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_diamond_tool')
        .stoneSoundType()

    //花岗合金块
    event.create('kubejs:granite_alloy_block', 'basic')
        .hardness(2.0)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .stoneSoundType()

    //闪长合金块
    event.create('kubejs:diorite_alloy_block', 'basic')
        .hardness(2.0)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .stoneSoundType()

    //岩核块
    event.create('kubejs:rock_core_block', 'basic')
        .hardness(3.0)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_diamond_tool')
        .stoneSoundType()

    //简易工业平台
    event.create('kubejs:simple_industrial_platform', 'basic')
        .hardness(1.0)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .stoneSoundType()

    //致密星核块
    event.create('kubejs:dense_planet_core_block', 'basic')
        .hardness(4.0)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_netherite_tool')
        .stoneSoundType()

    //流光水晶
    event.create('kubejs:luminous_pearl', 'basic')
        .waterlogged()
        .fullBlock(false)
        .defaultCutout()
        .opaque(false)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .glassSoundType()
        .lightLevel(1)
        .item(item => {
            item.unstackable()
            item.tag('curios:belt')
        })

    //钢燃料储罐
    event.create('kubejs:steel_tank', 'basic')
        .hardness(2.0)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .tagBlock('create:wrench_pickup')
        .stoneSoundType()

    //戴斯燃料储罐
    event.create('kubejs:desh_tank', 'basic')
        .hardness(2.5)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .tagBlock('create:wrench_pickup')
        .stoneSoundType()

    //紫金燃料储罐
    event.create('kubejs:ostrum_tank', 'basic')
        .hardness(3.0)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .tagBlock('create:wrench_pickup')
        .stoneSoundType()
        
    //耐热金属燃料储罐
    event.create('kubejs:calorite_tank', 'basic')
        .hardness(3.5)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .tagBlock('create:wrench_pickup')
        .stoneSoundType()
})