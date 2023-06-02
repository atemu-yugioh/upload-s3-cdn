const compression = require('compression')
const morgan = require('morgan')
const { default: helmet } = require('helmet')
const express = require('express')

const app = express()

// init middleware
app.use(compression())
app.use(morgan('dev'))
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// init database
require('./dbs/init.mongodb')

// // init routes
app.use('/api/v1', require('./routes'))

// handle 404 error
app.use((req, res, next) => {
  const error = new Error('Not found')
  error.status = 404
  next(error)
})

// handling error throw
app.use((error, req, res, next) => {
  const statusCodes = error.status || 500
  return res.status(statusCodes).json({
    status: 'error',
    code: statusCodes,
    message: error.message || 'Internal server error'
  })
})

module.exports = app
