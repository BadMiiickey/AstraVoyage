ServerEvents.recipes(event => {

    const adastra = {

        /**
         * 
         * @param { Internal.List<Internal.ItemStack_> } input 
         * @param { Internal.ItemStack_ } output 
         * @param { string } id 
         */
        nasaWorkbench(input, output, id) {
            event.custom({
                "type": "ad_astra:nasa_workbench",
                "ingredients": [
                    {
                        "item": input[0]
                    },
                    {
                        "item": input[1]
                    },
                    {
                        "item": input[2]
                    },
                    {
                        "item": input[3]
                    },
                    {
                        "item": input[4]
                    },
                    {
                        "item": input[5]
                    },
                    {
                        "item": input[6]
                    },
                    {
                        "item": input[7]
                    },
                    {
                        "item": input[8]
                    },
                    {
                        "item": input[9]
                    },
                    {
                        "item": input[10]
                    },
                    {
                        "item": input[11]
                    },
                    {
                        "item": input[12]
                    },
                    {
                        "item": input[13]
                    }
                ],
                "result": {
                    "count": 1,
                    "id": output
                }
            }).id(id)
        }
    }

    adastra.nasaWorkbench(
        [
            'create:electron_tube',
            'ad_astra:steel_plate', 'ad_astra:steel_plate',
            'ad_astra:steel_plate', 'kubejs:aviation_mechanism', 'ad_astra:steel_plate',
            'ad_astra:steel_nugget', 'ad_astra:steel_rod', 'ad_astra:steel_rod', 'ad_astra:steel_nugget',
            'ad_astra:steel_nugget', 'ad_astra:steel_nugget', 'ad_astra:steel_nugget', 'ad_astra:steel_nugget'
        ],
        'ad_astra:oxygen_gear',
        'kubejs:nasaworkbench_oxygen_gear'
    )
})