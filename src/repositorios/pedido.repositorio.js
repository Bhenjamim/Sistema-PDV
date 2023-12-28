const knex = require("../configs/conexao");

const pedidoRepositorio = {
    cadastrar: async function (dados) {
        const pedido = await knex("pedidos").insert(dados, ["*"]);
        return pedido;
    },
    buscarTodos: async function () {
        const pedidos = await knex("pedidos");
        return pedidos;
    },
    buscarPorCliente: async function (cliente_id) {
        const pedidos = await knex("pedidos").where({ cliente_id });
        return pedidos;
    },
    buscarPorId: async function (id) {
        const pedido = await knex("pedidos").where({ id }).first();
        return pedido;
    },
    buscarPorCampo: async function (campo, valor) {
        const pedido = await knex("pedidos").where(campo, valor).first();
        return pedido;
    },
    editar: async function (dados, id) {
        const pedido = await knex("pedidos").where({ id }).update(dados, ["*"]);
        return pedido;
    },
    excluir: async function (id) {
        const linhasAfetadas = await knex("pedidos").where({ id }).del();
        return linhasAfetadas;
    },
};

module.exports = pedidoRepositorio;
