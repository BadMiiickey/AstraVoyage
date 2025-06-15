declare const global: {
    definitionsArray: {
        allBeneficialPotionEffectsArray: Internal.List<Internal.Potion>,
        beneficialPotionEffectsArray: Internal.List<Internal.Potion>, 
        harmfulPotionEffectsArray: Internal.List<Internal.Potion>
        undeads: Internal.List<Internal.LivingEntity>,
        rawMeets: Internal.List<Internal.ItemStack> ,
        vanillaFixMaterials: Internal.List<Internal.ItemStack>,
        banedEntities: Internal.List<Internal.LivingEntity>,
        rockets: Internal.EntityArrayList,
    },

    other: {
        jeiRuntime: Internal.JeiRuntime,
        memoryBraceletModeName: string,
        memoryBraceletLowerCase: string,
        memoryBraceletUpperCase: string,
        collectInterval: number,
        phaseBraceletModeName: string,
        phaseBraceletLowerCase: string,
        phaseBraceletUpperCase: string,
        stateCount: number
    }

    methods: {
        itemsRemoveArray(modName: string, materials: string[], itemTypes: string[]): Internal.List<Internal.CreativeModeTab>,
        pathIdTransformation(ObjList: object[]): Internal.List<Internal.Path>, 
        slotResult(player: Internal.Player, item: Internal.ItemStack_): boolean,
        stringAccessFilter(string: string, StringList: string[]): Internal.List<Internal.ItemStack>, 
        stringListTransformation(ObjList: object[]): Internal.List<Internal.ItemStack>,
        isUnderSunlight(level: Internal.Level, pos: BlockPos): boolean,
        tickCountCheck(server: Internal.MinecraftServer, tickOffset: number, seconds: number): boolean,
        mapArrayStringfy(mapArray: Internal.List<{
            dimension: ResourceLocation, 
            pos: BlockPos
        }>): Internal.List<T>,
        mapArrayStringfyReverse(mapArray: Internal.List<{
            dimension: string, 
            pos: {x: number, y: number, z: number}
        }>): Internal.List<T>,
        frozenSeconds(seconds: number): number,
        traceFluidSource(fluid: Internal.BlockContainerJS): Internal.BlockContainerJS
    }
    
    mapArray: {
        basinsMapArray: [
            { 
                dimension: ResourceLocation, 
                pos: BlockPos
            }
        ],
        campfiresMapArray: [
            { 
                dimension: ResourceLocation, 
                pos: BlockPos
            }
        ],
        launchPadsMapArray: [
            { 
                dimension: ResourceLocation, 
                pos: BlockPos,
                hasBuildCorrectly: boolean,
                failedMessageHasSent: boolean,
                hasExploded: boolean,
                andesiteAlloyBlockResult: number,
                andesiteScaffoldingResult: number,
                encasedFluidPipeResult: number,
                fluidPipeResult: number,
                mechanicalPumpResult: number,
                railwayCasingResult: number,
                airResult: number,
                industrialIronBlockResult: number
            }
        ],
        platformsMapArray: [
            { 
                dimension: ResourceLocation, 
                pos: BlockPos
            }
        ],
        steelTanksMapArray: [
            { 
                dimension: ResourceLocation, 
                pos: BlockPos,
                hasBuildCorrectly: boolean,
                failedMessageHasSent: boolean,
                hasBuilt: boolean,
                pillarResult: number,
                stairsResult: number,
                slabResult: number,
                railwayResult: number,
                buttonResult: number,
                blockResult: number,
                glassResult: number,
                platingResult: number
            }
        ],
        deshTanksMapArray: [
            { 
                dimension: ResourceLocation, 
                pos: BlockPos,
                hasBuildCorrectly: boolean,
                failedMessageHasSent: boolean,
                hasBuilt: boolean,
                pillarResult: number,
                slabResult: number,
                deshSlabResult: number,
                stairsResult: number,
                deshStairsResult: number,
                blockResult: number,
                glowingPillarResult: number,
                deshBlockResult: number,
                glassResult: number,
                platingResult: number,
                lightningRodResult: number
            }
        ]
    },

    config: {
        launchPadsResult: {
            andesiteAlloyBlockResult: { name: '安山合金块', target: 8 },
            andesiteScaffoldingResult: { name: '安山脚手架', target: 8 },
            encasedFluidPipeResult: { name: '流体管道箱', target: 12 },
            fluidPipeResult: { name: '流体管道', target: 32 },
            mechanicalPumpResult: { name: '动力泵', target: 12 },
            railwayCasingResult: { name: '列车机壳', target: 52 },
            airResult: { name: '空气', target: 36 },
            industrialIronBlockResult: { name: '工业铁块', target: 177 }
        },

        steelTanksResult: {
            pillarResult: { name: '支柱', target: 43 },
            stairsResult: { name: '楼梯', target: 16 },
            slabResult: { name: '台阶', target: 4 },
            railwayResult: { name: '列车机壳', target: 6 },
            buttonResult: { name: '按钮', target: 2 },
            blockResult: { name: '钢块', target: 18 },
            glassResult: { name: '强化玻璃', target: 2 },
            platingResult: { name: '钢板', target: 8 },
            lightningRodResult: { name: '避雷针', target: 1 }
        },

        deshTanksResult: {
            pillarResult: { name: '钢柱', target: 43 },
            slabResult: { name: '钢板台阶', target: 4 },
            deshSlabResult: { name: '戴斯板台阶', target: 4 },
            stairsResult: { name: '钢板楼梯', target: 8 },
            deshStairsResult: { name: '戴斯板楼梯', target: 4 },
            blockResult: { name: '钢块', target: 4 },
            glowingPillarResult: { name: '发光戴斯柱', target: 4 },
            deshBlockResult: { name: '戴斯块', target: 18 },
            glassResult: { name: '强化玻璃', target: 2 },
            platingResult: { name: '钢板方块', target: 24 },
            lightningRodResult: { name: '避雷针', target: 1 },
        }
    }
}

declare namespace Internal {
    interface Player {
        persistentData: CompoundTag & {
            healthFromKills: number,
            healthFromTime: number,
            autoMode: boolean,
            mobKillCount: number,
            hasForeCast: boolean,
            hordeCriticalValue: number,
            hasLoggedBefore: boolean,
            teleportMode: boolean,
            hasSentTeleportMessage: boolean,

            launchPadPaint: CompoundTag_
            
            steelTankPaint: CompoundTag_
            deshTankPaint: CompoundTag_
            ostrumTankPaint: CompoundTag_
            caloriteTankPaint: CompoundTag_

            basinsMapArray: [
                { 
                    dimension: ResourceLocation, 
                    pos: BlockPos
                }
            ],
            campfiresMapArray: [
                { 
                    dimension: ResourceLocation, 
                    pos: BlockPos
                }
            ],
            launchPadsMapArray: [
                { 
                    dimension: ResourceLocation, 
                    pos: BlockPos,
                    hasBuildCorrectly: boolean,
                    failedMessageHasSent: boolean,
                    hasExploded: boolean
                }
            ],
            platformsMapArray: [
                { 
                    dimension: ResourceLocation, 
                    pos: BlockPos
                }
            ],
            steelTanksMapArray: [
                { 
                    dimension: ResourceLocation, 
                    pos: BlockPos,
                    hasBuildCorrectly: boolean,
                    failedMessageHasSent: boolean,
                    hasBuilt: boolean
                }
            ],
            deshTanksMapArray: [
                { 
                    dimension: ResourceLocation, 
                    pos: BlockPos,
                    hasBuildCorrectly: boolean,
                    failedMessageHasSent: boolean,
                    hasBuilt: boolean,
                    pillarResult: number,
                    slabResult: number,
                    deshSlabResult: number,
                    stairsResult: number,
                    deshStairsResult: number,
                    blockResult: number,
                    glowingPillarResult: number,
                    deshBlockResult: number,
                    glassResult: number,
                    platingResult: number,
                    lightningRodResult: number
                }
            ]
        }
    }

    interface ItemStack {
        nbt: CompoundTag & {
            AutoStoredXP: boolean,
            StoredXP: number,
            Energy: number,
            MaxEnergy: number,
            tic_materials: Internal.List<string>,
            Fluid: {
                FluidName: string,
                Amount: number
            },
            Coordinate: {
                dimension: string,
                x: number,
                y: number,
                z: number
            },
            hasTeleport: boolean
        }
    }

    interface BlockContainerJS {
        properties: Map<string, string> & {
            east: string,
            west: string,
            north: string,
            south: string,
            up: string,
            down: string,
            waterlogged: string,
            axis: string,
            lit: string,
            facing: string,
            level: number
        }

        entityData: CompoundTag & {
            Speed: number
            east: {
                Flow: {
                    Amount: number,
                    FluidName: string,
                    In: boolean
                }
            },
            west: {
                Flow: {
                    Amount: number,
                    FluidName: string,
                    In: boolean
                }
            },
            north: {
                Flow: {
                    Amount: number,
                    FluidName: string,
                    In: boolean
                }
            },
            south: {
                Flow: {
                    Amount: number,
                    FluidName: string,
                    In: boolean
                }
            },
            up: {
                Flow: {
                    Amount: number,
                    FluidName: string,
                    In: boolean
                }
            },
            down: {
                Flow: {
                    Amount: number,
                    FluidName: string,
                    In: boolean
                }
            }
        }
    }

    interface NetworkEventJS {
        data: CompoundTag & {
            AutoStoredXP: boolean,
            hasTeleport: boolean,
            hasSentTeleportMessage: boolean
        }
    }
}