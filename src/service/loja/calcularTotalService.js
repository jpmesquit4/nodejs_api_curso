export function calcularPedido(itens, parcelas, cupom) {

    let total = 0;

    for (let produto of itens) {
      total += produto.preco;
    }

    if (cupom == 'QUERO100') {
      total -= 100;
    }

    if (parcelas > 1) {
      let juros = total * 0.05;
      total += juros;
  }
  
  return total;
}

export function calcularValorParcela(total, parcelas) {
  let valorParcela = total / parcelas;
  return valorParcela;
}