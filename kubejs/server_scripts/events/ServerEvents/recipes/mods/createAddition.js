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
        },

        /**
         * 
         * @param { Internal.ItemStack_ } input 
         * @param { Internal.ItemStack_ } output 
         * @param { number } energy 
         * @param { number } maxChargeRate 
         * @param { string } id 
         */
        charging(input, output, energy, maxChargeRate, id) {
            
            let recipe = {
                "type":"createaddition:charging",
                "input": {
                    "item": input,
                    "count": 1
                },
                "result": {
                    "item": output,
                    "nbt": { MaxEnergy: energy, Energy: energy },
                    "count": 1
                },
                "energy": energy,
                "maxChargeRate": maxChargeRate
            }

            recipe = JSON.stringify(recipe)

            event.custom(recipe).id(id)
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

    //特斯拉线圈
        //守护之盾
        createaddition.charging(
            'kubejs:guardian_shield',
            'kubejs:guardian_shield',
            96000, 200,
            'kubejs:charging_guardian_shield'
        )

        //回响晶核
        createaddition.charging(
            'kubejs:echo_crystal_nucleus',
            'kubejs:echo_crystal_nucleus',
            100000, 200,
            'kubejs:charging_echo_crystal_nucleus'
        )
})