import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateStudentDto } from 'src/students/dtos/CreateStudent.dto';
import { UpdateStudentDto } from 'src/students/dtos/UpdateUser.dto';
import { StudentsService } from 'src/students/services/students/students.service';

@Controller('students')
export class StudentsController {

    constructor(private studentService: StudentsService){}

    @Get()
    async getStudents() {
        const students = await this.studentService.findStundents();
        return students;
    }

    @Post()
    createStudent(@Body() createStudentDto:
    CreateStudentDto ) {
        return this.studentService.createStudent(createStudentDto);
    }

    @Put(':id')
    async updateUserById(@Param('id', ParseIntPipe) id: number, @Body()updateStudentDto:UpdateStudentDto){
       await this.studentService.updateStudent(id, updateStudentDto);
    }

    @Delete(':id')
    async deleteUserById(@Param('id', ParseIntPipe) id: number){
        await this.studentService.deleteStudent(id);
     }
}
