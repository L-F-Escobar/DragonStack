const Geneartion = require('./index.js');

class GenerationEngine {
    constructor() {
        this.generation = null;
        this.timer = null;
    }

    start() {
        this.buildNewGeneration();
    }

    stop() {
        clearTimeout(this.timer);
    }
    
    buildNewGeneration() {
        this.generation = new Geneartion();

        console.log("this.generation:", this.generation);

        this.timer = setTimeout(
            () => this.buildNewGeneration(), 
            this.generation.getTime() - Date.now()
        );
    }
}

module.exports = GenerationEngine;