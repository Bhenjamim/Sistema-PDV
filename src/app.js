const express = require("express");

const {
    loginRota,
    usuarioRota,
    categoriaRota,
    produtoRota,
    clienteRota,
    pedidoRota,
} = require("./rotas");


const app = express();

app.use(express.json());

app.use("/usuario", usuarioRota);
app.use("/login", loginRota);
app.use("/categoria", categoriaRota);

app.use("/produto", produtoRota);
app.use("/cliente", clienteRota);
app.use("/produto", produtoRota);
app.use("/cliente", clienteRota);
app.use("/pedido", pedidoRota);

module.exports = app;
