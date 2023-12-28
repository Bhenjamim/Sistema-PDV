const { editarProdutoServico } = require("../../servicos/produtos");

const editarProdutoControlador = async (req, res) => {
    const { file } = req;
    const { id } = req.params;
    const { descricao, quantidade_estoque, valor, categoria_id } = req.body;

    try {
        const produtoAtualizado = await editarProdutoServico(
            {
                descricao,
                quantidade_estoque,
                valor,
                categoria_id,
                produto_imagem: file,
            },
            id
        );

        return res.status(200).json(produtoAtualizado);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro interno do servidor." });
    }
};

module.exports = editarProdutoControlador;
