const router = require('express').Router()
const Marketplace = require('./marketplace')

router.get('/', Marketplace.getAll)
router.post('/', Marketplace.listMedia)
router.delete('/', Marketplace.sellMedia)

module.exports = router