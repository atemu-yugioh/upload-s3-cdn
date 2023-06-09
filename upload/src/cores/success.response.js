const { StatusCodes, ReasonPhrases } = require('../utils/httpStatusCode')

class SuccessResponse {
  constructor({ message, statusCodes = StatusCodes.OK, reasonStatusCode = ReasonPhrases.OK, metaData = {} }) {
    this.message = message ? message : reasonStatusCode
    this.statusCodes = statusCodes
    this.metaData = metaData
  }

  send = (res, header = {}) => {
    return res.status(this.statusCodes).json(this)
  }
}

class OK extends SuccessResponse {
  constructor({ message, metadata }) {
    super({ message, metadata })
  }
}

class CREATED extends SuccessResponse {
  constructor({
    message = ReasonPhrases.CREATED,
    statusCodes = StatusCodes.CREATED,
    reasonStatusCode = ReasonPhrases.CREATED,
    metaData,
    option = {}
  }) {
    super({ message, statusCodes, reasonStatusCode, metaData })
    this.option = option
  }
}

module.exports = {
  SuccessResponse,
  OK,
  CREATED
}
