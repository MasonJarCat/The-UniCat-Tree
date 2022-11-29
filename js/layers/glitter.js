addLayer("glitter", {
    symbol: "G", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "glitter", // Name of prestige currency
    baseResource: "sparkles", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "g", description: "G: Reset for Glitter", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        11: {
            title: "more sparkles",
            description: "gain 50% more sparkles",
            cost: new Decimal(1),
        },
        12: {
            title: "more more sparkles",
            description: "gain 150% more sparkles",
            cost: new Decimal(10),
        },
        13: {
            title: "more more more sparkles",
            description: "gain 250% more sparkles",
            cost: new Decimal(100),
        },
        21: {
            title: "that's enough sparkles",
            description: "glitter gain is increased by 50%",
            cost: new Decimal(1000),
        },
        22: {
            title: "you want more sparkles? Fine.",
            description: "sparkle gain is increased by sparkles",
            cost: new Decimal(10000),
        }
    }, 
})

