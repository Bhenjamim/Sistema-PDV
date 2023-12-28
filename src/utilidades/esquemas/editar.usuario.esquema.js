const joi = require("joi");

const nomeMensagem = {
    "string.base": "O nome deve conter caracteres válidos",
    "string.empty": "O campo nome não pode ser vazio.",
    "string.pattern.base":
        "Insira um nome válido. Nomes podem conter apenas letras do alfabeto, espaços e acentos.",
};

const emailMensagem = {
    "string.email": "Email inválido.",
    "string.empty": "O campo email não pode ser vazio.",
};

const senhaMensagem = {
    "string.pattern.base":
        "A senha precisa ter no mínimo 8 caracteres entre letras, números e caracteres especiais.",
    "string.empty": "O campo senha não pode ser vazio.",
};

const restricaoGeralMensagem = {
    "object.missing":
        "É preciso informar pelo menos um campo para atualização (nome, email ou senha).",
};

const validacao = joi
    .object({
        nome: joi
            .string()
            .pattern(/^[A-Za-zÀ-ÿ']+([\s][A-Za-zÀ-ÿ']+)*$/)
            .messages(nomeMensagem),
        email: joi.string().email().messages(emailMensagem),
        senha: joi
            .string()
            .pattern(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&+=!*]).{8,}$/)
            .messages(senhaMensagem),
    })
    .or("nome", "email", "senha")
    .messages(restricaoGeralMensagem);

module.exports = validacao;
