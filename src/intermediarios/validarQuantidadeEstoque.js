const { produtoRepositorio } = require("../repositorios");

const validarQuantidadeEstoque = async (req, res, next) => {
    try {
        const { pedido_produtos } = req.body;

        let estoqueInsuficiente = [];

        for (const item of pedido_produtos) {
            const produto = await produtoRepositorio.buscarPorId(
                item.produto_id
            );

            if (produto.quantidade_estoque < item.quantidade_produto) {
                estoqueInsuficiente.push(`produto_id: ${item.produto_id}`);
            }
        }

        if (estoqueInsuficiente.length > 0) {
            return res.status(400).json({
                mensagem: `Estoque insuficiente para ${estoqueInsuficiente}`,
            });
        }

        return next();
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
};

module.exports = validarQuantidadeEstoque;
