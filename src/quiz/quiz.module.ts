import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizController } from './quiz.controller';
import { QuizRepository } from './repositories/quiz.repository';
import { QuestionRepository } from '../question/repositories/question.repository';
import { QuizService } from './quiz.service';
import { QuestionModule } from '../question/question.module';
import { QuestionService } from '../question/question.service';
import { QuestionController } from '../question/question.controller';

@Module({
    imports:[TypeOrmModule.forFeature([QuizRepository, QuestionRepository])],
    controllers:[QuizController,QuestionController],
    providers:[QuizService,QuestionService],
})
export class QuizModule {}
