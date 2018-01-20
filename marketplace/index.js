const router = require('express').Router()
const Marketplace = require('./marketplace')

router.get('/', Marketplace.getAll)
router.post('/', Marketplace.sellMedia)

module.exports = router