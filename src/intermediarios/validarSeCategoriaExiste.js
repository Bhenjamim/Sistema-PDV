const { categoriaRepositorio } = require("../repositorios");

const validarSeCategoriaExiste = async (req, res, next) => {
    const { categoria_id } = req.body;

    if (categoria_id) {
        const categoriaExiste =
            await categoriaRepositorio.acharPorId(categoria_id);
        if (!categoriaExiste) {
            return res.status(404).json({ mensagem: "Categoria não existe." });
        }
    }
    next();
};

module.exports = validarSeCategoriaExiste;
