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

// // init database
// app.use(require('path/to/db'))

// // init routes
// app.use('/', require('path/to/routes'))

app.use('/', (req, res, next) => {
  res.status(200).json({
    status: 200,
    message: 'OKAY'
  })
})

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

// khởi tạo cấu trúc thư mục chuẩn clean
/* file app: 
    - init middleware thirty party (compression morgan, helmet, express, cors ...)
    - init db
    - init routes
    - handle error 404
    - handle throw error
*/

/* file server
    - import app
    - listen port
    - process.on('SIGINT') => exit server
*/
