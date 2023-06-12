const mongoose = require('mongoose')
const {
  db: { host, port, name }
} = require('../configs/mongodb.config')

const connectionString = `mongodb://${host}:${port}/${name}`

class Database {
  constructor() {
    this.connect()
  }

  connect(type = 'mongo') {
    if (1 === 1) {
      mongoose.set('debug', true)
      mongoose.set('debug', { color: true })
    }

    mongoose
      .connect(connectionString)
      .then((_) => {
        console.log('connect to database success')
      })
      .catch((error) => {
        console.log('connect error')
      })
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database()
    }
    return Database.instance
  }
}

const instanceMongodb = Database.getInstance()

module.exports = instanceMongodb
