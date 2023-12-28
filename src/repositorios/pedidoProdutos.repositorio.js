const knex = require("../configs/conexao");

const pedidoProdutosRepositorio = {
    cadastrar: async function(dados) {
        const pedidoProduto = await knex("pedido_produtos").insert(dados, ["*"]);
        return pedidoProduto[0];
    },
    buscarProdutoId: async function(produto_id) {
        const ocorrencia = await knex("pedido_produtos").where({ produto_id }).first();
        return ocorrencia;
    },
    buscarPorPedido: async function(pedido_id) {
        const pedidoProdutos = await knex("pedido_produtos").where({ pedido_id });
        return pedidoProdutos;
    },
    atualizar: async function(dados, id, pedido_id) {
        const pedidoProdutos = await knex("pedido_produtos").where({ id, pedido_id }).update(dados, ["*"]);
        return pedidoProdutos;
    },
    excluirProduto: async function(pedido_id, produto_id) {
        const linhasAfetadas = await knex("pedido_produtos").where({ pedido_id, produto_id }).del();
        return linhasAfetadas;
    },
    excluirPedido: async function(pedido_id) {
        const linhasAfetadas = await knex("pedido_produtos").where({ pedido_id }).del();
        return linhasAfetadas;
    }
}

module.exports = pedidoProdutosRepositorio;