import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1605571011432 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'images',
          columns: [
            {
               name: 'id_image',
               type: 'integer',
               unsigned: true,
               isPrimary: true,
            },
            {
              name: 'path',
              type: 'varchar',
            },
            ],
            foreignKeys: [
              {
                name: 'ImageUser',
                columnNames: ['id_image'],
                referencedTableName: 'usuarios',
                referencedColumnNames: ['cd_cpf_usuario'],
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
              }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('images');
    }

}
