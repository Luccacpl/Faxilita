import express from 'express';
import path from 'path';
import cors from 'cors';                                                                      // Importação que permite backend e frontend usarem a me

import 'express-async-errors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));                   // Definindo caminho pra poder acessar as imagens que foram upadas
app.use(errorHandler);

console.log('Server aberto!');

app.listen(3333);                                                                             //localhost:3333

