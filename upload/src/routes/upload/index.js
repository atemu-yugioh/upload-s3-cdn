const express = require('express')
const fileController = require('../../controllers/file.controller')
const asyncHandler = require('../../helper/asyncHandler')
const router = express.Router()

router.get('', asyncHandler(fileController.getAll))

router.get('/:id', asyncHandler(fileController.getDetail))

router.post('', asyncHandler(fileController.upload))

router.delete('', asyncHandler(fileController.delete))

module.exports = router
