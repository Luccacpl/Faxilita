import {MigrationInterface, QueryRunner, Table, getConnection} from "typeorm";
import TipoUsuario from "../../models/TipoUsuario";

export class createTipoUsuario1605897840811 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new Table({
            name: 'tipo_usuario',
            columns : [
              {
                name: 'cd_tipo_usuario',
                type: 'integer',
                unsigned: true,                                                                   
                isPrimary: true,
                isGenerated: false,
              },
              {
                name: 'nm_tipo_usuario',
                type: 'varchar'
              },
            ],
          }))

          await getConnection().createQueryBuilder().insert().into(TipoUsuario).values([{
            cd_tipo_usuario: 1 , nm_tipo_usuario: 'Contratante'
          },
          {
            cd_tipo_usuario: 2 , nm_tipo_usuario: 'Trabalhador'
          }
        ])
        .execute();

    }

    

   


    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tipo_usuario');
    }

}
