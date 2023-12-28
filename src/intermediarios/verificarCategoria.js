const { categoriaRepositorio } = require("../repositorios");

const verficarCategoria = async (req, res, next) => {
    const { categoria_id } = req.query;

    if (!categoria_id) {
        return next();
    }

    if (!Number(categoria_id)) {
        return res.status(400).json({
            mensagem:
                "O valor do parâmetro categoria id precisa ser numérico e maior do que zero.",
        });
    }

    const categoria = await categoriaRepositorio.acharPorId(categoria_id);

    if (!categoria) {
        return res.status(400).json({ mensagem: "Categoria não existente." });
    }

    next();
};

module.exports = verficarCategoria;
