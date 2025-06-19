declare const global: {
    definitionsArray: {
        allBeneficialPotionEffectsArray: Internal.List<Internal.Potion>,
        beneficialPotionEffectsArray: Internal.List<Internal.Potion>, 
        harmfulPotionEffectsArray: Internal.List<Internal.Potion>
        undeads: Internal.List<Internal.LivingEntity>,
        rawMeets: Internal.List<Internal.ItemStack> ,
        vanillaFixMaterials: Internal.List<Internal.ItemStack>,
        banedEntities: Internal.List<Internal.LivingEntity>,
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
        frozenSeconds(seconds: number): number,
        traceFluidSource(fluid: Internal.BlockContainerJS): Internal.BlockContainerJS
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
            hasSentTeleportMessage: boolean
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