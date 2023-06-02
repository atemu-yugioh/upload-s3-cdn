require('dotenv').config()

const dev = {
  app: {
    host: process.env.DEV_APP_PORT || 3002
  },
  db: {
    host: process.env.DEV_DB_HOST || 'localhost',
    port: process.env.DEV_DB_PORT || 27017,
    name: process.env.DEV_DB_NAME || 'uploadDev'
  }
}

const pro = {
  app: {
    host: process.env.APP_PORT || 3002
  },
  db: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 27017,
    name: process.env.DB_NAME || 'uploadPro'
  }
}

const config = { dev, pro }

const env = process.env.NODE_ENV || 'dev'

module.exports = config[env]
