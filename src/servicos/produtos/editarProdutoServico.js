const { produtoRepositorio } = require("../../repositorios");
const {
    uploadArquivo,
    excluirArquivo,
} = require("../../utilidades/upload-arquivos");

const editarProdutoServico = async (corpo, id) => {
    const {
        descricao,
        quantidade_estoque,
        valor,
        categoria_id,
        produto_imagem,
    } = corpo;

    const parametrosParaAtualizacao = {};

    if (descricao) {
        parametrosParaAtualizacao.descricao = descricao;
    }

    if (quantidade_estoque) {
        parametrosParaAtualizacao.quantidade_estoque = quantidade_estoque;
    }

    if (valor) {
        parametrosParaAtualizacao.valor = valor;
    }

    if (categoria_id) {
        parametrosParaAtualizacao.categoria_id = categoria_id;
    }

    if (produto_imagem) {
        const produto = await produtoRepositorio.buscarPorId(id);

        if (produto.produto_imagem) {
            const imagem = produto.produto_imagem.split("/").pop();
            const caminho = `produtos/${id}/${imagem}`;
            await excluirArquivo(caminho);
        }

        const dir = `produtos/${id}`;
        const url = await uploadArquivo(dir, produto_imagem);

        parametrosParaAtualizacao.produto_imagem = url;
    }

    const produtoAtualizado = await produtoRepositorio.editar(
        parametrosParaAtualizacao,
        id
    );

    return produtoAtualizado;
};

module.exports = editarProdutoServico;
