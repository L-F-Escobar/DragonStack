const pool = require('../../databasePool.js');

class DragonTable {
    // Static - can use without having to make an instance
    static storeDragon(dragon) {
        return new Promise( (resolve, reject) => {
            const { bday, nickName, generationId } = dragon;
            pool.query(
                `INSERT INTO dragon(birthday, nickname, "generationId") 
                VALUES($1, $2, $3) RETURNING id`,
                [bday, nickName, generationId],
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

module.exports = DragonTable;