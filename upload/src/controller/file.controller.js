const FileService = require("../service/file.service");

class FileController {
  upload = async (req, res, next) => {
    try {
      return res.status(200).json({
        status: 201,
        message: "Success",
        data: await FileService.create({ ...req.body }),
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: "Error",
        data: null,
      });
    }
  };
}

module.exports = new FileController();
