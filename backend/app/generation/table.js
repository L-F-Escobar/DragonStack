const pool = require('../../databasePool.js');

class GenerationTable {
    // Static - can use without having to make an instance
    static storeGeneration(generation) {
        return new Promise( (resolve, reject) => {
            pool.query(
                'INSERT INTO generation(expiration) VALUES($1) RETURNING id',
                [generation.expiration],
                // response = array of return values.
                (error, response) => {
                    if (error) return reject(error);
    
                    const generationId = response.rows[0].id;
    
                    resolve({ generationId });
                }
            );
        });
    }
}


module.exports = GenerationTable;