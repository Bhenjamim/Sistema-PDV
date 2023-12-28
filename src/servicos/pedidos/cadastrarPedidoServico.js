const {
    pedidoRepositorio,
    produtoRepositorio,
    clienteRepositorio,
    pedidoProdutosRepositorio,
} = require("../../repositorios/");

const emailPedido = require("../../utilidades/email/emailPedido");

const cadastrarPedidoServico = async (dados) => {
    const { cliente_id, observacao, pedido_produtos } = dados;

    let valorTotalPedido = 0;
    let pedidoProdutos = [];

    for (const item of pedido_produtos) {
        const produto = await produtoRepositorio.buscarPorId(item.produto_id);

        produto.quantidade_produto = item.quantidade_produto;

        pedidoProdutos.push(produto);

        const valor_parcial = item.quantidade_produto * produto.valor;

        valorTotalPedido += valor_parcial;
    }

    const pedido = await pedidoRepositorio.cadastrar({
        cliente_id,
        observacao,
        valor_total: valorTotalPedido,
    });

    for (const produto of pedidoProdutos) {
        await pedidoProdutosRepositorio.cadastrar({
            pedido_id: pedido[0].id,
            produto_id: produto.id,
            quantidade_produto: produto.quantidade_produto,
            valor_produto: produto.valor,
        });
    }

    for (const item of pedido_produtos) {
        const produto = await produtoRepositorio.buscarPorId(item.produto_id);

        let estoqueAtualizado =
            produto.quantidade_estoque - item.quantidade_produto;

        produtoRepositorio.editar(
            { quantidade_estoque: estoqueAtualizado },
            item.produto_id
        );
    }

    const cliente = await clienteRepositorio.buscarPorId(cliente_id);

    emailPedido(cliente.nome, cliente.email);

    return pedido[0];
};

module.exports = cadastrarPedidoServico;
