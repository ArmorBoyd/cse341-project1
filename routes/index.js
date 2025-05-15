const router = require('express').Router();

router.get('/', (req, res) => { res.send('Hello Biotch'); });

module.exports = router;