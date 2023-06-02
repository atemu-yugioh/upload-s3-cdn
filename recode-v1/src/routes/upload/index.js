const express = require('express')
const router = express.Router()

router.get('', (req, res, next) => {
  return res.status(200).json({
    status: 200,
    message: 'get file success'
  })
})

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
