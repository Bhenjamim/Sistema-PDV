const produtosServico = require("../../servicos/produtos");

const listarProdutos = async (req, res) => {
    const { categoria_id } = req.query;

    try {
        const produtos = await produtosServico.listarProdutos(categoria_id);

        return res.status(200).json(produtos);
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor." });
    }
};

module.exports = { listarProdutos };
