const jwt = require("jsonwebtoken");
const chave = process.env.JWT_SECRET_KEY;
const expiresIn = process.env.JWT_EXPIRES_IN;

function gerarToken(id) {
    const token = jwt.sign({ id }, chave, { expiresIn });
    return token;
}
function verificarToken(token) {
    const { id } = jwt.verify(token, chave);
    return id;
}

module.exports = {
    gerarToken,
    verificarToken,
};
