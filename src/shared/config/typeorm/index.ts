import * as path from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

/*
  Arquivo de configuração do typeorm, para fazer a comunicação com o DataBase
*/

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 49153,
  // port: Number(process.env.DB_PORT) || 5432,
  database: process.env.DB_NAME || 'ygo',
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || 'acj159753',
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
