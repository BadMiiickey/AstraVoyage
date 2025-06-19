StartupEvents.registry('mob_effect', event => {

    //嗜血
    event.create('kubejs:bloodthirsty', 'basic')
        .beneficial()

    //蛀蚀
    event.create('kubejs:corrosion', 'basic')
        .harmful()
})