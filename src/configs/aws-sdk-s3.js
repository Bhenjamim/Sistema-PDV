const { S3Client } = require("@aws-sdk/client-s3");

const s3Cliente = new S3Client({
    endpoint: `https://${process.env.BUCKET_ENDPOINT}`,
    region: process.env.BUCKET_REGION,
    credentials: {
        accessKeyId: process.env.KEY_ID,
        secretAccessKey: process.env.APP_KEY,
    },
});

module.exports = s3Cliente;
