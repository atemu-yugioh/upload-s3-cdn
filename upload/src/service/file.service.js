const fileModel = require("../model/file.model");

class FileService {
  static create = async ({ tittle = "", pathname = "" }) => {
    return await fileModel.create({ tittle, pathname });
  };
}

module.exports = FileService;
