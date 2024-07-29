import { Router } from 'express';

const endpoints = Router();

endpoints.get('/calculadora/somar/:n1/:n2', (req, resp) => {

  let n1 = Number(req.params.n1);
  let n2 = Number(req.params.n2);
  let soma = n1 + n2;

  resp.send({
    entradas: {
      numero1: n1,
      numero2: n2
    },


    soma: soma
  });

})

endpoints.get('/calculadora/somar2', (req, resp) => {

  let n1 = Number(req.query.n1);
  let n2 = Number(req.query.n2);
  let soma = n1 + n2;

  resp.send('A soma é ' + soma);

})

export default endpoints;