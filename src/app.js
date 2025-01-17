import 'dotenv/config.js'

import express from 'express';
import cors from 'cors';
import adicionarRotas from './rotas.js';

import './utils/global.js'

const servidor = express();
servidor.use(express.json());
servidor.use(cors());

// Adiciona as rotas
adicionarRotas(servidor);







const PORTA = process.env.PORTA;

servidor.listen(PORTA, () => console.log("API subiu na porta " + PORTA))