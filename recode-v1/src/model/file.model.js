const { model, Schema } = require('mongoose')

const DOCUMENT_NAME = 'File'
const COLLECTION_NAME = 'Files'

const fileSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      default: ''
    },
    pathname: {
      type: String,
      required: true,
      default: ''
    },
    key: {
      type: String,
      required: true,
      index: true
    }
  },
  {
    collection: COLLECTION_NAME,
    timestamps: {
      createdAt: 'createOn',
      updatedAt: 'updateOn'
    }
  }
)

module.exports = model(DOCUMENT_NAME, fileSchema)
