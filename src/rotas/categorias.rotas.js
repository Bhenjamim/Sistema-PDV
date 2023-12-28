const { Router } = require("express");
const {
    listarCategorias,
} = require("../controladores/categorias/listarCategoriasControlador");

const categoriaRota = new Router();

categoriaRota.get("/", listarCategorias);

module.exports = categoriaRota;
