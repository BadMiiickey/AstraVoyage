// §0a0是黑色,§1a1深蓝的,§2a2深绿,§3a3青色,§4a4是暗红,§5a5是紫色,§6a6橙色的,§7a7浅灰色,§8a8是灰色的.
// §9a9靛蓝色,§aa10是亮绿,§b11亮蓝,§c12亮红,§d13是紫色,§e14是黄色,§f15是白色,ak是那§k乱码字§f,§lal粗体

// slots = [
//     "id = back; size=1; add_cosmetic=true",
//     "id = belt; size=2; add_cosmetic=true",
//     "id = body; size=1; add_cosmetic=true",
//     "id = bracelet; size=2; add_cosmetic=true",
//     "id = charm; size=2; add_cosmetic=true",
//     "id = head; size=1; add_cosmetic=true",
//     "id = hands; size=2; add_cosmetic=true",
//     "id = ring; size=4; add_cosmetic=true",
//     "id = necklace; size=1; add_cosmetic=true"
// ])

BlockEvents.rightClicked(event => {

    const { block, player, hand } = event

    if (hand != 'MAIN_HAND') return

    if (player.mainHandItem.id == 'kubejs:phantom_glove') {
        Client.tell(`block: ${block}`)
        Client.tell(`blockProperties: ${block.properties}`)
        Client.tell(`blockEntityData: ${block.entityData}`)
        // Client.tell(`water: ${player.rayTrace().block.properties}`)
    }
})