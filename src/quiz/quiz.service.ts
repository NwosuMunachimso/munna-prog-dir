import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuizDto } from './dto/Create-quiz.dto';
import { Question } from '../question/entities/question.entity';
import { Quiz } from './entities/quiz.entity';
import { QuizRepository } from './repositories/quiz.repository';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(QuizRepository) private quizRepository: QuizRepository,
  ) {}

  getAllQuiz(){
    return[1,2,3,4,5]
  }

  /*async getAllQuiz(): Promise<Quiz[]> {
    return await this.quizRepository
      .createQueryBuilder('q')
      .leftJoinAndSelect('q.questions', 'qt')
      .getMany();
  }*/

  async getQuizById(id: number): Promise<Quiz> {
    return await this.quizRepository.findOne(id, {
      relations: ['questions'],
    });
  }

  async createNewQuiz(quiz: CreateQuizDto) {
    return await this.quizRepository.save(quiz);
  }
}