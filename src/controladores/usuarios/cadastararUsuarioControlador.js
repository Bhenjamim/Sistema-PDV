const usuariosServico = require("../../servicos/usuarios");

const cadastrarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body;
    try {
        const usuarioCadastrado = await usuariosServico.cadastrarUsuario({
            nome,
            email,
            senha,
        });
        return res.status(201).json(usuarioCadastrado);
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor." });
    }
};

module.exports = cadastrarUsuario;
