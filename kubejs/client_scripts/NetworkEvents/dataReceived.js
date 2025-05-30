NetworkEvents.dataReceived('openNasaWorkbench', event => {

    const { screen } = Client

    if (screen instanceof $NasaWorkbenchScreen) {
        for (let i = 0; i <= 13; i++) {

            let slot = screen.menu.getSlot(i)

            switch (i) {
                case 3:
                    slot.x -= 18 * 0.5
                    break
                case 4:
                    slot.x -= 18 * 0.5
                    break
                case 5:
                    slot.x += 18 * 1.5
                    slot.y -= 18
                    break
                case 6:
                    slot.x -= 18 * 2
                    break
                case 7:
                    slot.x += 18
                    slot.y -= 18
                    break
                case 8:
                    slot.x += 18
                    slot.y -= 18
                    break
                case 9:
                    slot.x += 18
                    slot.y -= 18
                    break
                case 10:
                    slot.x -= 18 * 3
                    break
                case 11:
                    slot.x += 18
                    slot.y -= 18
                    break
                case 12:
                    slot.x += 18 * 0.5
                    slot.y -= 18
                    break
                case 13:
                    slot.y -= 18
                    break
            }
        }
    }
})