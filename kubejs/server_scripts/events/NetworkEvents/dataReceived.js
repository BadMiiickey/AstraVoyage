NetworkEvents.dataReceived('autoMode', event => {

    event.player.persistentData.autoMode = event.data.AutoStoredXP
})

NetworkEvents.dataReceived('teleportMode', event => {

    event.player.persistentData.teleportMode = event.data.hasTeleport
})

NetworkEvents.dataReceived('teleportMessage', event => {
    event.player.persistentData.hasSentTeleportMessage = event.data.hasSentTeleportMessage
})