const DEFFAULT_PROPERTIES = {
    nickName: "FUCK MY NAME",
    get bday() {
        return new Date()
    }
}

class Dragon {
    // ({ map/dict })
    // Non-ordered perameter
    constructor({ bday, nickName } = {}) {
        // console.log(`bday`, bday);
        // console.log(`nickName`, nickName);
        this.bday = bday || DEFFAULT_PROPERTIES.bday;
        this.nickName = nickName || DEFFAULT_PROPERTIES.nickName;
    }
}

module.exports = Dragon;