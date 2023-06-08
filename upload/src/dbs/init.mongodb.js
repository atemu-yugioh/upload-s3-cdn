const mongoose = require('mongoose')
const {
  db: { host, name, port }
} = require('../configs/mongodb.config')
const connectionString = `mongodb://${host}:${port}/${name}`

class Database {
  constructor() {
    this.connect()
  }

  connect(type = 'mongo') {
    mongoose
      .connect(connectionString)
      .then((_) => {
        if (1 === 1) {
          mongoose.set('debug', true)
          mongoose.set('debug', { color: true })
        }
        console.log('Connect to database success')
      })
      .catch((err) => {
        console.log('Unable connect to database')
      })
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database()
    }

    return Database.instance
  }
}

const instanceMongo = Database.getInstance()

module.exports = instanceMongo
