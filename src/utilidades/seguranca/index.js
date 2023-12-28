const { validarSenha, criptografarSenha } = require("./criptografia");
const { gerarToken, verificarToken } = require("./operacoesToken");

module.exports = {
    validarSenha,
    gerarToken,
    verificarToken,
    criptografarSenha,
};
