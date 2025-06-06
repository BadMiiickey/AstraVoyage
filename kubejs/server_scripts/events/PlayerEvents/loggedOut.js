PlayerEvents.loggedOut(event => {

    const { player } = event

    //将全局方块Map注入persistentData中避免丢失
        //工作盆
        player.persistentData.basinsMapArray = global.methods.mapArrayStringfy(global.mapArray.basinsMapArray)

        //营火
        player.persistentData.campfiresMapArray = global.methods.mapArrayStringfy(global.mapArray.campfiresMapArray)

        //发射台
        player.persistentData.launchPadsMapArray = global.methods.mapArrayStringfy(global.mapArray.launchPadsMapArray)

        //简易工业平台
        player.persistentData.platformsMapArray = global.methods.mapArrayStringfy(global.mapArray.platformsMapArray)

        //钢燃料储罐
        player.persistentData.steelTanksMapArray = global.methods.mapArrayStringfy(global.mapArray.steelTanksMapArray)

        //戴斯燃料储罐
        player.persistentData.deshTanksMapArray = global.methods.mapArrayStringfy(global.mapArray.deshTanksMapArray)

        //紫金燃料储罐
        player.persistentData.ostrumTanksMapArray = global.methods.mapArrayStringfy(global.mapArray.ostrumTanksMapArray)

        //耐热金属燃料储罐
        player.persistentData.caloriteTanksMapArray = global.methods.mapArrayStringfy(global.mapArray.caloriteTanksMapArray)
})