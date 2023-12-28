const { cadastrarPedidoServico } = require("../../servicos/pedidos");

const cadastrarPedidoControlador = async (req, res) => {
    try {
        const cadastro = await cadastrarPedidoServico(req.body);

        return res.status(201).json(cadastro);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

module.exports = cadastrarPedidoControlador;
