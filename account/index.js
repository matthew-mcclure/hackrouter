const router = require('express').Router()
const Account = require('./account')
const Marketplace = require('../marketplace/marketplace')

router.get('/library', Account.getLibrary)
router.post('/library', Account.addMedia)
router.put('/library/sell', Account.sellMedia, Marketplace.listMedia)

module.exports = router