
import { calcularPedido, calcularValorParcela } from '../service/loja/calcularTotalService.js';
import { validacaoPedidoCompleto } from '../validation/loja/pedidoCompletoValidation.js';

import { Router } from 'express';
const endpoints = Router();

endpoints.post('/loja/pedido', (req, resp) => {
  let total = req.body.total;
  let parcelas = req.body.parcelas;
  let cupom = req.query.cupom;

  if (parcelas > 1) {
    let juros = total * 0.05;
    total += juros;
  }

  if (cupom == 'QUERO100') {
    total -= 100;
  }

  resp.send('O total do pedido ficou em R$ ' + total);

})

endpoints.post('/loja/pedido/completo', (req, resp) => {
  try {
    validacaoPedidoCompleto(req);

    let itens = req.body.itens;
    let parcelas = req.body.parcelas;
    let cupom = req.query.cupom;  

    let total = calcularPedido(itens, parcelas, cupom);
    let valorParcela = calcularValorParcela(total, parcelas)

    resp.send({
      total: total,
      qtdParcelas: parcelas,
      valorParcela: valorParcela
    });
    
  } catch (err) {
    logError(err);

    resp.status(400).send(criarErro(err))
  }

})



export default endpoints;