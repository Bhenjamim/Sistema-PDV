const { produtoRepositorio } = require("../../repositorios");

const listarProdutos = async (categoria_id) => {
    let produtos;

    if (categoria_id) {
        produtos = await produtoRepositorio.buscarPorCategoria(categoria_id);
    } else {
        produtos = await produtoRepositorio.buscarTodos();
    }

    return produtos;
};

module.exports = { listarProdutos };
