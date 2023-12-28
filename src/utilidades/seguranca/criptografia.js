const bcrypt = require("bcrypt");

async function validarSenha(senhaRequisicao, senhaUsuario) {
    const senhaValida = bcrypt.compare(senhaRequisicao, senhaUsuario);
    return senhaValida;
}
const criptografarSenha = async (senha) => {
    const salt = 10;
    const senhaCriptografada = await bcrypt.hash(senha, salt);
    return senhaCriptografada;
};

module.exports = {
    validarSenha,
    criptografarSenha,
};
