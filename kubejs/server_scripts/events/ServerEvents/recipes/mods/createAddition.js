ServerEvents.recipes(event => {

    const createaddition = {

        /**
         * 
         * @param { Internal.ItemStack_ } input 
         * @param { [output: Internal.ItemStack_, count: number] } output 
         * @param { string } id 
         */
        rolling(input, output, id) {
            event.custom({
                "type": "createaddition:rolling",
                "input": {
                    "item": input
                },
                "result": {
                    "item": output[0],
                    "count": output[1]
                }
            }).id(id)
        }
    }

    //轧机
        //钢棒
        createaddition.rolling(
            'ad_astra:steel_ingot',
            ['ad_astra:steel_rod', 2],
            'kubejs:rolling_steel_rod'
        )

        //埃忒恩棒
        createaddition.rolling(
            'ad_astra:etrium_ingot',
            ['ad_astra:etrium_rod', 2],
            'kubejs:rolling_etrium_rod'
        )
})