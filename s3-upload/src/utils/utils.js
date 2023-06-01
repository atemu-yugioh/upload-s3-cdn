const sharp = require("sharp");
const crypto = require("crypto");
const resizeFile = async (fileBuffer) => {
  return await sharp(fileBuffer)
    .resize({ height: 1920, width: 1080, fit: "contain" })
    .toBuffer();
};

const randomImageName = (byte = 32) => {
  const date = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();

  const keyFileName = crypto.randomBytes(byte).toString("hex");
  const pathname = `${year}/${month}/${date}/${keyFileName}`;

  return {
    key: keyFileName,
    pathname,
  };
};

module.exports = {
  resizeFile,
  randomImageName,
};
