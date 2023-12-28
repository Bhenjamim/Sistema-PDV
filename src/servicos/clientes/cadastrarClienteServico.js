const { clienteRepositorio:clienteRepo, enderecoRepositorio:enderecoRepo } = require("../../repositorios");


const cadastrarClienteServico = {
    executar: async (dadosCliente, dadosEndereco)=>{
        
            const cliente = await clienteRepo.cadastrar(dadosCliente);

            dadosEndereco.cliente_id = cliente.id;

            dadosEndereco.cep = dadosEndereco.cep ?? "N/A";
            dadosEndereco.rua = dadosEndereco.rua ?? "N/A";
            dadosEndereco.numero = dadosEndereco.numero ?? "N/A";
            dadosEndereco.bairro = dadosEndereco.bairro ?? "N/A";
            dadosEndereco.cidade = dadosEndereco.cidade ?? "N/A";
            dadosEndereco.estado = dadosEndereco.estado ?? "xx";
            
            dadosEndereco.estado = dadosEndereco.estado.toUpperCase();

            const endereco = await enderecoRepo.cadastrar(dadosEndereco);

            delete endereco.cliente_id;

            delete endereco.id;
            
            const clienteCadastrado = {
                ...cliente,
                ...endereco
            }

            return clienteCadastrado; 
    }
}

module.exports = cadastrarClienteServico;