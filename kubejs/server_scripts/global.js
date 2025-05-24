//priority: 999999
var $CuriosApi = Java.loadClass('top.theillusivec4.curios.api.CuriosApi')

const curiosHelper = $CuriosApi.getCuriosHelper()

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
        
        /** @type { Internal.List<Internal.SlotResult> } */
        let slotResult = curiosHelper[
            'findCurios(net.minecraft.world.entity.LivingEntity,net.minecraft.world.item.Item)'
        ](player, item)
        /** @type { boolean } */
        let checkBoolean
        
        if (slotResult.length >= 1) {
            checkBoolean = true
        } else {
            checkBoolean = false
        }

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
    }
}

//全局定义数组
global.definitionsArray = {

    //亡灵生物
    undeads: [
        //Minecraft
        'minecraft:drowned',
        'minecraft:husk',
        'minecraft:phantom',
        'minecraft:skeleton',
        'minecraft:stray',
        'minecraft:vex',
        'minecraft:zombie',
        'minecraft:zombie_villager',

        //Quark
        'quark:forgotten',
        'quark:wraith',
        
        //The_Graveyard
        'graveyard:skeleton_creeper',
        'graveyard:acolyte',
        'graveyard:ghoul',
        'graveyard:reaper',
        'graveyard:revenant',
        'graveyard:nightmare',
        'graveyard:corrupted_vindicator',
        'graveyard:corrupted_pillager',
        'graveyard:wraith'
    ],

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
        'dark_iron',
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

    //一阶火箭
    if (!global.mapArray.rocket_1MapArray) {
        global.mapArray.rocket_1MapArray = []
    }

    //二阶火箭
    if (!global.mapArray.rocket_2MapArray) {
    global.mapArray.rocket_2MapArray = []
    }

    //三阶火箭
    if (!global.mapArray.rocket_3MapArray) {
        global.mapArray.rocket_3MapArray = []
    }

    //四阶火箭
    if (!global.mapArray.rocket_4MapArray) {
        global.mapArray.rocket_4MapArray = []
    }
//其他全局属性
global.other = {}