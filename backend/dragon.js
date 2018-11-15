const TRAITS = require("./traits.json");

const DEFFAULT_PROPERTIES = {
    nickName: "unnamed",
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
    // ({ map/dict })
    // Non-ordered perameter
    constructor({ bday, nickName, traits } = {}) {
        // console.log(`bday`, bday);
        // console.log(`nickName`, nickName);
        this.bday = bday || DEFFAULT_PROPERTIES.bday;
        this.nickName = nickName || DEFFAULT_PROPERTIES.nickName;
        this.traits = traits || DEFFAULT_PROPERTIES.randomTraits;
    }
}

module.exports = Dragon;