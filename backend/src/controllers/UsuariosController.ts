import { Request, Response } from 'express';                                            //importação pro typescript entender o formato to request e do response
import { getRepository } from 'typeorm';
import Usuario from '../models/Usuario';
import * as Yup from 'yup';                                                             // importação para validações
import Bcrypt from 'bcrypt';                                                            // importação para criptografia
import UsuarioView from '../views/Usuario.view';

export default {
    async index(request: Request, response: Response) {
        const usuarioRepository = getRepository(Usuario);
    
        const usuarios = await usuarioRepository.find();

        return response.json(UsuarioView.renderMany(usuarios));
    },

    async show(request: Request, response: Response) {
        const { cd_cpf_usuario } = request.params;

        const usuarioRepository = getRepository(Usuario);
    
        const usuario = await usuarioRepository.findOneOrFail(cd_cpf_usuario);

        return response.json(UsuarioView.render(usuario));                              // Fazer ele retornar apenas conteudo dentro da View
    },
 
    async create(request: Request, response: Response) {                                // Definindo o tipo do request e do response atraves da importação do express
        let {
            cd_cpf_usuario,
            nm_usuario,
            dt_nasc_usuario,
            ds_usuario,
            cd_genero_usuario,
            nr_celular,
            email,
            senha,
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

        //const {filename} = request.file;                                                 // Desestruturando o request de um arquivo para pegar o nome dele para guardar no BD

        //const pathImage = filename;

        const { cd_tipo_usuario } = request.body;

        console.log(cd_tipo_usuario);

        const data = {
            cd_cpf_usuario,
            nm_usuario,
            dt_nasc_usuario,
            ds_usuario,
            cd_genero_usuario,
            nr_celular,
            email,
            senha,
            //pathImage,
            cd_tipo_usuario
        };

        const schema = Yup.object().shape({
            cd_cpf_usuario: Yup.number().required('CPF obrigatório'),
            nm_usuario: Yup.string().required('Nome obrigatório'),
            ds_usuario: Yup.string().max(300),
            cd_genero_usuario: Yup.string().max(1).required('Genero obrigatório'),
            nr_celular: Yup.number().required('Numero de celular obrigatório'),
            email: Yup.string().email().required('Email obrigatório'),
            senha: Yup.string().required('Senha obrigatória'),
            pathImage: Yup.string(),
            dt_nasc_usuario: Yup.date().required('data de nascimento obrigatória'),
            cd_tipo_usuario: Yup.number().max(1).required('Tipo do usuario obrigatorio'),
        }); 
          
        
    
        await schema.validate(data, {                                                   // Comando que faz as validações que foram passadas atraves da constante schema com o conteudo da constante data
            abortEarly: false,
        }) 

        const usuario = usuarioRepository.create(data);

        console.log(usuario);

    
        try{
            await usuarioRepository.save(usuario);
        }
        catch( e ){
            console.log( 'deu erro ' + e )
        }
        
    
        return response.status(201).json(usuario);
    }
}