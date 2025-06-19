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
     * @param { number } seconds 
     */
    frozenSeconds(seconds) {
        return 140 + seconds * 20
    },

    /**
     * 
     * @param { Internal.BlockContainerJS } fluid 
     */
    traceFluidSource(fluid) {

        /**
         * 
         * @param { Internal.BlockContainerJS } fluid 
         */
        function horizontalFluidCheck(fluid) {
            for (let dx of [-1, 0, 1]) {
                for (let dz of [-1, 0, 1]) {
                    if (dx == 0 && dz == 0) continue

                    let nextFluid = fluid.offset(dx, 0, dz)

                    if (!nextFluid.properties?.level) continue
                    if (nextFluid.properties?.level == 0) return nextFluid
                    if (nextFluid.properties?.level == 8) {
                        return verticalFluidCheck(nextFluid)
                    }
                    if (nextFluid.properties?.level < fluid.properties?.level) {
                        return horizontalFluidCheck(nextFluid)
                    }
                }
            }
        }

        /**
         * 
         * @param { Internal.BlockContainerJS } fluid 
         */
        function verticalFluidCheck(fluid) {
            
            let nextFluid = fluid.offset(0, 1, 0)

            if (nextFluid.properties?.level == 0) return nextFluid
            if (nextFluid.properties?.level < fluid.properties?.level) {
                return horizontalFluidCheck(nextFluid)
            }
        }

        let currentFluid = fluid.properties?.level == 8 ? verticalFluidCheck(fluid) : horizontalFluidCheck(fluid)

        return currentFluid.properties?.level == 0 ? currentFluid : this.traceFluidSource(currentFluid)
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

    //禁用生成生物
    banedEntities: [
        'minecraft:wandering_trader',
        'ad_astra:lunarian_wandering_trader',
        'ad_astra:martian_wandering_trader'
    ]
}

//其他全局属性
global.other = {}

    if (!global.other.stateCount) {
        global.other.stateCount = 0
    }