const Dragon = require(`./dragon.js`)

const foo = new Dragon({ 
    bday: "Luis bday", 
    nickName: "Luis Name" 
});

const zeek = new Dragon({ 
    bday: "Zeek bday", 
    nickName: "Zeek Name" 
});

const prince = new Dragon();

setTimeout(() => {
    const odin = new Dragon();
    console.log(`odin`, odin);
}, 3000);

console.log(`foo`, foo);
console.log(`zeek`, zeek);
console.log(`prince`, prince);