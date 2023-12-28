const produtosServico = require("../../servicos/produtos");

const detalharProduto = async (req, res) => {
    const { id } = req.params;

    try {
        const produto = await produtosServico.detalharProduto(id);

        if (!produto) {
            return res
                .status(404)
                .json({ mensagem: "Produto não encontrado." });
        }

        return res.status(200).json(produto);
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor." });
    }
};

module.exports = { detalharProduto };
