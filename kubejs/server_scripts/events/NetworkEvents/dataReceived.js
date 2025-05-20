NetworkEvents.dataReceived('autoMode', event => {

    const { player } = event

    player.persistentData.autoMode = event.data.AutoStoredXP
})