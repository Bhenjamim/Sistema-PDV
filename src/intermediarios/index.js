const validarTokenAcesso = require("./validarTokenAcesso");
const validacaoCorpoRequisicao = require("./validarCorpoRequisicao");
const verificaSeCpfExiste = require("./verificarSeCpfExiste");
const verificarSeClienteExiste = require("./verificarSeClienteExiste");
const verificaSeEnderecoEstaCadastrado = require("./verificaSeEnderecoEstaCadastrado");
const verificaSeEmailExiste = require("./verificarSeEmailExiste");
const verificarCategoria = require("./verificarCategoria");
const verificarParametroUrl = require("./verificarParametroUrl");
const validarSeCategoriaExiste = require("./validarSeCategoriaExiste");
const validarSeProdutoExiste = require("./validarSeProdutoExiste");
const validarQuantidadeEstoque = require("./validarQuantidadeEstoque");

module.exports = {
    validarTokenAcesso,
    validacaoCorpoRequisicao,
    verificaSeEmailExiste,
    verificaSeCpfExiste,
    verificarSeClienteExiste,
    verificaSeEnderecoEstaCadastrado,
    verificarCategoria,
    verificarParametroUrl,
    validarSeCategoriaExiste,
    validarSeProdutoExiste,
    validarQuantidadeEstoque
};
