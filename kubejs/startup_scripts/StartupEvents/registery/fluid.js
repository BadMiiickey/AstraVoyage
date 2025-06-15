StartupEvents.registry('fluid', event => {

    //酸液
    event.create('kubejs:acid', 'basic')
        .thinTexture(0xfdffe9)
        .bucketColor(0xfdffe9)
        .stillTexture('kubejs:block/still')
        .flowingTexture('kubejs:block/flowing')

    //铝酸盐溶液
    event.create('kubejs:aluminate_solution', 'basic')
        .thinTexture(0xe8f012)
        .bucketColor(0xe8f012)
        .stillTexture('kubejs:block/still')
        .flowingTexture('kubejs:block/flowing')

    //核废水
    event.create('kubejs:nuclear_waste', 'basic')
        .thinTexture(0xe1ff96)
        .bucketColor(0xe1ff96)
        .stillTexture('kubejs:block/still')
        .flowingTexture('kubejs:block/flowing')

    //嬗变龙血
    event.create('kubejs:dragon_blood', 'basic')
        .thickTexture(0xb277f8)
        .bucketColor(0xb277f8)
        .stillTexture('kubejs:block/still')
        .flowingTexture('kubejs:block/flowing')

    //匠魂
        //熔融戴斯
        event.create('kubejs:molten_desh', 'basic')
            .thickTexture(0xd68d4d)
            .bucketColor(0xd68d4d)
            .stillTexture('kubejs:block/still')
            .flowingTexture('kubejs:block/flowing')

        //熔融紫金
        event.create('kubejs:molten_ostrum', 'basic')
            .thickTexture(0x775360)
            .bucketColor(0x775360)
            .stillTexture('kubejs:block/still')
            .flowingTexture('kubejs:block/flowing')
        
        //熔融耐热金属
        event.create('kubejs:molten_calorite', 'basic')
            .thickTexture(0xb83145)
            .bucketColor(0xb83145)
            .stillTexture('kubejs:block/still')
            .flowingTexture('kubejs:block/flowing')

        //熔融埃忒恩
        event.create('kubejs:molten_etrium', 'basic')
            .thickTexture(0x7cffda)
            .bucketColor(0x7cffda)
            .stillTexture('kubejs:block/still')
            .flowingTexture('kubejs:block/flowing')

        //熔融铝合金
        event.create('kubejs:molten_aluminum_alloy', 'basic')
            .thickTexture(0xb3d9df)
            .bucketColor(0xb3d9df)
            .stillTexture('kubejs:block/still')
            .flowingTexture('kubejs:block/flowing')

        //熔融锌
        event.create('kubejs:molten_zinc', 'basic')
            .thickTexture(0xa5c0a0)
            .bucketColor(0xa5c0a0)
            .stillTexture('kubejs:block/still')
            .flowingTexture('kubejs:block/flowing')

        //熔融虚空钢
        event.create('kubejs:molten_void_steel', 'basic')
            .thickTexture(0x258474)
            .bucketColor(0x258474)
            .stillTexture('kubejs:block/still')
            .flowingTexture('kubejs:block/flowing')

        //熔融安山合金
        event.create('kubejs:molten_andesite_alloy', 'basic')
            .thickTexture(0xc9caba)
            .bucketColor(0xc9caba)
            .stillTexture('kubejs:block/still')
            .flowingTexture('kubejs:block/flowing')

        //熔融花岗合金
        event.create('kubejs:molten_granite_alloy', 'basic')
            .thickTexture(0xd7a28f)
            .bucketColor(0xd7a28f)
            .stillTexture('kubejs:block/still')
            .flowingTexture('kubejs:block/flowing')

        //熔融闪长合金
        event.create('kubejs:molten_diorite_alloy', 'basic')
            .thickTexture(0xecefe7)
            .bucketColor(0xecefe7)
            .stillTexture('kubejs:block/still')
            .flowingTexture('kubejs:block/flowing')

        //熔融岩核
        event.create('kubejs:molten_rock_core', 'basic')
            .thickTexture(0x83867e)
            .bucketColor(0x83867e)
            .stillTexture('kubejs:block/still')
            .flowingTexture('kubejs:block/flowing')

        //熔融压缩星核
        event.create('kubejs:molten_dense_planet_core', 'basic')
            .thickTexture(0x7ebdcb)
            .bucketColor(0x7ebdcb)
            .stillTexture('kubejs:block/still')
            .flowingTexture('kubejs:block/flowing')

        //熔融异彩化合物
        event.create('kubejs:molten_chromatic_compound', 'basic')
            .thickTexture(0x853c74)
            .bucketColor(0x853c74)
            .stillTexture('kubejs:block/still')
            .flowingTexture('kubejs:block/flowing')

        //熔融光辉石
        event.create('kubejs:molten_refined_radiance', 'basic')
            .thickTexture(0xf5fae1)
            .bucketColor(0xf5fae1)
            .stillTexture('kubejs:block/still')
            .flowingTexture('kubejs:block/flowing')

        //熔融暗影钢
        event.create('kubejs:molten_shadow_steel', 'basic')
            .thickTexture(0x4d4861)
            .bucketColor(0x4d4861)
            .stillTexture('kubejs:block/still')
            .flowingTexture('kubejs:block/flowing')
})