import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Group } from 'src/typeorm/entities/Group';
import { CreateGroupParams, CreateStudentParams, UpdateGroupParams } from 'src/utils/types';
import { Repository } from 'typeorm';
import { StudentsService } from 'src/students/services/students/students.service';
import { Student } from 'src/typeorm/entities/Student';
import { CreateStudentDto } from 'src/students/dtos/CreateStudent.dto';

@Injectable()
export class GroupsService {

    constructor(
    @InjectRepository(Group) private groupRepository:Repository<Group>,
    @InjectRepository(Student) private studentRepository:Repository<Student>
    ) {}

    findGroups() {
        return this.groupRepository.find()
    }

    createGroup(groupDetails: CreateGroupParams) {
        const newGroup = this.groupRepository.create({...groupDetails});
        return this.groupRepository.save(newGroup);
    }

    deleteGroup(id: number){
        return this.groupRepository.delete({id});
    }
    
    async createGroupStudent(id: number, 
        createStudentParams : CreateStudentParams) {

            const group = await this.groupRepository.findOneBy({id});
            if(!group)
            throw new HttpException(
                'Not Found',
                HttpStatus.BAD_REQUEST
            )
        const newUser = this.studentRepository.create({...createStudentParams, group, });
        return this.studentRepository.save(newUser)
     }
  
    updateGroup(id: number, updateGroupDetails: UpdateGroupParams){
        return this.groupRepository.update({id}, {...updateGroupDetails});
     }

    async addStudentToGroup(idg:number, ids:number){
        const group = await this.groupRepository.findOneBy({id: idg});
        if(!group)
        throw new HttpException(
            'Not Found',
            HttpStatus.BAD_REQUEST
        )

        const student = await this.studentRepository.findOneBy({id: ids});
        if(!student)
        throw new HttpException(
            'Not Found',
            HttpStatus.BAD_REQUEST
        )
        return this.studentRepository.update({id:ids}, {group});

    } 
     
}
