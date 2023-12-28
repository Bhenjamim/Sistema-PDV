const { pedidoProdutosRepositorio, pedidoRepositorio } = require('../../repositorios');

async function listarPedidosServico(cliente_id) {
    let pedidos;
    const pedidosArray = [];

    if (cliente_id === undefined) {
        pedidos = await pedidoRepositorio.buscarTodos();
    }
    else {
        pedidos = await pedidoRepositorio.buscarPorCliente(cliente_id);
    };

    if (pedidos.length < 1) return null;

    for (let indice = 0; indice < pedidos.length; indice++) {
        const pedidoProdutos = await pedidoProdutosRepositorio.buscarPorPedido(pedidos[indice].id);

        const pedidoCompleto = {
            pedido: {
                id: pedidos[indice].id,
                valor_total: pedidos[indice].valor_total,
                observacao: pedidos[indice].observacao,
                cliente_id: pedidos[indice].cliente_id
            },
            pedido_produtos: []
        };

        for (const pedidoProduto of pedidoProdutos) {

            const produtoCompleto = {
                id: pedidoProduto.id,
                quantidade_produto: pedidoProduto.quantidade_produto,
                valor_produto: pedidoProduto.valor_produto,
                pedido_id: pedidoProduto.pedido_id,
                produto_id: pedidoProduto.produto_id
            };

            pedidoCompleto.pedido_produtos.push(produtoCompleto)
        };

        pedidosArray.push(pedidoCompleto);
    };

    return pedidosArray;
};

module.exports = listarPedidosServico;