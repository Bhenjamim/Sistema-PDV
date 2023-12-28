const joi = require("joi");

const nomeMensagem = {
    "any.required": "É preciso informar um nome.",
    "string.empty": "O campo nome não pode ser vazio.",
    "string.pattern.base":
        "Insira um nome válido. Nomes podem conter apenas letras do alfabeto, espaços e acentos.",
};

const emailMensagem = {
    "any.required": "É preciso informar um email.",
    "string.email": "Email inválido.",
    "string.empty": "O campo email não pode ser vazio.",
};

const senhaMensagem = {
    "any.required": "É preciso informar uma senha.",
    "string.pattern.base":
        "A senha precisa ter no mínimo 8 caracteres entre letras, números e caracteres especiais.",
    "string.empty": "O campo senha não pode ser vazio.",
};

const validacao = joi.object({
    nome: joi
        .string()
        .required()
        .pattern(/^[A-Za-zÀ-ÿ']+([\s][A-Za-zÀ-ÿ']+)*$/)
        .messages(nomeMensagem),

    email: joi.string().required().email().messages(emailMensagem),

    senha: joi
        .string()
        .required()
        .pattern(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&+=!*]).{8,}$/)
        .messages(senhaMensagem),
});

module.exports = validacao;
