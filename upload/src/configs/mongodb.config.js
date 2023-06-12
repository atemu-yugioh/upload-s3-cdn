require('dotenv').config()

const dev = {
  app: {
    port: process.env.DEV_PORT || 3002
  },
  db: {
    host: process.env.DEV_DB_HOST || 'localhost',
    port: process.env.DEV_DB_PORT || '27017',
    name: process.env.DEV_DB_NAME || 'uploadDev'
  }
}

const pro = {
  app: {
    port: process.env.PORT || 3002
  },
  db: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || '27017',
    name: process.env.DB_NAME || 'uploadPro'
  }
}

const env = process.env.NODE_ENV

const config = { dev, pro }

module.exports = config[env]
