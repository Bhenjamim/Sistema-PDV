const { listarPedidosServico } = require("../../servicos/pedidos");

async function listarPedidosControlador(req, res) {
    const { cliente_id } = req.query;

    const pedidos = await listarPedidosServico(cliente_id);

    try {
        if (!pedidos) {
            return res
                .status(200)
                .json({ mensagem: "Não há pedidos a serem listados." });
        }

        return res.status(200).json(pedidos);
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor." });
    }
}

module.exports = listarPedidosControlador;
