const { clienteRepositorio:repo } = require("../repositorios");

const verificaSeCpfExiste = async (req, res, next) => {

    const { cpf } = req.body;
    
    if(cpf) {
        const cpfExiste = await repo.buscarPorCampo("cpf", cpf);

        if(req.params.id) {
            const cliente = await repo.buscarPorId(req.params.id);

            if(cliente.cpf === cpf) return next();
        }
    
        if (cpfExiste)
            return res.status(400).json({ mensagem: "O Cpf informado já está cadastrado." });
    
        return next();
    }

    return next();
};

module.exports = verificaSeCpfExiste;
