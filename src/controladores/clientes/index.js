const listarClientesControlador = require('./listarClientesControlador');
const detalharClienteControlador = require('./detalharClienteControlador')
const cadastrarClienteControlador = require("./cadastrarClienteControlador");
const editarClienteControlador = require("./editarClienteControlador");

module.exports = {
    cadastrarClienteControlador,
    editarClienteControlador,
    listarClientesControlador,
    detalharClienteControlador
};
