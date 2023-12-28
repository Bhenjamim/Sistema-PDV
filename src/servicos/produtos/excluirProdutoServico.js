const { produtoRepositorio, pedidoProdutosRepositorio } = require("../../repositorios");
const bucket = require("../../utilidades/upload-arquivos");

const excluirProduto = async (produto_id) => {
    const ocorrenciaEmPedidos = await pedidoProdutosRepositorio.buscarProdutoId(produto_id);
    if (ocorrenciaEmPedidos) {
        return false;
    }
    const produto = await produtoRepositorio.buscarPorId(produto_id);
    if (produto.produto_imagem) {
        const nomeArquivo = produto.produto_imagem.split("/").pop();
        const caminhoObjeto = `produtos/${produto_id}/${nomeArquivo}`;
        await bucket.excluirArquivo(caminhoObjeto);
    }
    await produtoRepositorio.excluir(produto_id);
    return true;
}

module.exports = { excluirProduto };