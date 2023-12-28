const clienteServico = require('../../servicos/clientes');

const listarClientesControlador = async (_, res) => {

    try {
        const clientes = await clienteServico.listarClientesServico();

        if (!clientes) {
            return res
                .status(404)
                .json({ mensagem: "Clientes não encontrados." });
        };

        return res.status(200).json(clientes);

    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor." });
    };
};

module.exports = listarClientesControlador;