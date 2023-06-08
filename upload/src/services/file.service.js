const fileModel = require('../models/file.model')

class FileService {
  static create = async ({ title = '', pathname = '' }) => {
    return await fileModel.create({ title, pathname })
  }
}

module.exports = FileService
