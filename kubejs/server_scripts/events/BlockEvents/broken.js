BlockEvents.broken(event => {

    const { block, player } = event

    //发射台 => 修复创造模式破坏掉落物增加的Bug
    if (block.id == 'ad_astra:launch_pad') {
        if (player.creative) {
            for (let i = -1; i <= 1; i++) {
                for (let j = -1; j <= 1; j++) {
                    block.offset(i, 0, j).set('minecraft:air')
                }
            }

            event.cancel()
        }
    }
})