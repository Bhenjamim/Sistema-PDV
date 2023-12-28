const knex = require("../configs/conexao");

const usuarioRepositorio = {
    cadastrar: async function (nome, email, senha) {
        const cadastrarUsuario = await knex("usuarios")
            .insert({ nome, email, senha })
            .returning(["id", "nome", "email"]);
        return cadastrarUsuario[0];
    },
    atualizar: async function ({ nome, email, senha }, id) {
        const atualizarUsuario = await knex("usuarios")
            .update({ nome, email, senha })
            .where("id", id)
            .returning("*");
        return atualizarUsuario[0];
    },
    acharPorId: async function (id) {
        const usuarioPorId = await knex("usuarios").where("id", id).first();
        return usuarioPorId;
    },
    acharPorCampo: async function (campo, valor) {
        const usuarioPorCampo = await knex("usuarios")
            .where(campo, valor)
            .first();
        return usuarioPorCampo;
    },
    deletar: async function (id) {
        const delUsuario = await knex("usuarios").del().where("id", id);
        return delUsuario;
    },
};

module.exports = usuarioRepositorio;
