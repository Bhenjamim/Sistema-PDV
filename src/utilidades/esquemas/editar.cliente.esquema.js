const joi = require("joi");

const nomeMensagem = {
    "string.empty": "O campo nome não pode ser vazio.",
    "any.required": "Os campos nome, email e cpf são obrigatórios.",
    "string.pattern.base":
        "Insira um nome válido. Nomes podem conter apenas letras do alfabeto, espaços e acentos.",
};

const emailMensagem = {
    "string.email": "Email inválido.",
    "any.required": "Os campos nome, email e cpf são obrigatórios.",
    "string.empty": "O campo email não pode ser vazio.",
};

const cpfMensagem = {
    "string.pattern.base":
        "O cpf precisa ter necessariamente 11 caracteres numéricos.",
    "any.required": "Os campos nome, email e cpf são obrigatórios.",
    "string.empty": "O campo cpf não pode ser vazio.",
};
const cepMensagem = {
    "string.pattern.base":
        "O cep precisa ter necessariamente 8 caracteres numéricos.",
    "string.empty": "O campo cep não pode ser vazio.",
};

const ruaMensagem = {
    "string.pattern.base": "A rua pode ter no máximo 100 caracteres.",
    "string.empty": "O campo rua não pode ser vazio.",
    "string.min": "A sigla do estado deve conter exatamente 2 caracteres.",
    "string.max": "A sigla do estado deve conter exatamente 2 caracteres.",
};

const numeroMensagem = {
    "string.pattern.base":
        "O número de endereço pode ter no máximo 10 caracteres numéricos.",
    "string.base": "O número precisa ser um valor representado como texto.",
    "string.empty": "O campo número não pode ser vazio.",
};

const bairroMensagem = {
    "string.pattern.base": "O bairro pode ter no máximo 50 caracteres.",
    "string.empty": "O campo bairro não pode ser vazio.",
};

const cidadeMensagem = {
    "string.pattern.base": "A cidade pode ter no máximo 100 caracteres.",
    "string.empty": "O campo cidade não pode ser vazio.",
};

const estadoMensagem = {
    "string.pattern.base":
        "A sigla do estado precisa ser uma das siglas válidas.",
    "string.empty": "O campo estado não pode ser vazio.",
    "string.min": "A sigla do estado deve conter exatamente 2 caracteres.",
    "string.max": "A sigla do estado deve conter exatamente 2 caracteres.",
};

const restricaoGeralMensagem = {
    "object.missing":
        "É preciso informar pelo menos um campo para atualização.",
};

const validacao = joi
    .object({
        nome: joi
            .string()
            .required()
            .pattern(/^[A-Za-zÀ-ÿ']+([\s][A-Za-zÀ-ÿ']+)*$/)
            .messages(nomeMensagem),

        email: joi.string().required().email().messages(emailMensagem),

        cpf: joi
            .string()
            .required()
            .pattern(/^[0-9]{11}$/)
            .messages(cpfMensagem),

        cep: joi
            .string()
            .pattern(/^[0-9]{8}$/)
            .messages(cepMensagem),

        rua: joi.string().min(1).max(100).messages(ruaMensagem),

        numero: joi
            .string()
            .pattern(/^[0-9]{1,10}$/)
            .messages(numeroMensagem),

        bairro: joi.string().min(1).max(100).messages(bairroMensagem),

        cidade: joi.string().min(1).max(100).messages(cidadeMensagem),

        estado: joi
            .string()
            .pattern(
                /^(AC|AL|AM|AP|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RO|RR|RS|SC|SE|SP|TO)$/i
            )
            .min(2)
            .max(2)
            .messages(estadoMensagem),
    })
    .or(
        "nome",
        "email",
        "cpf",
        "cep",
        "rua",
        "numero",
        "bairro",
        "cidade",
        "estado"
    )
    .messages(restricaoGeralMensagem);

module.exports = validacao;
