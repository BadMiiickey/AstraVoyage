ServerEvents.tags('fluid', event => {

    //tconstruct:molten_${materialName}

    /**
     * 
     * @param { Internal.List<Internal.Material> } materialNames 
     */
    function moltenFluidTag(materialNames) {
        materialNames.forEach(materialName => {
            event.add(`tconstruct:molten_${ materialName }`, `kubejs:molten_${ materialName }`)   
        }) 
    }

    moltenFluidTag(global.definitionsArray.materialNames)

    //ad_astra:tier_1_rocket_fuel
    event.add('ad_astra:tier_1_rocket_fuel', 'createdieselgenerators:biodiesel')

    //ad_astra:tier_1_rover_fuel
    event.add('ad_astra:tier_1_rover_fuel', 'createdieselgenerators:biodiesel')

    //ad_astra:tier_2_rocket_fuel
    event.add('ad_astra:tier_2_rocket_fuel', 'createdieselgenerators:biodiesel')

    //ad_astra:tier_3_rocket_fuel
    event.add('ad_astra:tier_3_rocket_fuel', 'createdieselgenerators:biodiesel')

    //ad_astra:tier_4_rocket_fuel
    event.add('ad_astra:tier_4_rocket_fuel', 'createdieselgenerators:biodiesel')
})