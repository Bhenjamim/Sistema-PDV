const { editarClienteServico: servico } = require("../../servicos/clientes");

const editarClienteControlador = {
    processar: async (req, res) => {

        try {

            const { id } = req.params;

            const { nome, email, cpf } = req.body;

            const { cep, rua, numero, bairro, cidade, estado } = req.body;

            const clienteAtualizado = await servico.executar(
                { nome, email, cpf },
                { cep, rua, numero, bairro, cidade, estado },
                id
            );

            return res.status(200).json(clienteAtualizado);

        } catch (error) {
            return res.status(500).json({ mensagem: "Erro interno do servidor." });
        }
    }
}

module.exports = editarClienteControlador;