const FileService = require('../services/file.service')

class FileController {
  upload = async (req, res, next) => {
    try {
      return res.status(200).json({
        status: 200,
        message: 'upload file success',
        data: await FileService.create({ ...req.body })
      })
    } catch (error) {
      throw new Error('Upload Fail')
    }
  }
}

module.exports = new FileController()
