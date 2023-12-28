const { clienteRepositorio: repo } = require("../repositorios");

const verificarSeClienteExiste = async (req, res, next) => {
    try {
        const { id } = req.params;

        const { cliente_id } = req.body;

        if (id) {
            const clienteExiste = await repo.buscarPorId(id);

            if (!clienteExiste) {
                return res
                    .status(404)
                    .json({ mensagem: "Cliente não encontrado" });
            }
            return next();
        }

        if (cliente_id) {
            const clienteExiste = await repo.buscarPorId(cliente_id);

            if (!clienteExiste) {
                return res
                    .status(404)
                    .json({ mensagem: "Cliente não encontrado" });
            }
            return next();
        }
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
};

module.exports = verificarSeClienteExiste;
