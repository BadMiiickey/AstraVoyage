ServerEvents.recipes(event => {

    const { createdieselgenerators } = event.recipes

    //分馏
    createdieselgenerators.distillation(
        [
            Fluid.of('createdieselgenerators:diesel', 30),
            Fluid.of('createdieselgenerators:gasoline', 20),
            Fluid.of('ad_astra:fuel', 50)
        ],
        Fluid.of('createdieselgenerators:crude_oil', 100),
        20,
        'heated'
    ).id('kubejs:distillation_diesel_gasoline_fuel')//原油
})