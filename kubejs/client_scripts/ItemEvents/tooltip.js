ItemEvents.tooltip(event => {

    //adAstra
        //NASA工作台
        event.addAdvanced('ad_astra:nasa_workbench', (item, advanced, text) => {
            text.remove(1)
        })

    //kubejs
        //饰品
            //磁引衡轮
            event.addAdvanced('kubejs:magnet', (item, advanced, text) => {
                text.add(1, '§6吸引一定范围内的物品')
                text.add(2, '§8按住[§7Shift§8]查看概要')

                if (event.shift) {
                    text.remove(2)
                    text.add(2, '§8按住[§fShift§8]查看概要')
                    text.add(4, '§6佩戴至腰带时:')
                    text.add(5, '       §9+6 物品吸引半径')
                }
            })

            //月华流晶
            event.addAdvanced('kubejs:luminous_pearl', (item, advanced, text) => {
                text.add(1, '§6免疫黑暗环境带来的负面状态且可作为动态光源')
                text.add(2, '§8按住[§7Shift§8]查看概要')

                if (event.shift) {
                    text.remove(2)
                    text.add(2, '§8按住[§fShift§8]查看概要')
                    text.add(4, '§6主手为匠魂镐时:')
                    text.add(5, '       §9+ 急迫I')
                }
            })

            //寒霜芯核
            event.addAdvanced('kubejs:freezing_core', (item, advanced, text) => {
                text.add(1, '§6免疫灼烧, 对攻击的敌对生物施加冷冻效果')
                text.add(2, '§6自身未穿戴具有保暖效果的装备亦会被冷冻')
                text.add(3, '§8按住[§7Shift§8]查看概要')

                if (event.shift) {
                    text.remove(3)
                    text.add(3, '§8按住[§fShift§8]查看概要')
                    text.add(5, '§6佩戴至胸饰时:')
                    text.add(6, '       §9x0.2 灼烧时间')
                    text.add(7, '       §9+3 冷冻时间')
                }
            })

            //慧泽丝链
            event.addAdvanced('kubejs:memory_bracelet', (item, advanced, text) => {
                text.add(1, '§6存储经验以提升伤害, 按住§8[§7Shift+右键§8]§6存储经验')
                text.add(2, '§8按住[§7Shift§8]查看概要')
                text.add(3, `§8按[§7${ global.other.memoryBraceletUpperCase }§8]以切换经验注入模式`)
                
                if (item.nbt?.AutoStoredXP) {
                    text.add(4, '       §6当前模式: §a自动注入')
                } else {
                    text.add(4, '       §6当前模式: §a手动注入')
                }

                if (event.shift) {
                    if (item.nbt?.StoredXP > 0) {
                        text.remove(2)
                        text.add(2, '§8按住[§fShift§8]查看概要')
                        text.remove(3)
                        text.remove(3)
                        text.add(4, `§6当前存储经验: §a${ item.nbt?.StoredXP }`)
                        text.add(5, '§6佩戴至手镯时:')
                        text.add(6, `       §9x${ (Math.log1p(item.nbt?.StoredXP / 15) + 1).toFixed(1)} 攻击伤害`)
                    } else {
                        text.remove(2)
                        text.remove(2)
                        text.remove(2)
                        text.add(3, '§6当前未存储经验')
                    }
                    
                }
            })

            //回响晶核
            event.addAdvanced('kubejs:echo_crystal_nucleus', (item, advanced, text) => {
                text.add(1, '§6探测周遭环境, 激活小地图和生物雷达')
            })

            //幻虚手衣
            event.addAdvanced('kubejs:phantom_glove', (item, advanced, text) => {
                text.add(1, '§6给予凡人接触创世的力量')
                text.add(2, '§c但……代价是什么呢?')
            })

            //血恶环戒
            event.addAdvanced('kubejs:evil_ring', (item, advanced, text) => {
                text.add(1, '§8按住[§7Shift§8]查看概要')

                if (event.shift) {
                    text.remove(1)
                    text.add(1, '§8按住[§fShift§8]查看概要')
                    text.add(3, '§6佩戴至戒指时:')
                    text.add(4, '       §9+10% 生命窃取')
                }
            })

            //曦光缀玉
            event.addAdvanced('kubejs:light_crystal', (item, advanced, text) => {
                text.add(1, '§6在光下修复装备')
                text.add(2, '§8按住[§7Shift§8]查看概要')

                if (event.shift) {
                    text.remove(2)
                    text.add(2, '§8按住[§fShift§8]查看概要')
                    text.add(4, '§6佩戴至护符时:')
                    text.add(5, '       §9每3s修复1点耐久')
                }
            })

            //惊霆裂爪
            event.addAdvanced('kubejs:lightning_claw', (item, advanced, text) => {
                text.add(1, '§6概率召唤雷霆攻击敌人')
                text.add(2, '§8按住[§7Shift§8]查看概要')

                if (event.shift) {
                    text.remove(2)
                    text.add(2, '§8按住[§fShift§8]查看概要')
                    text.add(4, '§6佩戴至手饰时:')
                    text.add(5, '       §9+30% 落雷概率')
                }
            })

            //安魂指箍
            event.addAdvanced('kubejs:requiem_ring', (item, advanced, text) => {
                text.add(1, '§6每次击杀敌人概率降低杀戮值')
                text.add(2, '§8按住[§7Shift§8]查看概要')

                if (event.shift) {
                    text.remove(2)
                    text.add(2, '§8按住[§fShift§8]查看概要')
                    text.add(4, '§6佩戴至戒指时:')
                    text.add(5, '       §9+30% 降低杀戮值概率')
                }
            })

        //方块
            //简易工业平台
            event.addAdvanced('kubejs:simple_industrial_platform', (item, advanced, text) => {
                text.add(1, '§8按住[§7Shift§8]查看概要')

                if (event.shift) {
                    text.remove(1)
                    text.add(1, '§8按住[§fShift§8]查看概要')
                    text.add(2, '§6可快速搭建38x38的工业平台, 并清除平台上方所有方块')
                    text.add(3, '§6框架圈定的只是大致范围, 并不能作为精确标记!')
                    text.add(5, '§6扳手§e右键§6激活')
                }
            })
})