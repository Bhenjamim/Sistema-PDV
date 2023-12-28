const { Router } = require("express");
const login = require("../controladores/login/loginControlador");
const { loginEsquema } = require("../utilidades/esquemas");
const { validacaoCorpoRequisicao } = require("../intermediarios");

const loginRota = new Router();

loginRota.post("/", validacaoCorpoRequisicao(loginEsquema), login);

module.exports = loginRota;
