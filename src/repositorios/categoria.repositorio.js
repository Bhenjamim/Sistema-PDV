const knex = require("../configs/conexao");

const categoriaRepositorio = {
    listar: async function () {
        const listarCategorias = await knex("categorias");
        return listarCategorias;
    },
    acharPorId: async function (id) {
        const categoriaPorId = await knex("categorias").where("id", id).first();
        return categoriaPorId;
    }
};

module.exports = categoriaRepositorio;