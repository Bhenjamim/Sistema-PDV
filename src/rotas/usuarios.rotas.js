const { Router } = require("express");

const {
    validacaoCorpoRequisicao,
    verificaSeEmailExiste,
    validarTokenAcesso,
} = require("../intermediarios");
const {
    cadastrarUsuario,
    detalharPerfil,
    editarUsuario,
} = require("../controladores/usuarios");
const {
    cadastrarUsuarioEsquema,
    editarUsuarioEsquema,
} = require("../utilidades/esquemas");

const usuarioRota = new Router();

usuarioRota.post(
    "/",
    validacaoCorpoRequisicao(cadastrarUsuarioEsquema),
    verificaSeEmailExiste,
    cadastrarUsuario
);

usuarioRota.use(validarTokenAcesso);

usuarioRota.get("/", detalharPerfil);
usuarioRota.put(
    "/",
    validacaoCorpoRequisicao(editarUsuarioEsquema),
    editarUsuario
);

module.exports = usuarioRota;
