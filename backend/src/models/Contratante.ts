import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('contratantes')
export default class Contratante {
    @PrimaryGeneratedColumn()
    cd_cpf_contratante: number;

    @Column()
    nm_contratante: string;

    @Column()
    dt_nascimento_contratante: number;

    @Column()
    ds_contratante: string;

    @Column()
    ic_sexo_contratante: string;
}