const { SuccessResponse, OK } = require('../core/success.response')
const FileService = require('../services/file.service')

class FileController {
  upload = async (req, res, next) => {
    return new OK({
      message: 'upload file success',
      metaData: await FileService.create({ ...req.body })
    }).send(res)
  }

  getDetail = async (req, res, next) => {
    return SuccessResponse({
      message: 'get file success',
      metaData: await FileService.getDetail(req.params.id)
    })
  }

  getAll = async (req, res, next) => {
    return new SuccessResponse({
      message: 'Get link success',
      metaData: await FileService.getAll({})
    }).send(res)
  }

  delete = async (req, res, next) => {
    return new SuccessResponse({
      message: 'delete file success',
      metaData: await FileService.delete()
    }).send(res)
  }
}

module.exports = new FileController()
