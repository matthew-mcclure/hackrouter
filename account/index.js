const router = require('express').Router()
const Account = require('./account')

router.get('/library', Account.getLibrary)
router.post('/library', Account.postMedia)

module.exports = router