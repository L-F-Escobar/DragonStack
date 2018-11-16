// const Geneartion = require('./generation');

// const generation = new Geneartion;
// console.log('generation:\n', generation, '\n');

// const odin = generation.newDragon();
// console.log("new drag Odin: ", odin, '\n');

// setTimeout(() => {
//     const maria = generation.newDragon();
//     console.log('maria:', maria, '\n');
// }, 10000);


// express is a represantation of a web server application full of helper methods
const express = require('express');
const GenerationEgine = require('./generation/engine.js');

const app = express();
const engine = new GenerationEgine();

engine.start();

// (url, callback func)
// req = request 
// res = response
app.get('/dragon/new', (req, res) => {
    res.json({ dragon: engine.generation.newDragon() });
});



module.exports = app;