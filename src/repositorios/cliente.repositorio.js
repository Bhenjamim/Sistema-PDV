const knex = require("../configs/conexao");

const clienteRepositorio = {
    cadastrar: async function (dados) {
        const cliente = await knex("clientes").insert(dados, ["*"]);
        return cliente[0];
    },
    buscarTodos: async function () {
        const clientes = await knex("clientes");
        return clientes;
    },
    buscarPorId: async function (id) {
        const cliente = await knex("clientes").where({ id }).first();
        return cliente;
    },
    buscarPorCampo: async function (campo, valor) {
        const cliente = await knex("clientes").where(campo, valor).first();
        return cliente;
    },
    editar: async function (dados, id) {
        const cliente = await knex("clientes").where({ id }).update(dados, ["*"]);
        return cliente[0];
    },
    excluir: async function (id) {
        const linhasAfetadas = await knex("clientes").where({ id }).del();
        return linhasAfetadas;
    }
}

module.exports = clienteRepositorio;