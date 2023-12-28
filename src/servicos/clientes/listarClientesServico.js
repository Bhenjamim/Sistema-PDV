const {
    clienteRepositorio,
    enderecoRepositorio
} = require('../../repositorios');

const listarClientes = async () => {
    const clientes = await clienteRepositorio.buscarTodos();
    const clientesComEndereco = []

    if (!clientes) {
        return null;
    };

    for (const cliente of clientes) {
        const endereco = await enderecoRepositorio.buscarPorCliente(cliente.id);

        const clienteCompleto = {
            ...cliente,
            cep: endereco.cep,
            rua: endereco.rua,
            numero: endereco.numero,
            bairro: endereco.bairro,
            cidade: endereco.cidade,
            estado: endereco.estado
        };

        clientesComEndereco.push(clienteCompleto);

    };

    return clientesComEndereco;
};

module.exports = listarClientes;