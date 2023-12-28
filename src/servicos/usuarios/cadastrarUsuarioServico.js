const { usuarioRepositorio } = require("../../repositorios");
const { criptografarSenha } = require("../../utilidades/seguranca");

const cadastrarUsuario = async (dado) => {
    const { nome, email, senha } = dado;

    const senhaCriptografada = await criptografarSenha(senha);

    const usuarioCadastrado = await usuarioRepositorio.cadastrar(
        nome,
        email,
        senhaCriptografada
    );

    delete usuarioCadastrado.senha;

    return usuarioCadastrado;
};

module.exports = cadastrarUsuario;
