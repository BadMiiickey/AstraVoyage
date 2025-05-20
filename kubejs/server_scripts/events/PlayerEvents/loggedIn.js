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
        global.mapArrayStringfyReverse(player.persistentData.basinsMapArray).forEach(basin => {
            global.basinsMapArray.push(basin)
        })
        player.persistentData.remove('basinsMapArray')

        //营火
        global.mapArrayStringfyReverse(player.persistentData.campfiresMapArray).forEach(campfire => {
            global.campfiresMapArray.push(campfire)
        })
        player.persistentData.remove('campfiresMapArray')

        //发射台
        global.mapArrayStringfyReverse(player.persistentData.launchPadsMapArray).forEach(luanchPad => {
            global.launchPadsMapArray.push(luanchPad)
        })
        player.persistentData.remove('launchPadsMapArray')

        //简易工业平台
        global.mapArrayStringfyReverse(player.persistentData.platformsMapArray).forEach(platform => {
            global.platformsMapArray.push(platform)
        })
        player.persistentData.remove('platformsMapArray')
})