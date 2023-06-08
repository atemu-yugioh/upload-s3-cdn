const { Types } = require('mongoose')

convertToObjectIdMongodb = (id) => new Types.ObjectId(id)

module.exports = {
  convertToObjectIdMongodb
}
