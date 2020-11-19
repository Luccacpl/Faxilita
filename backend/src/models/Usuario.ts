import { Entity, Column, PrimaryColumn } from 'typeorm';


@Entity('usuarios')
export default class Usuario {
    @PrimaryColumn()
    cd_cpf_usuario: number;

    @Column()
    nm_usuario: string;

    @Column()
    dt_nasc_usuario: Date;

    @Column()
    ds_usuario: string;

    @Column()
    cd_genero_usuario: string;

    @Column()
    nr_celular: number;

    @Column()
    email: string;

    @Column()
    senha: string;

    @Column()
    pathImage: string;
}