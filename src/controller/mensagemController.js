
import {Router} from 'express';

const endpoints = Router();

endpoints.get("/helloworld", (req, resp) => {

  resp.send("hello world")

})

endpoints.get('/mensagem/boasvindas', (req, resp) => {

  resp.send('ola, seja bem-vindo(a)');

})

endpoints.get('/v2/mensagem/boasvindas', (req, resp) => {

  resp.send('que bom que voce esta aqui!');

})

endpoints.get('/mensagem/ocupado', (req, resp) => {

  resp.send('esou ocupado no momento');

})

endpoints.get('/mensagem/ocupado/recado', (req, resp) => {

  resp.send('esou ocupado no momento, deixei uma mensagem no email xxxx');

})

endpoints.get('/mensagem/ola', (req, resp) => {

  let pessoa = req.query.nome ?? "nome indefinido";

  resp.send("Ola " + pessoa);

})



export default endpoints;