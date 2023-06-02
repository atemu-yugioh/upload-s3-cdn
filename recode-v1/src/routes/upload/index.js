const express = require('express')
const fileController = require('../../controller/file.controller')
const router = express.Router()

router.post('', fileController.create)

router.post('', (req, res, next) => {
  return res.status(200).json({
    status: 200,
    message: 'Upload file success'
  })
})

router.delete('', (req, res, next) => {
  return res.status(200).json({
    status: 200,
    message: 'Delete file success'
  })
})

module.exports = router
