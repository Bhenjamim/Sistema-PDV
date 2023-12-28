const joi = require("joi");

const editarProdutoEsquema = joi
    .object({
        descricao: joi.string().messages({
            "string.base": "O campo descrição está no em formato inválido.",
        }),
        quantidade_estoque: joi.number().integer().messages({
            "number.base":
                "O campo quantidade_estoque deve ser preenchido com números inteiros.",
            "number.integer":
                "O campo quantidade_estoque deve ser preenchido com números inteiros.",
        }),
        valor: joi.number().integer().messages({
            "number.base":
                "O campo valor deve ser preenchido com números inteiros.",
            "number.integer":
                "O campo valor deve ser preenchido com números inteiros.",
        }),
        categoria_id: joi.number().integer().min(0).messages({
            "number.base":
                "O campo categoria_id deve ser preenchido com números inteiros.",
            "number.integer":
                "O campo categoria_id deve ser preenchido com números inteiros.",
        }),
        produto_imagem: joi.string().empty().messages({
            "string.empty": "O campo produto_imagem não pode ser vazio.",
        }),
    })
    .or("descricao", "quantidade_estoque", "valor", "categoria_id")
    .messages({
        "object.missing":
            "É preciso informar pelo menos um campo para atualização.",
    });

module.exports = editarProdutoEsquema;
