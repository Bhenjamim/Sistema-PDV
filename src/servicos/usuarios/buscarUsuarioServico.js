const { usuarioRepositorio } = require("../../repositorios");

async function buscarUsuario(campo, valor) {
    const usuario = usuarioRepositorio.acharPorCampo(campo, valor);
    if (!usuario) {
        return null;
    }
    return usuario;
}

module.exports = buscarUsuario;
