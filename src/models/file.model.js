"use strict";

const { model, Schema } = require("mongoose"); // Erase if already required

const DOCUMENT_NAME = "File";
const COLLECTION_NAME = "Files";

// Declare the Schema of the Mongo model
var fileSchema = new Schema(
  {
    title: {
      type: String,
    },
    key: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    pathname: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    collection: COLLECTION_NAME,
    timestamps: true,
  }
);

//Export the model
module.exports = model(DOCUMENT_NAME, fileSchema);
