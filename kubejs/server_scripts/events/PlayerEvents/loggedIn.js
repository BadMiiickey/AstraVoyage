PlayerEvents.loggedIn(event => {

    const { player } = event

    //玩家初次登录附带防辐射套
    if (!player.persistentData.hasLoggedBefore) {
        player.headArmorItem = 'createnuclear:white_anti_radiation_helmet'
        player.chestArmorItem = 'createnuclear:white_anti_radiation_chestplate'
        player.legsArmorItem = 'createnuclear:white_anti_radiation_leggings'
        player.feetArmorItem = 'createnuclear:anti_radiation_boots'
        
        //初始化部分persistentData
        player.persistentData.autoMode = false

        //初次登录后标记
        player.persistentData.hasLoggedBefore = true
    }

    //将persistentData中的全局方块Map信息重新注入global中
        //工作盆
        global.methods.mapArrayStringfyReverse(player.persistentData.basinsMapArray).forEach(basin => {
            global.mapArray.basinsMapArray.push(basin)
        })
        player.persistentData.remove('basinsMapArray')

        //营火
        global.methods.mapArrayStringfyReverse(player.persistentData.campfiresMapArray).forEach(campfire => {
            global.mapArray.campfiresMapArray.push(campfire)
        })
        player.persistentData.remove('campfiresMapArray')

        //发射台
        global.methods.mapArrayStringfyReverse(player.persistentData.launchPadsMapArray).forEach(luanchPad => {
            global.mapArray.launchPadsMapArray.push(luanchPad)
        })
        player.persistentData.remove('launchPadsMapArray')

        //简易工业平台
        global.methods.mapArrayStringfyReverse(player.persistentData.platformsMapArray).forEach(platform => {
            global.mapArray.platformsMapArray.push(platform)
        })
        player.persistentData.remove('platformsMapArray')
//
        //一阶火箭
        global.methods.mapArrayStringfyReverse(player.persistentData.rocket_1MapArray).forEach(rocket_1 => {
            global.mapArray.rocket_1MapArray.push(rocket_1)
        })
        player.persistentData.remove('rocket_1MapArray')

        //二阶火箭
        global.methods.mapArrayStringfyReverse(player.persistentData.rocket_2MapArray).forEach(rocket_2 => {
            global.mapArray.rocket_1MapArray.push(rocket_2)
        })
        player.persistentData.remove('rocket_2MapArray')

        //三阶火箭
        global.methods.mapArrayStringfyReverse(player.persistentData.rocket_3MapArray).forEach(rocket_3 => {
            global.mapArray.rocket_1MapArray.push(rocket_3)
        })
        player.persistentData.remove('rocket_3MapArray')
        
        //四阶火箭
        global.methods.mapArrayStringfyReverse(player.persistentData.rocket_4MapArray).forEach(rocket_4 => {
            global.mapArray.rocket_1MapArray.push(rocket_4)
        })
        player.persistentData.remove('rocket_4MapArray')
})