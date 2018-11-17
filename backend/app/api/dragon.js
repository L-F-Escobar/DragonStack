const {Router} = require('express');

const router = new Router();

// (url, callback func)
// req = request 
// res = response
router.get('/new', (req, res) => {
    res.json({ dragon: req.app.locals.engine.generation.newDragon() });
});

module.exports = router;