PlayerEvents.loggedOut(event => {

    const { player } = event

    //将全局方块Map注入persistentData中避免丢失
        //工作盆
        player.persistentData.basinsMapArray = global.mapArrayStringfy(global.basinsMapArray)

        //营火
        player.persistentData.campfiresMapArray = global.mapArrayStringfy(global.campfiresMapArray)

        //发射台
        player.persistentData.launchPadsMapArray = global.mapArrayStringfy(global.launchPadsMapArray)

        //简易工业平台
        player.persistentData.platformsMapArray = global.mapArrayStringfy(global.platformsMapArray)
})