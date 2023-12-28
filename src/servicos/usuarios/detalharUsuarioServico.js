const { usuarioRepositorio } = require("../../repositorios");

const detalharPerfil = async (id) => {
    const usuario = await usuarioRepositorio.acharPorId(id);

    if (!usuario) {
        return null;
    }

    delete usuario.senha;

    return usuario;
};

module.exports = detalharPerfil;
