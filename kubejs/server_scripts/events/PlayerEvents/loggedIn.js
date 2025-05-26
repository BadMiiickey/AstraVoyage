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

        //钢燃料储罐
        global.methods.mapArrayStringfyReverse(player.persistentData.steelTanksMapArray).forEach(steelTank => {
            global.mapArray.steelTanksMapArray.push(steelTank)
        })
        player.persistentData.remove('steelTanksMapArray')

        //戴斯燃料储罐
        global.methods.mapArrayStringfyReverse(player.persistentData.deshTanksMapArray).forEach(deshTank => {
            global.mapArray.deshTanksMapArray.push(deshTank)
        })
        player.persistentData.remove('deshTanksMapArray')
})