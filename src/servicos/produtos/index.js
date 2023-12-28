const cadastrarProdutoServico = require("./cadastrarProdutoServico");
const { listarProdutos } = require("./listarProdutosServico");
const { detalharProduto } = require("./detalharProdutoServico");
const { excluirProduto } = require("./excluirProdutoServico");
const editarProdutoServico = require("./editarProdutoServico");

module.exports = { listarProdutos, detalharProduto, excluirProduto, editarProdutoServico, cadastrarProdutoServico };