import { Entity, Column, PrimaryColumn, Generated, OneToOne} from 'typeorm';


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

}