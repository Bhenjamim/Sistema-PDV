const { categoriaRepositorio } = require("../../repositorios");

const listarCategorias = async () => {
    const categorias = await categoriaRepositorio.listar();
    return categorias;
};

module.exports = { listarCategorias };
