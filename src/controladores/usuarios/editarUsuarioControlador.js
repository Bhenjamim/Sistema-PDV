const usuarioServico = require("../../servicos/usuarios");

const editarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body;
    const { id } = req.usuario;

    try {
        const usuarioAtualizado = await usuarioServico.editarUsuario(
            { nome, email, senha },
            id
        );

        if (!usuarioAtualizado) {
            return res
                .status(400)
                .json({ mensagem: "Email já está cadastrado." });
        }

        return res.status(200).json(usuarioAtualizado);
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor." });
    }
};

module.exports = editarUsuario;
