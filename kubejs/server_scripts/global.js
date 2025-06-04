//priority: 999999

//全局函数
global.methods = {

    /**
     * 
     * @method
     * @param { object[] } objectList
     */
    stringListTransformation(objectList) {
        
        /** @type { string[] } */
        let stringList = []
        
        objectList.forEach(object =>{
            stringList.push(object.namespace + ':' + object.path)
        })

        return stringList
    },

    /**
     * 
     * @method
     * @param { object[] } objectList 
     */
    pathIdTransformation(objectList) {

        /** @type { string[] } */
        let pathIdList = []
        
        objectList.forEach(object => {
            pathIdList.push(object.path)
        })

        return pathIdList
    },

    /**
     * 
     * @method
     * @param { string } string
     * @param { string[] } stringList 
     */
    stringAccessFilter(string, stringList) {

        /** @type { string[] } */
        let TargetList = []
        
        TargetList.push(stringList.filter(item => String(item).includes(string)))

        return TargetList
    },

    /**
     * 
     * @param { Internal.Player } player 
     * @param { Internal.ItemStack_ } item 
     */
    slotResult(player, item) {

        let curiosHelper = $CuriosApi.getCuriosHelper()

        /** @type { Internal.List<Internal.SlotResult> } */
        let slotResult = curiosHelper[
            'findCurios(net.minecraft.world.entity.LivingEntity,net.minecraft.world.item.Item)'
        ](player, item)

        /** @type { boolean } */
        let checkBoolean
        
        checkBoolean = slotResult.length >= 1 ? true : false

        return checkBoolean
    },

    /**
     * 
     * @param { string } modName
     * @param { string[] } materials 
     * @param { string[] } itemTypes 
     */
    itemsRemoveArray(modName, materials, itemTypes) {
        
        /** @type { string[] } */
        let itemsRemoveArray = []

        materials.forEach(material => {
            itemTypes.forEach(itemType => {
                itemsRemoveArray.push(`${modName}:${material}_${itemType}`)
            })
        })

        return itemsRemoveArray
    },

    /**
     * 
     * @param { Internal.Level } level
     * @param { BlockPos } pos
     * @returns 
     */
    isUnderSunlight(level, pos) {
        for (let i = 15; i >= 1; i--) {
            if (level.getBlock(pos).offset(0, i, 0).id != 'minecraft:air') return false
        }

        if (!level.getBlock(pos).offset(0, 16, 0).canSeeSky) return false

        return true
    },

    /**
     * 
     * @param { Internal.MinecraftServer } server 
     * @param { number } tickOffset 
     * @param { number } seconds 
     */
    tickCountCheck(server, tickOffset, seconds) {
        if ((server.tickCount + tickOffset) % (20 * seconds) == 0) return true
        return false
    },

    /**
     * 
     * @param { Internal.List<{dimension: ResourceLocation, pos: BlockPos}> } mapArray 
     */
    mapArrayStringfy(mapArray) {
        mapArray.forEach(map => {
            map.dimension = map.dimension.toString()
            map.pos = {
                x: map.pos.x,
                y: map.pos.y,
                z: map.pos.z
            }
        })
        return mapArray
    },

    /**
     * 
     * @param { Internal.List<{dimension: string, pos: {x: number, y: number, z: number} }> } mapArray 
     */
    mapArrayStringfyReverse(mapArray) {
        mapArray.forEach(map => {
            map.dimension = new ResourceLocation(map.dimension)
            map.pos = new BlockPos(map.pos.x, map.pos.y, map.pos.z)
        })
        return mapArray
    },

    /**
     * 
     * @param { number } seconds 
     */
    frozenSeconds(seconds) {
        return 140 + seconds * 20
    }
}

//全局定义数组
global.definitionsArray = {

    //增益药水效果
    allBeneficialPotionEffectsArray: [
        'minecraft:absorption',
        'minecraft:strength',
        'minecraft:speed',
        'minecraft:haste',
        'minecraft:jump_boost',
        'minecraft:fire_resistance',
        'minecraft:water_breathing',
        'minecraft:invisibility',
        'minecraft:regeneration',
        'minecraft:resistance',
        'minecraft:slow_falling',
        'minecraft:saturation',
    ],

    //减益药水效果
    harmfulPotionEffectsArray: [
        'minecraft:slowness',
        'minecraft:weakness',
        'minecraft:poison',
        'minecraft:wither',
        'kubejs:corrosion'
    ],

    //战斗增益效果
    beneficialPotionEffectsArray: [
        'minecraft:absorption',
        'minecraft:strength',
        'minecraft:speed',
        'kubejs:bloodthirsty'
    ],

    //战斗减益效果
    harmfulPotionEffectsArray: [
        'minecraft:slowness',
        'minecraft:weakness',
        'minecraft:poison',
        'minecraft:wither',
        'kubejs:corrosion'
    ],

    //生肉定义
    rawMeets: [

        //Minecraft
        'minecraft:beef',
        'minecraft:porkchop',
        'minecraft:mutton',
        'minecraft:chicken',
        'minecraft:rabbit',
        'minecraft:cod',
        'minecraft:salmon',
        'minecraft:rotten_flesh',
        'minecraft:spider_eye',

        //Quark
        'quark:crab_leg'
    ],

    //熔融金属流体名称定义
    materialNames: [
        'desh',
        'ostrum',
        'calorite',
        'etrium',
        'aluminum_alloy',
        'zinc',
        'andesite_alloy',
        'granite_alloy',
        'diorite_alloy',
        'void_steel',
        'andesite_alloy',
        'granite_alloy',
        'diorite_alloy',
        'rock_core'
    ],

    //禁用生成生物
    banedEntities: [
        'minecraft:wandering_trader',
        'ad_astra:lunarian_wandering_trader',
        'ad_astra:martian_wandering_trader'
    ]
}

//全局方块Map
global.mapArray = {}

    //营火
    if (!global.mapArray.campfiresMapArray) {
        global.mapArray.campfiresMapArray = []
    }

    //工作盆
    if (!global.mapArray.basinsMapArray) { 
        global.mapArray.basinsMapArray = []
    }

    //发射台
    if (!global.mapArray.launchPadsMapArray) {
        global.mapArray.launchPadsMapArray = []
    }

    //简易工业平台
    if (!global.mapArray.platformsMapArray) {
        global.mapArray.platformsMapArray = []
    }

    //钢燃料储罐
    if (!global.mapArray.steelTanksMapArray) {
        global.mapArray.steelTanksMapArray = []
    }
    
    //戴斯燃料储罐
    if (!global.mapArray.deshTanksMapArray) {
        global.mapArray.deshTanksMapArray = []
    }

    //紫金燃料储罐
    if (!global.mapArray.ostrumTanksMapArray) {
        global.mapArray.ostrumTanksMapArray = []
    }

    //耐热金属燃料储罐
    if (!global.mapArray.caloriteTanksMapArray) {
        global.mapArray.caloriteTanksMapArray = []
    }

    //戴斯燃料储罐
    if (!global.mapArray.deshTanksMapArray) {
        global.mapArray.deshTanksMapArray = []
    }

    //紫金燃料储罐
    if (!global.mapArray.ostrumTanksMapArray) {
        global.mapArray.ostrumTanksMapArray = []
    }

    //耐热金属燃料储罐
    if (!global.mapArray.calorieTanksMapArray) {
        global.mapArray.calorieTanksMapArray = []
    }

//全局Config
global.config = {
    launchPadsResult: {
        andesiteAlloyBlockResult: { name: '安山合金块', target: 8 },
        andesiteScaffoldingResult: { name: '安山脚手架', target: 8 },
        encasedFluidPipeResult: { name: '流体管道箱', target: 12 },
        fluidPipeResult: { name: '流体管道', target: 32 },
        mechanicalPumpResult: { name: '动力泵', target: 12 },
        railwayCasingResult: { name: '列车机壳', target: 52 },
        airResult: { name: '空气', target: 36 },
        industrialIronBlockResult: { name: '工业铁块', target: 177 }
    },

    steelTanksResult: {
        pillarResult: { name: '钢柱', target: 43 },
        stairsResult: { name: '钢板楼梯', target: 16 },
        slabResult: { name: '钢板台阶', target: 4 },
        railwayResult: { name: '列车机壳', target: 6 },
        buttonResult: { name: '钢板按钮', target: 2 },
        blockResult: { name: '钢块', target: 18 },
        glassResult: { name: '强化玻璃', target: 2 },
        platingResult: { name: '钢板方块', target: 8 },
        lightningRodResult: { name: '避雷针', target: 1 }
    },

    deshTanksResult: {
        pillarResult: { name: '钢柱', target: 43 },
        slabResult: { name: '钢板台阶', target: 4 },
        deshSlabResult: { name: '戴斯板台阶', target: 4 },
        stairsResult: { name: '钢板楼梯', target: 8 },
        deshStairsResult: { name: '戴斯板楼梯', target: 4 },
        blockResult: { name: '钢块', target: 4 },
        glowingPillarResult: { name: '发光戴斯柱', target: 4 },
        deshBlockResult: { name: '戴斯块', target: 18 },
        glassResult: { name: '强化玻璃', target: 2 },
        platingResult: { name: '钢板方块', target: 24 },
        lightningRodResult: { name: '避雷针', target: 1 },
    }
}

//其他全局属性
global.other = {}