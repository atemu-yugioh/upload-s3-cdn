const { BadRequestError } = require('../core/error.reponse')
const fileModel = require('../models/file.model')
const { convertToMongodbObjectId } = require('../utils')

class FileService {
  static create = async ({ title = '', pathname = '' }) => {
    return await fileModel.create({ title, pathname })
  }

  static getAll = async ({ filter = {} }) => {
    return await fileModel.find(filter)
  }

  static getDetail = async (id) => {
    const filter = { _id: convertToMongodbObjectId(id) }
    const file = await fileModel.findOne(filter)

    if (!file) {
      throw new BadRequestError('file not exist')
    }

    return file
  }

  static delete = async (id) => {
    return await fileModel.deleteOne({ _id: convertToMongodbObjectId(id) })
  }
}

module.exports = FileService
