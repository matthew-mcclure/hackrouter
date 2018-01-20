const router = require('express').Router();
const accountRouter = require('./account')
const marketplaceRouter = require('./marketplace')

router.use('/account', accountRouter)
router.use('/marketplace', marketplaceRouter)

router.get('/healthcheck', (req, res, next) => res.send('beep. boop. i am alive, human.'))

module.exports = router