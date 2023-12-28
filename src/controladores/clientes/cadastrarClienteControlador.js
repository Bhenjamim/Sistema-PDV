const { cadastrarClienteServico: servico } = require("../../servicos/clientes");

const cadastrarClienteControlador = {
    processar: async (req, res) => {

        try {

            const { nome, email, cpf } = req.body;

            const { cep, rua, numero, bairro, cidade, estado } = req.body;

            const clienteCadastrado = await servico.executar(
                { nome, email, cpf },
                { cep, rua, numero, bairro, cidade, estado }
            );

            return res.status(201).json(clienteCadastrado);

        } catch (error) {
            return res.status(500).json({ mensagem: "Erro interno do servidor." });
        }
    }
}

module.exports = cadastrarClienteControlador;