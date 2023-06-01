require("dotenv").config();

const dev = {
  bucket_name: process.env.BUCKET_NAME,
  bucket_region: process.env.BUCKET_REGION,
  access_key: process.env.ACCESS_KEY,
  secret_access_key: process.env.SECRET_ACCESS_KEY,
};

const pro = {
  bucket_name: process.env.BUCKET_NAME,
  bucket_region: process.env.BUCKET_REGION,
  access_key: process.env.ACCESS_KEY,
  secret_access_key: process.env.SECRET_ACCESS_KEY,
};

const config = { dev, pro };

const env = process.env.NODE_ENV || "dev";

module.exports = config[env];
