const express = require('express')
const router = express.Router()

router.get('', (req, res, next) => {
  return res.status(200).json({
    status: 200,
    message: 'get link success',
    data: null
  })
})

router.post('', (req, res, next) => {
  return res.status(200).json({
    status: 200,
    message: 'upload link success',
    data: null
  })
})

router.delete('', (req, res, next) => {
  return res.status(200).json({
    status: 200,
    message: 'delete link success',
    data: null
  })
})

module.exports = router
