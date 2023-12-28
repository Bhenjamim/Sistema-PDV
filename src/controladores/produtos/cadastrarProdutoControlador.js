const { cadastrarProdutoServico } = require("../../servicos/produtos");

const cadastrarProdutoControlador = async (req, res) => {
    const { file } = req;
    const { descricao, quantidade_estoque, valor, categoria_id } = req.body;

    try {
        const produtoCadastrado = await cadastrarProdutoServico({
            descricao,
            quantidade_estoque,
            valor,
            categoria_id,
            produto_imagem: file,
        });

        return res.status(201).json(produtoCadastrado);
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor." });
    }
};

module.exports = cadastrarProdutoControlador;
