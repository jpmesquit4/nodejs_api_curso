

export function validacaoPedidoCompleto(req) {
  if (!req.body.parcelas || isNaN(req.body.parcelas))
    throw new Error('O parametro parcela esta invalido')
  if (!req.body.itens)
    throw new Error('O parametro itens esta invalido')
}