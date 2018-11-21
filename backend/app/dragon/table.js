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

    static getDragon({ dragonId }) {
        return new Promise( (resolve, reject) => {
            pool.query(
                `SELECT birthday, nickname, "generationId" 
                FROM dragon 
                WHERE dragon.id = $1`,
                [dragonId],
                (error, response) => {
                    if (error) return reject(error);

                    if (response.rows.length === 0) return reject(new Error(`No Dragon`));

                    resolve(response.rows[0]);
                }
            )
        });
    }


}

// WORKS
// DragonTable.getDragon({ dragonId: 0 })
//     .then(dragon => console.log(dragon))
//     .catch(error => console.error('error', error));


module.exports = DragonTable;