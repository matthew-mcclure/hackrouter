const router = require('express').Router()
const Account = require('./account')

router.get('/library', Account.getLibrary)
router.post('/library', Account.addMedia)

module.exports = router