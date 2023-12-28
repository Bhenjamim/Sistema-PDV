const { produtoRepositorio } = require("../../repositorios");
const { uploadArquivo } = require("../../utilidades/upload-arquivos");

const cadastrarProdutoServico = async (dados) => {
    const {
        descricao,
        quantidade_estoque,
        valor,
        categoria_id,
        produto_imagem,
    } = dados;

    let produto;

    produto = await produtoRepositorio.cadastrar({
        descricao,
        quantidade_estoque,
        valor,
        categoria_id,
    });

    if (produto_imagem) {
        const dir = `produtos/${produto.id}`;
        const url = await uploadArquivo(dir, produto_imagem);

        produto = await produtoRepositorio.editar(
            { produto_imagem: url },
            produto.id
        );
    }

    return produto;
};
module.exports = cadastrarProdutoServico;
