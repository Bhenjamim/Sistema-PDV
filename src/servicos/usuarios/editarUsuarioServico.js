const { usuarioRepositorio } = require("../../repositorios");
const { criptografarSenha } = require("../../utilidades/seguranca");

const editarUsuario = async (corpo, usuarioId) => {
    const { nome, email, senha } = corpo;

    const parametrosParaAtualizacao = {};

    if (nome) {
        parametrosParaAtualizacao.nome = nome;
    }

    if (email) {
        const usuario = await usuarioRepositorio.acharPorId(usuarioId);
        if (email !== usuario.email) {
            const emailExistente = await usuarioRepositorio.acharPorCampo(
                "email",
                email
            );

            if (emailExistente) {
                return null;
            }
        }
        parametrosParaAtualizacao.email = email;
    }

    if (senha) {
        const senhaEncriptografada = await criptografarSenha(senha);
        parametrosParaAtualizacao.senha = senhaEncriptografada;
    }

    const usuarioAtualizado = await usuarioRepositorio.atualizar(
        parametrosParaAtualizacao,
        usuarioId
    );

    delete usuarioAtualizado.senha;

    return usuarioAtualizado;
};

module.exports = editarUsuario;
