const { model, Schema } = require("mongoose");

DOCUMENT_NAME = "File";
COLLECTION_NAME = "Files";

const fileSchema = new Schema(
  {
    tittle: {
      type: String,
      required: false,
      default: "",
    },
    pathname: {
      type: String,
      required: true,
      default: "",
    },
  },
  {
    collection: COLLECTION_NAME,
    timestamps: true,
  }
);

module.exports = model(DOCUMENT_NAME, fileSchema);
