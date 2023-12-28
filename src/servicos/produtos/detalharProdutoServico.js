const { produtoRepositorio } = require("../../repositorios");

const detalharProduto = async (produto_id) => {
    const produto = await produtoRepositorio.buscarPorId(produto_id);

    if (!produto) {
        return null;
    }

    return produto;
};

module.exports = { detalharProduto };
