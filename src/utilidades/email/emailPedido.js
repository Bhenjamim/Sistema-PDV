const transporte = require("../../configs/mailtrap");

let emailPedido = async (nome, email) => {
    await transporte.sendMail({
        from: `${process.env.MAILTRAP_NOME} <${process.env.MAILTRAP_FROM}>`,
        to: `${nome} <${email}>`,
        subject: "Seu Pedido",
        text: "Este é um email de teste",
        html: `Olá, ${nome}! Pedido realizado com sucesso.`,
    });
};

module.exports = emailPedido;
