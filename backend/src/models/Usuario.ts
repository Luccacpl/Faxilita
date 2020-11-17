import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';


@Entity('usuarios')
export default class Usuario {
    @PrimaryGeneratedColumn()
    cd_cpf_usuario: number;

    @Column()
    nm_usuario: string;

    @Column()
    dt_nasc_usuario: number;

    @Column()
    ds_usuario: string;

    @Column()
    cd_genero_usuario: string;
}