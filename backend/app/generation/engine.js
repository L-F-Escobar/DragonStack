const Geneartion = require('./index.js');
const GeneartionTable = require('./table.js');

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
        const generation = new Geneartion();

        GeneartionTable.storeGeneration(generation)
            .then(({ generationId }) => {
                this.generation = generation;

                this.generation.generationId = generationId;

                console.log("GenerationEngine:", this.generation);

                this.timer = setTimeout(
                    () => this.buildNewGeneration(), 
                    this.generation.getTime() - Date.now()
                );
            })
            .catch(error => console.log(error));
    }
}

module.exports = GenerationEngine;