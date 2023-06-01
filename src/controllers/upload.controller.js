"use strict";

const {
  uploadToS3,
  getLinkFromS3,
  deleteLinkFromS3,
} = require("../helpers/clientS3");
const FileService = require("../services/file.service");
const { resizeFile, randomImageName } = require("../utils/utils");

class uploadController {
  upload = async (req, res, next) => {
    const fileBuffer = await resizeFile(req.file.buffer);
    const { pathname, key } = randomImageName();

    const params = {
      Key: pathname,
      Body: fileBuffer,
      ContentType: req.file.mimetype,
    };

    await uploadToS3(params);

    res.status(200).json({
      message: "upload success",
      data: await FileService.createFile({
        title: req.body.title,
        pathname: pathname,
        key: key,
      }),
    });
  };

  getFile = async (req, res, next) => {
    const file = await FileService.findByKey(req.query.key);

    if (!file) {
      return res.status(400).json({ message: "Not found file!!!", data: null });
    }

    res.status(200).json({
      message: "get list file success",
      data: {
        url: await getLinkFromS3(file.pathname),
      },
    });
  };

  deleteFile = async (req, res, next) => {
    const file = await FileService.findByKey(req.params.key);

    if (!file) {
      return res.status(400).json({ message: "Not found file!!!", data: null });
    }

    await deleteLinkFromS3(file.pathname);

    res.status(200).json({
      message: "delete file success",
      data: await FileService.deleteFile(req.params.key),
    });
  };
}

module.exports = new uploadController();
