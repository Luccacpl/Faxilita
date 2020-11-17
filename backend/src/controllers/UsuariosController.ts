import { Request, Response } from 'express';                     //importação pro typescript entender o formato to request e do response
import { getRepository } from 'typeorm';
import Usuario from '../models/Usuario';
import * as Yup from 'yup';                                      // importação para validações
import Bcrypt from 'bcrypt';                                    // importação para criptografia

export default {
    async index(request: Request, response: Response) {
        const usuarioRepository = getRepository(Usuario);
    
        const usuarios = await usuarioRepository.find();

        return response.json(usuarios);
    },

    async show(request: Request, response: Response) {
        const { cd_cpf_usuario } = request.params;

        const usuarioRepository = getRepository(Usuario);
    
        const usuario = await usuarioRepository.findOneOrFail(cd_cpf_usuario);

        return response.json(usuario);
    },
 
    async create(request: Request, response: Response) {                                // Definindo o tipo do request e do response atravess da importação do express
        let {
            cd_cpf_usuario,
            nm_usuario,
            dt_nasc_usuario,
            ds_usuario,
            cd_genero_usuario,
            nr_celular,
            email,
            senha
        } = request.body;
    
        console.log(senha);

        const salt = 10;                                                                 // Definindo o salt do bcrypt 

        const novaSenha = Bcrypt.hashSync(senha, salt);                                  // Criptografando a senha digitada
        
        senha = novaSenha;
        
        console.log(novaSenha);

        if(Bcrypt.compare(senha, novaSenha)){                                            // Comparando senha criptografa
            console.log('senha correta');
        }
        else{
            console.log('senha incorreta');
        }


        const usuarioRepository = getRepository(Usuario);                                

        const {filename} = request.file;

        const pathImage = filename;

        const data = {
            cd_cpf_usuario,
            nm_usuario,
            dt_nasc_usuario,
            ds_usuario,
            cd_genero_usuario,
            nr_celular,
            email,
            senha,
            pathImage
        };

        const schema = Yup.object().shape({
            cd_cpf_usuario: Yup.number().required().max(11),
            nm_usuario: Yup.string().required(),
            dt_nasc_usuario: Yup.date().required(),
            ds_usuario: Yup.string(),
            cd_genero_usuaro: Yup.string().required().max(1),
            nr_celular: Yup.number().required(),
            email: Yup.string().email().required(),
            senha: Yup.string().required(),
        });
    
        const usuario = usuarioRepository.create(data);

    
        try{
            await usuarioRepository.save(usuario);
        }
        catch( e ){
            console.log( 'deu erro ' + e )
        }
        
    
        return response.status(201).json(usuario);
    }
}