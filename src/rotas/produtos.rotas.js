const { Router } = require("express");
const {
    listarProdutos,
    detalharProduto,
    excluirProduto,
    editarProdutoControlador,
    cadastrarProdutoControlador,
} = require("../controladores/produtos");
const {
    verificarCategoria,
    validarTokenAcesso,
    verificarParametroUrl,
    validacaoCorpoRequisicao,
    validarSeCategoriaExiste,
    validarSeProdutoExiste,
} = require("../intermediarios");

const {
    editarProdutoEsquema,
    cadastrarProdutoEsquema,
} = require("../utilidades/esquemas");

const multer = require("../configs/multer");

const produtoRota = new Router();

produtoRota.use(validarTokenAcesso);

produtoRota.post(
    "/",
    multer.single("produto_imagem"),
    validacaoCorpoRequisicao(cadastrarProdutoEsquema),
    validarSeCategoriaExiste,
    cadastrarProdutoControlador
);

produtoRota.get("/", verificarCategoria, listarProdutos);

produtoRota.get("/:id", verificarParametroUrl, detalharProduto);
produtoRota.delete(
    "/:id",
    verificarParametroUrl,
    validarSeProdutoExiste,
    excluirProduto
);

produtoRota.put(
    "/:id",
    verificarParametroUrl,
    multer.single("produto_imagem"),
    validarSeProdutoExiste,
    validacaoCorpoRequisicao(editarProdutoEsquema),
    validarSeCategoriaExiste,
    editarProdutoControlador
);

module.exports = produtoRota;
