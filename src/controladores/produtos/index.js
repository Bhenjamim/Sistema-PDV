const cadastrarProdutoControlador = require("./cadastrarProdutoControlador");
const { listarProdutos } = require("./listarProdutosControlador");
const { detalharProduto } = require("./detalharProdutoControlador");
const { excluirProduto } = require("./excluirProdutoControlador");
const editarProdutoControlador = require("./editarProdutoControlador");

module.exports = { listarProdutos, detalharProduto, excluirProduto, editarProdutoControlador, cadastrarProdutoControlador };