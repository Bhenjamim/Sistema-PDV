const categoriaServico = require("../../servicos/categorias/listarCategoriasServico");

const listarCategorias = async (req, res) => {
    try {
        const categorias = await categoriaServico.listarCategorias();
        return res.status(200).json(categorias);
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor." });
    }
};

module.exports = { listarCategorias };
