
// express is a represantation of a web server application full of helper methods
// Importing a built-in module:
const express = require('express');
// function which returns a cors middleware 
const cors = require('cors');
const GenerationEngine = require('./generation/engine.js');
const dragonRouter = require('./api/dragon.js');
const generationRouter = require('./api/generation.js')

const app = express();
const engine = new GenerationEngine();

app.locals.engine = engine;

// Takes the origin of our frontend env
// affect is: idenitied this backend server to have the same origin as frontend
app.use(cors({ origin: "http://localhost:1234" }));

app.use('/dragon', dragonRouter);
app.use('/generation', generationRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;

    console.log(err.message);

    res.status(statusCode).json({
        type: 'error', message: err.message
    });
});

engine.start();


module.exports = app;