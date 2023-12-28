const verificarParametroUrl = (req, res, next) => {
    const { id } = req.params;

    if (!Number(id)) {
        return res.status(400).json({
            mensagem:
                "O valor do parâmetro produto id precisa ser numérico e maior do que zero.",
        });
    }

    next();
};

module.exports = verificarParametroUrl;
