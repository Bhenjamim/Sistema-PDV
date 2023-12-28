const categoriaRepositorio = require("./categoria.repositorio");
const usuarioRepositorio = require("./usuario.repositorio");
const clienteRepositorio = require("./cliente.repositorio");
const produtoRepositorio = require("./produto.repositorio");
const enderecoRepositorio = require("./endereco.repositorio");
const pedidoProdutosRepositorio = require("./pedidoProdutos.repositorio");
const pedidoRepositorio = require("./pedido.repositorio");

module.exports = {
    categoriaRepositorio,
    usuarioRepositorio,
    clienteRepositorio,
    produtoRepositorio,
    enderecoRepositorio,
    pedidoProdutosRepositorio,
    pedidoRepositorio
};