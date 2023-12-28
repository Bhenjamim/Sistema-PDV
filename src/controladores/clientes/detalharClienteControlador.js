const clienteServico = require('../../servicos/clientes');

async function detalharClienteControlador(req, res) {
    const { id } = req.params;

    try {
        const cliente = await clienteServico.detalharClienteServico(id);

        if (!cliente) {
            return res
                .status(404)
                .json({ mensagem: "Cliente não encontrado." });
        };

        return res.status(200).json(cliente);

    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor." });
    };
};

module.exports = detalharClienteControlador;