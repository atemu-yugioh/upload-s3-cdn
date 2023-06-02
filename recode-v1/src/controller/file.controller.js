const FileService = require('../services/file.service')

class FileController {
  create = async (req, res, next) => {
    return res.status(200).json({
      status: 201,
      message: 'success',
      data: await FileService.create({
        ...req.body
      })
    })
  }
}

module.exports = new FileController()
