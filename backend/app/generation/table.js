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

class DragonTable {
    // Static - can use without having to make an instance
    static storeDragon(dragon) {
        return new Promise( (resolve, reject) => {
            pool.query(
                'INSERT INTO dragon(birthday, nickname, generationId) VALUES($1, $2, $3, $4) RETURNING id',
                [dragon.bday], [dragon.nickName], [dragon.nickName], [dragon.generationId],
                // response = array of return values.
                (error, response) => {
                    if (error) return reject(error);
    
                    const dragonId = response.rows[0].id;
    
                    resolve({ dragonId });
                }
            );
        });
    }
}

module.exports = {
    GenerationTable,
    DragonTable
}