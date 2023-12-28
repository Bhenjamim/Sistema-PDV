const s3Cliente = require("../configs/aws-sdk-s3");
const { PutObjectCommand, DeleteObjectCommand } = require("@aws-sdk/client-s3");

const uploadArquivo = async (dir, arquivo) => {
    const comando = new PutObjectCommand({
        Bucket: process.env.BUCKET_NAME,
        Key: `${dir}/${arquivo.originalname}`,
        Body: arquivo.buffer,
        ContentType: arquivo.mimetype,
    });

    const resposta = await s3Cliente.send(comando);

    if (resposta["$metadata"].httpStatusCode !== 200) {
        return null;
    }

    const url = `https://${process.env.BUCKET_NAME}.s3.us-east-005.backblazeb2.com/${dir}/${arquivo.originalname}`;

    return url;
};

const excluirArquivo = async (caminhoArquivo) => {
    const comando = new DeleteObjectCommand({
        Bucket: process.env.BUCKET_NAME,
        Key: caminhoArquivo,
    });

    const resposta = await s3Cliente.send(comando);

    if (resposta["$metadata"].httpStatusCode !== 204) {
        return null;
    }

    return 1;
};

module.exports = { uploadArquivo, excluirArquivo };
