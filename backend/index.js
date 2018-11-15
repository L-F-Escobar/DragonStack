// const Dragon = require(`./dragon.js`)

// const foo = new Dragon({ 
//     bday: "Luis bday", 
//     nickName: "Luis Name" 
// });

// const zeek = new Dragon({ 
//     bday: new Date(), 
//     nickName: "ZEEK",
//     traits: [{type: "backgroundColor", traitValue: "black"}]
// });

// // const prince = new Dragon();

// setTimeout(() => {
//     const odin = new Dragon();
//     console.log(`odin`, odin);
// }, 3000);

// // console.log(`foo`, foo);
// console.log(`zeek`, zeek);
// console.log();
// // console.log(`prince`, prince);

const Geneartion = require('./generation');

const generation = new Geneartion;
console.log('generation:\n', generation);

const odin = generation.newDragon();
console.log("new drag Odin: ", odin);

setTimeout(() => {
    const maria = generation.newDragon();
    console.log('maria:', maria);
}, 5000);