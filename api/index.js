const router = require('express').Router();

router.use('/api', require('./fizzbuzzapi'));

module.exports = router;