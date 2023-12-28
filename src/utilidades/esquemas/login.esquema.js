const joi = require("joi");

const esquemaLogin = joi.object({
    email: joi.string().email().required().messages({
        "string.empty": "Um endereço de email precisa ser informado",
        "string.email": "Formato de email inválido",
        "any.required": "Todos os campos são obrigatórios",
    }),
    senha: joi.string().required().messages({
        "string.empty": "Uma senha precisa ser informada",
        "any.required": "Todos os campos são obrigatórios",
    }),
});

module.exports = esquemaLogin;
