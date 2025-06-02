ServerEvents.tags('block', event => {

    //minecraft:infiniburn_overworld
    event.add('minecraft:infiniburn_overworld', 'create:scoria')

    //minecraft:dead_bush_may_replace_on
    event.add('minecraft:dead_bush_may_place_on', 'create:scoria')

    //create:wrench_pickup
    event.add(
        'create:wrench_pickup',
        [
            'ad_astra:energizer',
            'ad_astra:launch_pad',
            'ad_astra:nasa_workbench',
            'ad_astra:fuel_refinery',
            'ad_astra:oxygen_loader',
            'ad_astra:solar_panel',
            'ad_astra:oxygen_distributor',
            'ad_astra:gravity_normalizer',
            'ad_astra:cryo_freezer',
            'ad_astra:oxygen_sensor',
            'ad_astra:vent',
            'ad_astra:steel_cable',
            'ad_astra:desh_cable',
            'ad_astra:desh_fluid_pipe',
            'ad_astra:ostrum_fluid_pipe',
            'ad_astra:cable_duct',
            'ad_astra:fluid_pipe_duct'
        ]
    )
})