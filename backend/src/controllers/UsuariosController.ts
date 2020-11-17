import { Request, Response } from 'express';                     //importação pro typescript entender o formato to request e do response
import { getRepository } from 'typeorm';
import Usuario from '../models/Usuario';

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
        const {
            cd_cpf_usuario,
            nm_usuario,
            dt_nasc_usuario,
            ds_usuario,
            cd_genero_usuario,
        } = request.body;
    
        const usuarioRepository = getRepository(Usuario);
    
        const usuario = usuarioRepository.create({
            cd_cpf_usuario,
            nm_usuario,
            dt_nasc_usuario,
            ds_usuario,
            cd_genero_usuario,

        });

    
        await usuarioRepository.save(usuario);
    
        return response.status(201).json(usuario);
    }
}