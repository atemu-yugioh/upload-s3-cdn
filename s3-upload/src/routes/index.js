"use strict";

const express = require("express");
const uploadController = require("../controllers/upload.controller");
const asyncHandler = require("../helpers/asyncHandler");
const { uploadSingle } = require("../middleware/upload.middleware");
const router = express.Router();

router.post(
  "/upload",
  uploadSingle("image"),
  asyncHandler(uploadController.upload)
);
router.get("/upload", asyncHandler(uploadController.getFile));
router.delete("/upload/:key", asyncHandler(uploadController.deleteFile));

module.exports = router;
