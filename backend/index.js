const Dragon = require(`./dragon.js`)

const foo = new Dragon({ 
    bday: "Luis bday", 
    nickName: "Luis Name" 
});

const zeek = new Dragon({ 
    bday: new Date(), 
    nickName: "Zeek Name",
    traits: [{type: "backgroundColor", traitValue: "green"}]
});

const prince = new Dragon();

setTimeout(() => {
    const odin = new Dragon();
    console.log(`odin`, odin);
}, 3000);

console.log(`foo`, foo);
console.log(`zeek`, zeek);
console.log(`prince`, prince);