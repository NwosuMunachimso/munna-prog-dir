import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { createConnection } from 'typeorm';

export const typeOrmconfig:TypeOrmModuleOptions={
      type: 'postgres',
      host: 'localhost',
      port: 5432 ,
      username: 'postgres',
      password: 'Munanwosu1',
      database: 'quizz',
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: true,
};