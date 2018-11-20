const pool = require('../../databasePool.js');
const DragonTraitTable = require(`../dragonTrait/table.js`);

class DragonTable {

    // Static - can use without having to make an instance
    static storeDragon(dragon) {
        const { bday, nickName, generationId } = dragon;
        
        return new Promise( (resolve, reject) => {
            pool.query(
                `INSERT INTO dragon(birthday, nickname, "generationId") 
                VALUES($1, $2, $3) RETURNING id`,
                [bday, nickName, generationId],
                (error, response) => {
                    if (error) return reject(error);
    
                    const dragonId = response.rows[0].id;

                    Promise.all(dragon.traits.map( ({ traitType, traitValue }) => {
                        return DragonTraitTable.storeDragonTrait({
                             dragonId, traitType, traitValue
                        });
                    }))
                    .then( () => resolve({ dragonId }))
                    .catch(error => reject(error));
                }
            )
        });
    }
}

module.exports = DragonTable;