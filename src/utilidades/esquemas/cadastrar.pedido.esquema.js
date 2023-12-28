const Joi = require("joi");

const cadastrarPedidoEsquema = Joi.object({
    cliente_id: Joi.number().integer().required().messages({
        "any.required": "O campo cliente_id é obrigatório.",
        "number.base": "O campo cliente_id deve ser um número inteiro.",
        "number.integer": "O campo cliente_id deve ser um número inteiro.",
    }),

    observacao: Joi.string().messages({
        "string.empty": "O campo observação não pode ser vazio.",
        "string.base": "O campo observação não pode ser numérico.",
    }),

    pedido_produtos: Joi.array()
        .required()
        .items(
            Joi.object({
                produto_id: Joi.number().integer().required().messages({
                    "any.required": "O campo produto_id é obrigatório.",
                    "number.base":
                        "O campo produto_id deve ser um número inteiro.",
                    "number.integer":
                        "O campo produto_id deve ser um número inteiro.",
                }),

                quantidade_produto: Joi.number()
                    .integer()
                    .min(1)
                    .required()
                    .messages({
                        "any.required":
                            "O campo quantidade_produto é obrigatório.",
                        "number.min":
                            "O campo quantidade_produto deve ser maior que zero.",
                        "number.base":
                            "O campo quantidade_produto deve ser um número inteiro.",
                        "number.integer":
                            "O campo quantidade_produto deve ser um número inteiro.",
                    }),
            })
                .unknown(false)
                .messages({
                    "object.unknown": "O campo {#label} é inválido.",
                })
        )
        .min(1)
        .messages({
            "any.required": "Informe o campo pedido_produtos.",
            "array.base":
                "No campo pedido_produtos, informe pelo menos um produto, preenchendo o código do produto (produto_id) e a quantidade desejada (quantidade_produto).",
            "array.min":
                "No campo pedido_produtos, informe pelo menos um produto, preenchendo o código do produto (produto_id) e a quantidade desejada (quantidade_produto).",
        }),
})
    .unknown(false)
    .messages({
        "object.unknown": "O campo {#label} é inválido.",
    });

module.exports = cadastrarPedidoEsquema;
