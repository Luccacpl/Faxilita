import Usuario from '../models/Usuario';

// View serve para decidir quais informações vão ser passadas para o Frontend
// Importante para não passar por exemplo o campo senha do banco de dados

export default {
    render(usuario: Usuario) {
        return {
            cd_cpf_usuario: usuario.cd_cpf_usuario,
            nm_usuario: usuario.nm_usuario,
            dt_nasc_usuario: usuario.dt_nasc_usuario,
            ds_usuario: usuario.ds_usuario,
            cd_genero_usuario: usuario.cd_genero_usuario,
            nr_celular: usuario.nr_celular,
            email: usuario.email,
            url: `http://localhost:3333/uploads/${usuario.pathImage}`,
        };
    },

    renderMany(usuarios: Usuario[]) {
        return usuarios.map(usuario => this.render(usuario));                       // Percorre por meio do 'map' todos os usuarios e pra cada usuario 
                                                                                    // ele renderiza o metodo acima.
    }
};