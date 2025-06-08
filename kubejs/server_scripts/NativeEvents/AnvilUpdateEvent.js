NativeEvents.onEvent($AnvilUpdateEvent, /** @param { Internal.AnvilUpdateEvent } event */ event => {

    const { left, right } = event

    if (!left.empty || !right.empty) {
        event.setCanceled(true)
    }
})