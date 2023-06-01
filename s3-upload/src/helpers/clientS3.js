const {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
} = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const {
  bucket_name,
  bucket_region,
  access_key,
  secret_access_key,
} = require("../configs/config.s3");

const s3 = new S3Client({
  credentials: {
    accessKeyId: access_key,
    secretAccessKey: secret_access_key,
  },
  region: bucket_region,
});

const uploadToS3 = async ({ Key, Body, ContentType }) => {
  const command = new PutObjectCommand({
    Bucket: bucket_name,
    Key,
    Body,
    ContentType,
  });

  return await s3.send(command);
};

const getLinkFromS3 = async (Key) => {
  const command = new GetObjectCommand({
    Bucket: bucket_name,
    Key: Key,
  });
  const imageUrl = await getSignedUrl(s3, command, { expiresIn: 60 });

  return imageUrl;
};

const deleteLinkFromS3 = async (Key) => {
  const command = new DeleteObjectCommand({
    Bucket: bucket_name,
    Key: Key,
  });

  await s3.send(command);
};

module.exports = {
  uploadToS3,
  getLinkFromS3,
  deleteLinkFromS3,
};
