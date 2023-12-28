const {
    clienteRepositorio,
    enderecoRepositorio
} = require('../../repositorios');

async function detalharCliente(id) {
    const cliente = await clienteRepositorio.buscarPorId(id);
    const endereco = await enderecoRepositorio.buscarPorCliente(id);

    if (!cliente) return null;

    const clienteComEndereco = {
        ...cliente,
        ...endereco
    };

    return clienteComEndereco;
};

module.exports = detalharCliente;