const knex = require("../configs/conexao");

const produtoRepositorio = {
    cadastrar: async function (dados) {
        const produto = await knex("produtos").insert(dados, ["*"]);
        return produto[0];
    },
    buscarTodos: async function () {
        const produtos = await knex("produtos");
        return produtos;
    },
    buscarPorCategoria: async function (categoria_id) {
        const produtos = await knex("produtos").where({ categoria_id });
        return produtos;
    },
    buscarPorId: async function (id) {
        const produto = await knex("produtos").where({ id }).first();
        return produto;
    },
    buscarPorCampo: async function (campo, valor) {
        const produto = await knex("produtos").where(campo, valor).first();
        return produto;
    },
    editar: async function (dados, id) {
        const produto = await knex("produtos")
            .where({ id })
            .update(dados, ["*"]);
        return produto[0];
    },
    excluir: async function (id) {
        const linhasAfetadas = await knex("produtos").where({ id }).del();
        return linhasAfetadas;
    },
};

module.exports = produtoRepositorio;
