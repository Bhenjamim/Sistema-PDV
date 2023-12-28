const { enderecoRepositorio:repo } = require("../repositorios")

const verificaSeEnderecoEstaCadastrado = async (req, res, next)=>{

    try {
        
        const {cep, rua, numero, bairro, cidade, estado } = await repo.buscarPorCliente(req.params.id);

        if(cep === "N/A" && rua === "N/A" && numero === "N/A" && bairro === "N/A" && cidade === "N/A" && estado === "XX") {
            req.enderecoCadastrado = false;
        }else {
            req.enderecoCadastrado = true;
        }

        return next();
        
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor"});
    }
}

module.exports = verificaSeEnderecoEstaCadastrado;