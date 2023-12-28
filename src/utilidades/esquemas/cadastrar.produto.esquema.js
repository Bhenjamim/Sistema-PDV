const joi = require("joi");

const cadastrarProdutoEsquema = joi.object({
    descricao: joi.string().required().messages({
        "any.required":
            "Os campos descrição, quantidade_estoque, valor e categoria_id são obrigatórios.",
        "string.empty": "Não devem existir campos vazios",
        "string.base": "O campo descrição está no em formato inválido.",
    }),
    quantidade_estoque: joi.number().integer().required().min(0).messages({
        "any.required":
            "Os campos descrição, quantidade_estoque, valor e categoria_id são obrigatórios.",
        "number.base":
            "O campo quantidade_estoque deve ser preenchido com números inteiros.",
        "number.integer":
            "O campo quantidade_estoque deve ser preenchido com números inteiros.",
        "number.min": "Quantidade de estoque não pode ser negativa.",
    }),
    valor: joi.number().integer().required().min(1).messages({
        "any.required":
            "Os campos descrição, quantidade_estoque, valor e categoria_id são obrigatórios.",
        "number.base":
            "O campo valor deve ser preenchido com números inteiros.",
        "number.integer":
            "O campo valor deve ser preenchido com números inteiros.",
        "number.min": "Insira um valor maior que zero.",
    }),
    categoria_id: joi.number().integer().required().messages({
        "any.required":
            "Os campos descrição, quantidade_estoque, valor e categoria_id são obrigatórios.",
        "number.base":
            "O campo categoria_id deve ser preenchido com números inteiros.",
        "number.integer":
            "O campo categoria_id deve ser preenchido com números inteiros.",
    }),
    produto_imagem: joi.string().empty().messages({
        "string.empty": "O campo produto_imagem não pode ser vazio.",
    }),
});

module.exports = cadastrarProdutoEsquema;
