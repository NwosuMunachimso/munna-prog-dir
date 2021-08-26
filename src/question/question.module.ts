import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';
import { QuestionRepository } from './repositories/question.repository';
import { QuizModule } from '../quiz/quiz.module';
import { QuizRepository } from 'src/quiz/repositories/quiz.repository';
import { QuizService } from 'src/quiz/quiz.service';


@Module({
  imports:[TypeOrmModule.forFeature([QuestionRepository,QuizRepository])],
  controllers: [QuestionController],
  providers: [QuestionService, QuizService]
})
export class QuestionModule {}
