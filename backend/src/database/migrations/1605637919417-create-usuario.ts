import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUsuario1605637919417 implements MigrationInterface {

    // Realiza alterações no BD
    // Criar Tabela, criar novo campo, deletar algum campo

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'usuarios',
            columns : [
              {
                name: 'cd_cpf_usuario',
                type: 'integer',
                unsigned: true,               // não pode ser negativo
                isPrimary: true,
                isGenerated: false,
              },
              {
                name: 'nm_usuario',
                type: 'varchar'
              },
              {
                name: 'dt_nasc_usuario',
                type: 'date'
              },
              {
                name: 'ds_usuario',
                type: 'text'
              },
              {
                name: 'cd_genero_usuario',
                type: 'enum'
              }
            ],
          }))

    }
    
    // Desfazer oq foi feito no UP

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('usuarios');
    }

}

// yarn typeorm migration:run
// yarn typeorm migration:revert