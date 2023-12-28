const { Router } = require("express");

const {
    cadastrarClienteControlador,
    editarClienteControlador,
    listarClientesControlador,
    detalharClienteControlador
} = require("../controladores/clientes");

const { validarTokenAcesso,
    validacaoCorpoRequisicao,
    verificaSeCpfExiste,
    verificaSeEmailExiste,
    verificarSeClienteExiste,
    verificaSeEnderecoEstaCadastrado,
    verificarParametroUrl } = require("../intermediarios");

const { cadastrarClienteEsquema, editarClienteEsquema } = require("../utilidades/esquemas")

const clienteRotas = new Router();

clienteRotas.use(validarTokenAcesso);

clienteRotas.get("/", listarClientesControlador);

clienteRotas.get("/:id", detalharClienteControlador);


clienteRotas.post(
    "/",
    validarTokenAcesso,
    validacaoCorpoRequisicao(cadastrarClienteEsquema),
    verificaSeEmailExiste,
    verificaSeCpfExiste,
    cadastrarClienteControlador.processar);

clienteRotas.put(
    "/:id",
    validarTokenAcesso,
    verificarParametroUrl,
    verificarSeClienteExiste,
    verificaSeEnderecoEstaCadastrado,
    validacaoCorpoRequisicao(editarClienteEsquema),
    verificaSeEmailExiste,
    verificaSeCpfExiste,
    editarClienteControlador.processar);

module.exports = clienteRotas;
