// const Geneartion = require('./generation');

// const generation = new Geneartion;
// console.log('generation:\n', generation, '\n');

// const odin = generation.newDragon();
// console.log("new drag Odin: ", odin, '\n');

// setTimeout(() => {
//     const maria = generation.newDragon();
//     console.log('maria:', maria, '\n');
// }, 10000);

const GenerationEgine = require('./engine.js');

const engine = new GenerationEgine();

engine.start();

setTimeout( () => {
    engine.stop();
}, 20000);