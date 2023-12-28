const { buscarUsuario } = require("../../servicos/usuarios");
const { validarSenha } = require("../../utilidades/seguranca");
const { gerarToken } = require("../../utilidades/seguranca");

async function login(req, res) {
    const { email, senha } = req.body;
    try {
        const usuario = await buscarUsuario("email", email);
        if (!usuario) {
            return res
                .status(400)
                .json({ mensagem: "Email ou senha inválidos" });
        }
        const senhaValida = await validarSenha(senha, usuario.senha);
        if (!senhaValida) {
            return res
                .status(400)
                .json({ mensagem: "Email ou senha inválidos" });
        }
        const token = gerarToken({ id: usuario.id });

        delete usuario.senha;

        return res.json({ usuario, token });
    } catch (error) {
        res.status(500).json({ mensagem: "Erro interno no servidor" });
    }
}

module.exports = login;
