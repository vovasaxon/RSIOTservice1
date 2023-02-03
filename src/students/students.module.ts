import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from 'src/typeorm/entities/Group';
import { Student } from 'src/typeorm/entities/Student';
import { StudentsController } from './controllers/students/students.controller';
import { StudentsService } from './services/students/students.service';

@Module({
  imports: [TypeOrmModule.forFeature([Student, Group])],
  controllers: [StudentsController],
  providers: [StudentsService]
})
export class StudentsModule {}
