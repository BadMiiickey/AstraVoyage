PlayerEvents.loggedIn(event => {

    const { player } = event

    //玩家初次登录
    if (!player.persistentData.hasLoggedBefore) {

        //给予玩家初始防护服
        player.headArmorItem = 'createnuclear:white_anti_radiation_helmet'
        player.chestArmorItem = 'createnuclear:white_anti_radiation_chestplate'
        player.legsArmorItem = 'createnuclear:white_anti_radiation_leggings'
        player.feetArmorItem = 'createnuclear:anti_radiation_boots'
        
        //初始化部分persistentData
        player.persistentData.autoMode = false

        //初次登录后标记
        player.persistentData.hasLoggedBefore = true
    }
})