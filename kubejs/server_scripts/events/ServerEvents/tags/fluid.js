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
})