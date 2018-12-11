const {Router} = require('express');
const DragonTable = require(`../dragon/table.js`);

const router = new Router();

// (url, callback func)
// req = request 
// res = response
router.get('/new', (req, res, next) => {
    const dragon = req.app.locals.engine.generation.newDragon();

    DragonTable.storeDragon(dragon)
        .then(({ dragonId }) => {
            console.log('dragonId', dragonId);

            dragon.dragonId = dragonId;

            res.json({ dragon });
        })
        .catch((error) => next(error));
});

module.exports = router;