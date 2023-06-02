const express = require('express')
const router = express.Router()

// check api key

// check permission

// use router
router.use('/upload', require('./upload'))

module.exports = router
