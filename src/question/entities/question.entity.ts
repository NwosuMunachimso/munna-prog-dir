import {
    BaseEntity,
    Column,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  import { Quiz } from '../../quiz/entities/quiz.entity';
  
  @Entity('questions')
  export class Question extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({
      type: 'varchar',
    })
    question: string;
  
    @ManyToOne(() => Quiz, (quiz) => quiz.questions)
    quiz: Quiz;
  
  }