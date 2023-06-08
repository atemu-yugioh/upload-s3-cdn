const express = require('express')
const fileController = require('../../controllers/file.controller')
const router = express.Router()

router.get('', fileController.getAll)

router.post('', fileController.upload)

router.delete('/:id', fileController.delete)

module.exports = router
