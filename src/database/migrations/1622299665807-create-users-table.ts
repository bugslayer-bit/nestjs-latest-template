import type { MigrationInterface, QueryRunner } from 'typeorm';
import { Table } from 'typeorm';

export class CreateUsersTable1622299665807 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'varchar(36)',
            isPrimary: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'first_name',
            type: 'varchar(255)',
            isNullable: true,
          },
          {
            name: 'last_name',
            type: 'varchar(255)',
            isNullable: true,
          },
          {
            name: 'role',
            type: 'enum',
            enum: ['USER', 'ADMIN'],
            default: "'USER'",
          },
          {
            name: 'email',
            type: 'varchar(255)',
            isNullable: true,
            isUnique: true,
          },
          {
            name: 'password',
            type: 'varchar(255)',
            isNullable: true,
          },
          {
            name: 'phone',
            type: 'varchar(255)',
            isNullable: true,
          },
          {
            name: 'avatar',
            type: 'varchar(255)',
            isNullable: true,
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
