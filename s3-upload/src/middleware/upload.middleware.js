const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const uploadSingle = (name) => upload.single(name);

const uploadMultiple = upload.single("images");

module.exports = {
  uploadSingle,
  uploadMultiple,
};
