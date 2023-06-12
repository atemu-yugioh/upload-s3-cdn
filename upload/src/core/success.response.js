const { StatusCodes, ReasonPhrases } = require('../utils/httpStatusCode')

class SuccessResponse {
  constructor({ statusCode = StatusCodes.OK, message, reasonPhrases = ReasonPhrases.OK, metaData = {} }) {
    this.message = message ? message : reasonPhrases
    this.metaData = metaData
    this.statusCode = statusCode
  }

  send(res, header = {}) {
    res.status(this.statusCode).json(this)
  }
}

class OK extends SuccessResponse {
  constructor({ message, metaData }) {
    super({ message, metaData })
  }
}

class CREATED extends SuccessResponse {
  constructor({
    statusCode = StatusCodes.CREATED,
    message = ReasonPhrases.CREATED,
    reasonPhrases = ReasonPhrases.CREATED,
    metaData
  }) {
    super({ statusCode, message, metaData, reasonPhrases })
  }
}

module.exports = {
  SuccessResponse,
  OK,
  CREATED
}
