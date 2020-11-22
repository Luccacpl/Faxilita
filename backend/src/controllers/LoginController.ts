import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Bcrypt from 'bcrypt';  

import Usuario from '../models/Usuario';


export default {
    async login(request: Request, response: Response) {
        const {cd_cpf_usuario, senha} = request.body;                                                           // Pegando campos do banco de dados que serão utilizados para o login

        const usuarioRepository = getRepository(Usuario);

        try{
            const usuario = await usuarioRepository.findOneOrFail(cd_cpf_usuario);                              // Verificando se o cpf existe
            console.log(usuario);
            if(Bcrypt.compareSync(senha, usuario.senha)){                                                       // Verificando se a senha digitada existe
                return response.status(200).json();                                                             // Caso exista, ele retorna o codigo 200
            }else{
                return response.status(401).json({ user: "not found"})                                          // Caso não exista ele retorna o codigo 401
            }
        }
        catch(e) {
           return response.status(401).json({ user: "not found"})
        }
 
    }
}