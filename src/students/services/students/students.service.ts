import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from 'src/typeorm/entities/Student';
import { CreateStudentParams, UpdateStudentParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class StudentsService {

    constructor(@InjectRepository(Student) 
    private studentRepository:Repository<Student>,
    ) {}

    findStundents() {
        return this.studentRepository.find({relations: ['group']})
    }

    createStudent(studentDetails: CreateStudentParams) {
        const newStudent = this.studentRepository.create({...studentDetails});
        return this.studentRepository.save(newStudent);
    }

    updateStudent(id: number, updateStudentDetails: UpdateStudentParams){
       return this.studentRepository.update({id}, {...updateStudentDetails});
    }

    deleteStudent(id: number){
        return this.studentRepository.delete({id});
     }
}
