
const TRAITS = require("../../data/traits.json");

const DEFFAULT_PROPERTIES = {
    dragonId: undefined,
    nickName: "unnamed",
    generationId: undefined,
    get bday() {
        return new Date()
    },
    get randomTraits() {
        const traits = [];
    
        TRAITS.forEach(TRAIT => {
            const traitType = TRAIT.type;
            const traitValues = TRAIT.values;

            const traitValue = traitValues[Math.floor(Math.random() * traitValues.length)];

            traits.push({ traitType, traitValue});
        });
        
        return traits;
    }
}

class Dragon {
    // Non-ordered perameter
    constructor({ dragonId, bday, nickName, traits, generationId } = {}) {
        this.dragonId = dragonId || DEFFAULT_PROPERTIES.dragonId;
        this.bday = bday || DEFFAULT_PROPERTIES.bday;
        this.nickName = nickName || DEFFAULT_PROPERTIES.nickName;
        this.traits = traits || DEFFAULT_PROPERTIES.randomTraits;
        this.generationId = generationId || DEFFAULT_PROPERTIES.generationId;
    }
}

module.exports = Dragon;