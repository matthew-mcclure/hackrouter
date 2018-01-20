const router = require('express').Router()
const Marketplace = require('./marketplace')

router.get('/', Marketplace.getAll)
router.post('/', Marketplace.postMedia)

module.exports = router