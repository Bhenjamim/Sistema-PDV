const { clienteRepositorio:repo, usuarioRepositorio } = require("../repositorios/");

const verificaSeEmailExiste = async (req, res, next) => {
    const { email } = req.body;

    if(email) {
        let emailExiste;

        if(req.baseUrl === "/usuario"){
            emailExiste = await usuarioRepositorio.acharPorCampo("email", email);
        }
        
        if(req.baseUrl === "/cliente"){
            emailExiste = await repo.buscarPorCampo("email", email);
        }
    
        if(req.params.id) {
    
            const cliente = await repo.buscarPorId(req.params.id);
    
            if(cliente.email === email) return next();
        }
    
        if (emailExiste) return res.status(400).json({ mensagem: "Email já existe." });
    
        return next();
    }

    return next();
};

module.exports = verificaSeEmailExiste;
