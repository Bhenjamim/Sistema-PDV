const knex = require("../configs/conexao");

const enderecoRepositorio = {
    cadastrar: async function(dados) {
        const endereco = await knex("enderecos").insert(dados, ["*"]);
        return endereco[0];
    },
    buscarTodos: async function() {
        const enderecos = await knex("enderecos");
        return enderecos;
    },
    buscarPorCliente: async function(cliente_id) {
        const enderecos = await knex("enderecos").where({ cliente_id });
        return enderecos[0];
    },
    buscarPorId: async function(id) {
        const endereco = await knex("enderecos").where({ id }).first();
        return endereco;
    },
    editar: async function(dados, id) {
        const endereco = await knex("enderecos").where({ id }).update(dados, ["*"]);
        return endereco[0];
    },
    excluir: async function(id) {
        const linhasAfetadas = await knex("enderecos").where({ id }).del();
        return linhasAfetadas;
    }
}

module.exports = enderecoRepositorio;