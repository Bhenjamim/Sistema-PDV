const produtosServico = require("../../servicos/produtos");

const excluirProduto = async (req, res) => {
    const { id } = req.params;
    try {
        const exclusao = await produtosServico.excluirProduto(id);
        if (!exclusao) {
            return res.status(400).json({ mensagem: "Um produto listado em um pedido não pode ser excluído." });
        }
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor." });
    }
};

module.exports = { excluirProduto };