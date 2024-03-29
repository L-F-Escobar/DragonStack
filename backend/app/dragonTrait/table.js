const pool = require('../../databasePool.js');
const TraitTable = require(`../trait/table.js`);

class DragonTraitTable {

    // Static - can use without having to make an instance
    static storeDragonTrait({ dragonId, traitType, traitValue }) {
        return new Promise( (resolve, reject) => {
            TraitTable.getTraitId({ traitType, traitValue })
                .then( (traitId) => {
                    pool.query(
                        `INSERT INTO dragonTrait("traitId", "dragonId") VALUES ($1, $2)`,
                        [traitId, dragonId],
                        (error, response) => {
                            if (error) return reject(error);

                            resolve();
                        }
                    )
                });
        });
    }
}

module.exports = DragonTraitTable;