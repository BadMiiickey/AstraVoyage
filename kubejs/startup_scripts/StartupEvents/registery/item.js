StartupEvents.registry('item', event => {

    //物品注册
    event.create('kubejs:crushed_raw_desh', 'basic')//粉碎戴斯矿石
    event.create('kubejs:crushed_raw_ostrum', 'basic')//粉碎紫金矿石
    event.create('kubejs:crushed_raw_calorite', 'basic')//粉碎耐热金属矿石
    event.create('kubejs:crushed_bauxite', 'basic')//粉碎铝土矿石
    event.create('kubejs:raw_aluminum', 'basic')//粗铝
    event.create('kubejs:aluminum_hydroxide', 'basic')//氢氧化铝
    event.create('kubejs:alumina', 'basic')//氧化铝
    event.create('kubejs:aluminum_ingot', 'basic')//铝锭
    event.create('kubejs:aluminum_nugget', 'basic')//铝粒
    event.create('kubejs:aluminum_sheet', 'basic')//铝板
    event.create('kubejs:aluminum_alloy_ingot', 'basic')//铝合金锭
    event.create('kubejs:aluminum_alloy_nugget', 'basic')//铝合金粒
    event.create('kubejs:aluminum_alloy_sheet', 'basic')//铝合金板
    event.create('kubejs:quartz_dust', 'basic')//石英粉
    event.create('kubejs:raw_silicon', 'basic')//粗硅
    event.create('kubejs:crushed_raw_silicon', 'basic')//粉碎粗硅
    event.create('kubejs:acid_silicon', 'basic')//酸洗硅
    event.create('kubejs:silicon_sheet', 'basic')//硅板
    event.create('kubejs:granite_alloy', 'basic')//花岗合金
    event.create('kubejs:diorite_alloy', 'basic')//闪长合金
    event.create('kubejs:rock_core_ingot', 'basic')//岩核锭
    event.create('kubejs:rock_core_nugget', 'basic')//岩核粒
    event.create('kubejs:rock_core_sheet', 'basic')//岩核板
    event.create('kubejs:earth_core', 'basic')//地球星核
    event.create('kubejs:the_nether_core', 'basic')//下界星核
    event.create('kubejs:the_end_core', 'basic')//末地星核
    event.create('kubejs:the_moon_core', 'basic')//月球星核
    event.create('kubejs:mercury_core', 'basic')//水星星核
    event.create('kubejs:mars_core', 'basic')//火星星核
    event.create('kubejs:venus_core', 'basic')//金星星核
    event.create('kubejs:glacio_core', 'basic')//霜原星核
    event.create('kubejs:wasteworld_core', 'basic')//废土星核
    event.create('kubejs:dense_planet_core_ingot', 'basic')//致密星核锭
    event.create('kubejs:dense_planet_core_nugget', 'basic')//致密星核粒
    event.create('kubejs:dense_planet_core_sheet', 'basic')//致密星核板
    event.create('kubejs:earth_coin', 'basic')//地球币
    event.create('kubejs:the_nether_coin', 'basic')//下界币
    event.create('kubejs:the_end_coin', 'basic')//末地币
    event.create('kubejs:the_moon_coin', 'basic')//月球币
    event.create('kubejs:mercury_coin', 'basic')//水星币
    event.create('kubejs:mars_coin', 'basic')//火星币
    event.create('kubejs:venus_coin', 'basic')//金星币
    event.create('kubejs:glacio_coin', 'basic')//霜原星币
    event.create('kubejs:wasteworld_coin', 'basic')//废土币

    //构件注册
    event.create('kubejs:electronic_mechanism', 'basic')//电力构件
    event.create('kubejs:rock_core_mechanism', 'basic')//岩核构件
    event.create('kubejs:dense_planet_core_mechanism', 'basic')//致密星核构件
    event.create('kubejs:echo_mechanism', 'basic')//回响构件
    event.create('kubejs:creative_mechanism', 'basic')//创世构件
    event.create('kubejs:aviation_mechanism', 'basic')//航空构件

    //半成品注册
    event.create('kubejs:incomplete_guardian_shield', 'create:sequenced_assembly')//守护之盾(半成品)
    event.create('kubejs:incomplete_silicon', 'create:sequenced_assembly')//硅(半成品)
    event.create('kubejs:incomplete_electronic_mechanism', 'create:sequenced_assembly')//电力构件(半成品)
    event.create('kubejs:incomplete_rock_core_mechanism', 'create:sequenced_assembly')//岩核构件(半成品)
    event.create('kubejs:incomplete_dense_planet_core_mechanism', 'create:sequenced_assembly')//致密星核构件(半成品)
    event.create('kubejs:incomplete_echo_mechanism', 'create:sequenced_assembly')//回响构件(半成品)
    event.create('kubejs:incomplete_creative_mechanism', 'create:sequenced_assembly')//创世构件(半成品)
    event.create('kubejs:incomplete_aviation_mechanism', 'create:sequenced_assembly')//航空构件(半成品)

    //饰品注册
        //吸金磁
        event.create('kubejs:magnet', 'basic')
            .unstackable()
            .tag('curios:belt')

        //冷冻核心
        event.create('kubejs:freezing_core', 'basic')
            .unstackable()
            .tag('curios:body')
            
        //记忆手链
        event.create('kubejs:memory_bracelet', 'basic')
            .unstackable()
            .tag('curios:bracelet')

        //守护之盾
        event.create('kubejs:guardian_shield', 'basic')
            .unstackable()
            .attachCapability(
                CapabilityBuilder.ENERGY.customItemStack()
                    .canExtract(item => true)
                    .canReceive(item => true)
                    .extractEnergy((item, energyCount, simulateBoolean) => {
                        if (item.nbt?.Energy == undefined) return

                        /** @type { number } */
                        let energy = item.nbt.Energy

                        if (!simulateBoolean) {
                            energy = Math.min(96000, energy - 200)
                        }

                        return 200
                    })
                    .receiveEnergy((item, energyCount, simulateBoolean) => {
                        if (item.nbt?.Energy == undefined) return

                        /** @type { number } */
                        let energy = item.nbt.Energy

                        if (!simulateBoolean) {
                            energy = Math.min(96000, energy + 200)
                        }

                        return 200
                    })
                    .getEnergyStored(item => item.nbt.Energy)
                    .getMaxEnergyStored(item => item.nbt.MaxEnergy)
            )
            .tag('curios:charm')

        //回响晶核
        event.create('kubejs:echo_crystal_nucleus', 'basic')
            .unstackable()
            .tag('curios:charm')

        //虚化手套
        event.create('kubejs:phantom_glove', 'basic')
            .unstackable()
            .fireResistant()
            .tag('curios:hands')
})