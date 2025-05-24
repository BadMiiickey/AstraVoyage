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

        //一阶火箭
        player.persistentData.rocket_1MapArray = global.methods.mapArrayStringfy(global.mapArray.rocket_1MapArray)

        //二阶火箭
        player.persistentData.rocket_2MapArray = global.methods.mapArrayStringfy(global.mapArray.rocket_2MapArray)

        //三阶火箭
        player.persistentData.rocket_3MapArray = global.methods.mapArrayStringfy(global.mapArray.rocket_3MapArray)

        //四阶火箭
        player.persistentData.rocket_4MapArray = global.methods.mapArrayStringfy(global.mapArray.rocket_4MapArray)


})