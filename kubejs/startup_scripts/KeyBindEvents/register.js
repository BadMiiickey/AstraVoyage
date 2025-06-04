KeyBindEvents.register(event => {
    
    //慧泽丝链模式切换
    event.create('memoryBraceletMode', 'key.memoryBraceletMode', GLFW.GLFW_KEY_G, 'AstraVoyage')

    //时隙腕璇坐标记录
    event.create('phaseBraceletMode', 'key.phaseBraceletMode', GLFW.GLFW_KEY_H, 'AstraVoyage')
})