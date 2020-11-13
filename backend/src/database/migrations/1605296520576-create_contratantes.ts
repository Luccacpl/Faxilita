import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createContratantes1605296520576 implements MigrationInterface {

      // Realiza alterações no BD
      // Criar Tabela, criar novo campo, deletar algum campo

  public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'contratantes',
        columns : [
          {
            name: 'cd_cpf_contratante',
            type: 'integer',
            unsigned: true,
            isPrimary: true,
            isGenerated: false,
          },
          {
            name: 'nm_contratante',
            type: 'varchar'
          },
          {
            name: 'dt_nascimento_contratante',
            type: 'date'
          },
          {
            name: 'ds_contratante',
            type: 'text'
          },
          {
            name: 'ic_sexo_contratante',
            type: 'boolean'
          }
        ],
      }))
  }

        // Desfazer oq foi feito no UP

  public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('contratantes');
  }

}
