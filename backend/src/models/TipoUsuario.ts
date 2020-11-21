import { Entity, Column, PrimaryColumn, OneToMany, JoinColumn } from 'typeorm';
import Usuarios from './Usuario';


@Entity('tipo_usuario')
export default class TipoUsuario {
    @PrimaryColumn()
    cd_tipo_usuario: number;

    @Column()
    nm_tipo_usuario: string;

}