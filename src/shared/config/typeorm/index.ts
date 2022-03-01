import * as path from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

/*
  Arquivo de configuração do typeorm, para fazer a comunicação com o DataBase
*/

const options: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  database: process.env.DB_NAME || 'yugioh',
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'root',
  logging: false,
  /**
   * @param __dirname
   * Com esse argumento, pega o caminho relativo da pasta ./src/shared/infra/typeorm/index.ts
   */
  entities: [
    path.resolve(
      __dirname,
      '..',
      '..',
      '..',
      'modules',
      '**',
      'infra',
      'typeorm',
      'entities',
      '*',
    ),
  ],
  migrations: [path.resolve(__dirname, 'migrations', '*')],
  cli: {
    migrationsDir: path.resolve(__dirname, 'migrations'),
  },
  synchronize: false,
};

module.exports = options;
