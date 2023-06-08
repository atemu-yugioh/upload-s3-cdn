const fileModel = require('../models/file.model')

class FileService {
  static create = async ({ title = '', pathname = '' }) => {
    return await fileModel.create({ title, pathname })
  }

  static getAll = async () => {
    return await fileModel.find()
  }

  static delete = async (id) => {
    return await fileModel.deleteOne({ id })
  }
}

module.exports = FileService
