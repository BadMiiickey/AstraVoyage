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

    //银矿石
    event.create('kubejs:silver_ore', 'basic')
        .hardness(2.0)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .stoneSoundType()

    //深层银矿石
    event.create('kubejs:deepslate_silver_ore', 'basic')
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
        
    //致密星核块
    event.create('kubejs:dense_planet_core_block', 'basic')
        .hardness(4.0)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_netherite_tool')
        .stoneSoundType()

    //银块
    event.create('kubejs:silver_block', 'basic')
        .hardness(1.5)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .stoneSoundType()

    //简易工业平台
    event.create('kubejs:simple_industrial_platform', 'basic')
        .hardness(1.0)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .stoneSoundType()
        .blockEntity(info => {
            info.tick(20 * 2.5, 0, blockEntity => {
                multiblockCheck.platform(blockEntity)
            })
        })

    //月华流晶
    event.create('kubejs:luminous_pearl')
        .waterlogged()
        .fullBlock(false)
        .defaultCutout()
        .opaque(false)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .tagBlock('minecraft:crystal_sound_blocks')
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
        .blockEntity(info => {
            info.tick(blockEntity => {
                if (!blockEntity.persistentData) {
                    blockEntity.persistentData = {
                        hasBuildCorrectly: false,
                        failedMessageHasSent: false,
                        hasBuilt: false,
                    }
                }
                multiblockCheck.steelTank(blockEntity)
            })
        })

    //戴斯燃料储罐
    event.create('kubejs:desh_tank', 'basic')
        .hardness(2.5)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .tagBlock('create:wrench_pickup')
        .stoneSoundType()
        .blockEntity(info => {
            info.tick(blockEntity => {
                if (!blockEntity.persistentData) {
                    blockEntity.persistentData = {
                        hasBuildCorrectly: false,
                        failedMessageHasSent: false,
                        hasBuilt: false,
                    }
                }
                multiblockCheck.deshTank(blockEntity)
            })
        })

    //紫金燃料储罐
    event.create('kubejs:ostrum_tank', 'basic')
        .hardness(3.0)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .tagBlock('create:wrench_pickup')
        .stoneSoundType()
        .blockEntity(info => {
            info.tick(blockEntity => {
                if (!blockEntity.persistentData) {
                    blockEntity.persistentData = {
                        hasBuildCorrectly: false,
                        failedMessageHasSent: false,
                        hasBuilt: false,
                    }
                }
            })
        })
        
    //耐热金属燃料储罐
    event.create('kubejs:calorite_tank', 'basic')
        .hardness(3.5)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .tagBlock('create:wrench_pickup')
        .stoneSoundType()
        .blockEntity(info => {
            info.tick(blockEntity => {
                if (!blockEntity.persistentData) {
                    blockEntity.persistentData = {
                        hasBuildCorrectly: false,
                        failedMessageHasSent: false,
                        hasBuilt: false,
                    }
                }
            })
        })

    //导流槽
    event.create('kubejs:diversion_channel')
        .hardness(2.0)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .tagBlock('create:wrench_pickup')
        .waterlogged()
        .fullBlock(false)
        .defaultCutout()
        .stoneSoundType()
        .box(0, 0, 0, 15, 1, 15)
        .box(1, 2, 1, 14, 2, 14)
        .box(3, 3, 3, 12, 4, 12)
        .box(5, 5, 5, 10, 6, 10)
        .box(6, 7, 6, 9, 9, 9)
        .blockEntity(info => {
            info.tick(blockEntity => {
                if (!blockEntity.persistentData) {
                    blockEntity.persistentData = {
                        hasBuildCorrectly: false,
                        failedMessageHasSent: false,
                        hasBuilt: false
                    }
                }
                multiblockCheck.diversionChannel(blockEntity)
            })
        })

    //水洗熔渣
    event.create('kubejs:washed_scoria', 'basic')
        .hardness(1.0)
        .requiresTool(true)
        .tagBlock('minecraft:mineble/shovel')
        .sandSoundType()
})