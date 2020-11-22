import {  Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import UsuariosController from './controllers/UsuariosController';
import LoginController from './controllers/LoginController';


const routes = Router();
const upload = multer(uploadConfig);

routes.get('/usuarios/:cd_cpf_usuario', UsuariosController.show);                               // Listagem de um usuario da tabela usuarios
routes.get('/usuarios', UsuariosController.index);                                              // Listagem da tabela usuario
routes.post('/usuarios', upload.single('images'), UsuariosController.create);                   // rodando a criação da tabela usuario
routes.post('/login', LoginController.login);

export default routes;
