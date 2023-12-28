const { Router } = require("express");
const {
    validarTokenAcesso,
    validarSeProdutoExiste,
    validacaoCorpoRequisicao,
    verificarSeClienteExiste,
    validarQuantidadeEstoque,
} = require("../intermediarios");

const { cadastrarPedidoEsquema } = require("../utilidades/esquemas");

const {
    listarPedidosControlador,
    cadastrarPedidoControlador
} = require('../controladores/pedidos')

const pedidoRota = new Router();

pedidoRota.use(validarTokenAcesso);

pedidoRota.post(
    "/",
    validacaoCorpoRequisicao(cadastrarPedidoEsquema),
    verificarSeClienteExiste,
    validarSeProdutoExiste,
    validarQuantidadeEstoque,
    cadastrarPedidoControlador
);

pedidoRota.get('/', listarPedidosControlador);


module.exports = pedidoRota;
