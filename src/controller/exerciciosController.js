import {Router} from 'express';
import { calcularMedia } from '../service/exercicios/mediaService.js';


const endpoints = Router();


endpoints.post('/media', (req, resp) => {
  let n1 = req.body.nota1;
  let n2 = req.body.nota2;
  let n3 = req.body.nota3;

  let media = calcularMedia(n1, n2, n3);

  resp.send({
    media: media
  });
})


export default endpoints;