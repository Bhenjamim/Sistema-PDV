const { clienteRepositorio: clienteRepo, enderecoRepositorio: enderecoRepo } = require("../../repositorios");


const editarClienteServico = {
    executar: async (dadosCliente, dadosEndereco, id) => {

        const { nome, email, cpf } = dadosCliente;

        const { cep, rua, numero, bairro, cidade, estado } = dadosEndereco;

        const cliente = await clienteRepo.buscarPorId(id);

        const endereco = await enderecoRepo.buscarPorCliente(id);

        if (nome) cliente.nome = nome;

        if (email) cliente.email = email;

        if (cpf) cliente.cpf = cpf;

        if (cep) endereco.cep = cep;

        if (rua) endereco.rua = rua;

        if (numero) endereco.numero = numero;

        if (bairro) endereco.bairro = bairro;

        if (cidade) endereco.cidade = cidade;

        if (estado) endereco.estado = estado.toUpperCase();

        const clienteAtualizado = await clienteRepo.editar(cliente, id);

        const enderecoAtualizado = await enderecoRepo.editar(endereco, endereco.id);

        delete enderecoAtualizado.id;

        delete enderecoAtualizado.cliente_id;

        const clienteEnderecoAtualizado = {

            ...clienteAtualizado,
            ...enderecoAtualizado
        }

        return clienteEnderecoAtualizado;

    }
}

module.exports = editarClienteServico;