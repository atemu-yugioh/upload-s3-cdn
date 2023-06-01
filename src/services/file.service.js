const fileModel = require("../models/file.model");

class FileService {
  static async createFile({ title = "", pathname, key }) {
    return await fileModel.create({ title, pathname, key });
  }

  static async findByKey(key) {
    return await fileModel.findOne({ key });
  }

  static async deleteFile(key) {
    return await fileModel.deleteOne({ key });
  }
}

module.exports = FileService;
