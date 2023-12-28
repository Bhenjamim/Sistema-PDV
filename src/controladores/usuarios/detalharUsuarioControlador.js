const usuarioServico = require("../../servicos/usuarios");

const detalharPerfil = async (req, res) => {
    const { id } = req.usuario;

    try {
        const usuario = await usuarioServico.detalharPerfil(id);

        if (!usuario) {
            return res
                .status(404)
                .json({ mensagem: "Usuário não encontrado." });
        }

        return res.status(200).json(usuario);
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor." });
    }
};

module.exports = detalharPerfil;
