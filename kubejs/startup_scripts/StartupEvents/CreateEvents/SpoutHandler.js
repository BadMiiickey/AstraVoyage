CreateEvents.spoutHandler(event => {

    //结晶

    let crystalBuddingList = [
        ['minecraft:', 'amethyst'],
        ['tconstruct:', 'earth_slime_crystal'],
        ['tconstruct:', 'sky_slime_crystal'],
        ['tconstruct:', 'ichor_slime_crystal'],
        ['tconstruct:', 'ender_slime_crystal']
    ]

    crystalBuddingList.forEach(crystal => {
        event.add(
            'kubejs:amythest_spawn',
            crystal[0] + 'budding_' + crystal[1],
            (block, fluid, simulate) => {

                let smallBudName = crystal[0] + 'small_' + crystal[1] + '_bud'
                let mediumBudName = crystal[0] + 'medium_' + crystal[1] + '_bud'
                let largeBudName = crystal[0] + 'large_' + crystal[1] + '_bud'
                let clusterName = crystal[0] + crystal[1] + '_cluster'
                let canProcessCheckList = [
                    'minecraft:air',
                    smallBudName,
                    mediumBudName,
                    largeBudName,
                    clusterName
                ]
                let directionCheckList = [
                    'NORTH',
                    'SOUTH',
                    'EAST',
                    'WEST'
                ]
                let canProcess = false

                for (let check of canProcessCheckList) {
                    for (let dir of directionCheckList) {
                        if (block.offset(Direction[dir]).id == check) {
                            canProcess = true
                            break
                        }
                    }
                }

                if (
                    block.offset(0, 1, 0).id == 'minecraft:air'
                    && fluid.id == 'homeostatic:purified_water'
                    && fluid.amount >= 125
                    && canProcess
                ) {
                    if (!simulate) {
                        block.level.playLocalSound(block.pos, 'create:spout', 'blocks', 1.0, 1.0, true)
                    }
                    
                    let amethystTransformationMap = {
                        'minecraft:air': smallBudName
                    }
                    amethystTransformationMap[smallBudName] = mediumBudName
                    amethystTransformationMap[mediumBudName] = largeBudName
                    amethystTransformationMap[largeBudName] = clusterName
                    amethystTransformationMap[clusterName] = 'minecraft:air'

                    for (let dir of Object.keys(Direction.ALL)) {
                        if (dir.toString() == 'down' || dir.toString() == 'up') continue

                        let spawnBlock = block.offset(dir)
                        let id = spawnBlock.id

                        if (amethystTransformationMap[id]) {
                            spawnBlock.set(amethystTransformationMap[id], { facing: dir })

                            if (id == clusterName) {
                                if (crystal[0] == 'minecraft:') {
                                    spawnBlock.popItem(Item.of('minecraft:amethyst_shard', 3))
                                } else {
                                    spawnBlock.popItem(Item.of(crystal[0] + crystal[1], 3))
                                }
                            }
                            break
                        }
                    }

                    return 125
                }

                return 0
            }
        )
    })
})