const express = require('express')
const fileController = require('../../controllers/file.controller')
const router = express.Router()

router.get('', fileController.getAll)

router.post('', fileController.upload)

router.delete('', (req, res, next) => {
  return res.status(200).json({
    status: 200,
    message: 'delete link success',
    data: null
  })
})

module.exports = router
