import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { QuizModule } from './quiz/quiz.module';
import { QuestionModule } from './question/question.module';
import { typeOrmconfig } from './config/typeormconfig';


@Module({
  imports: [QuizModule,TypeOrmModule.forRoot(typeOrmconfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}



/*@Module({
  imports: [QuizModule, QuestionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
*/