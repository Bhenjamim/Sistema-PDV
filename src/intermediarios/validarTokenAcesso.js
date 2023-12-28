const { buscarUsuario } = require("../servicos/usuarios");
const { verificarToken } = require("../utilidades/seguranca");

async function validarTokenAcesso(req, res, next) {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({
            mensagem:
                "Um token válido precisa ser informado para acesso ao recurso",
        });
    }
    const token = authorization.split(" ")[1];
    try {
        const { id } = verificarToken(token);
        const usuario = await buscarUsuario("id", id);
        if (!usuario) {
            return res.status(401).json({
                mensagem:
                    "Um token válido precisa ser informado para acesso ao recurso",
            });
        }
        req.usuario = usuario;
    } catch (error) {
        return res.status(401).json({
            mensagem:
                "Um token válido precisa ser informado para acesso ao recurso",
        });
    }
    next();
}

module.exports = validarTokenAcesso;
