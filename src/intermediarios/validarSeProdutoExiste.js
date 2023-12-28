const { produtoRepositorio } = require("../repositorios");

const validarSeProdutoExiste = async (req, res, next) => {
    try {
        const { id } = req.params;

        const { pedido_produtos } = req.body;

        if (id) {
            const produto = await produtoRepositorio.buscarPorId(id);

            if (!produto) {
                return res
                    .status(404)
                    .json({ mensagem: "Produto não existe." });
            }

            return next();
        }

        let produtosNaoEncontrados = [];

        for (const item of pedido_produtos) {
            const produto = await produtoRepositorio.buscarPorId(
                item.produto_id
            );

            if (!produto) {
                produtosNaoEncontrados.push(`produto_id: ${item.produto_id}.`);
            }
        }

        if (produtosNaoEncontrados.length > 0) {
            return res.status(404).json({
                mensagem: `${produtosNaoEncontrados} não encontrado(s).`,
            });
        }

        return next();
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
};

module.exports = validarSeProdutoExiste;
