const pool = require(`../../databasePool.js`);

class TraitTable {
    static getTraitId({ traitType, traitValue }) {

        console.log(`traitType::traitValue === ${traitType}::${traitValue}`);

        return new Promise( (resolve, reject) => {
            pool.query(
                `SELECT id FROM trait WHERE "traitType" = $1 AND "traitValue" = $2`,
                [traitType, traitValue],
                (error, response) => {
                    if (error) return reject(error);

                    resolve(response.rows[0].id);
                }
            )
        });
    }
}


// TraitTable.getTraitId({ traitType: "backgroundColor", traitValue: 'black' })
//     .then(({ traitId }) => console.log('traitId', traitId))
//     .catch(error => console.error('error'));


module.exports = TraitTable;