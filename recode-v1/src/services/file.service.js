const fileModel = require('../model/file.model')

class FileService {
  static findByKey = async (key) => {
    return await fileModel.findOne({ key })
  }

  static create = async ({ title = '', pathname = '', key }) => {
    return await fileModel.create({ title, pathname, key })
  }

  static delete = async (key) => {
    return await fileModel.deleteOne({ key })
  }
}

module.exports = FileService
