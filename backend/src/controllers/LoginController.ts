import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Bcrypt from 'bcrypt';  

import Usuario from '../models/Usuario';


export default {
    async login(request: Request, response: Response) {
        const {cd_cpf_usuario, senha} = request.body; 

        const usuarioRepository = getRepository(Usuario);

        try{
            const usuario = await usuarioRepository.findOneOrFail(cd_cpf_usuario);
            console.log(usuario);
            if(Bcrypt.compareSync(senha, usuario.senha)){
                return response.status(200).json();
            }else{
                return response.status(401).json({ user: "not found"})
            }
        }
        catch(e) {
           return response.status(401).json({ user: "not found"})
        }
 
    }
}