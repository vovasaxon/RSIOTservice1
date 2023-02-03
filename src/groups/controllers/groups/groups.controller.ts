import { Controller, Get, Post, Body, Delete, Param, ParseIntPipe, Put, Patch } from '@nestjs/common';
import { GroupsService } from 'src/groups/services/groups/groups.service';
import { CreateGroupDto } from 'src/students/dtos/CreateGroup.dto';
import { CreateStudentDto } from 'src/students/dtos/CreateStudent.dto';
import { UpdateGroupDto } from 'src/students/dtos/UpdateGroup.dto';

@Controller('groups')
export class GroupsController {

    constructor(private groupService: GroupsService){}

    @Get()
    async getGroups() {
        const students = await this.groupService.findGroups();
        return students;
    }

    @Post()
    createStudent(@Body() createGroupDto:
    CreateGroupDto ) {
        return this.groupService.createGroup(createGroupDto);
    }

    @Delete(':id')
    async deleteUserById(@Param('id', ParseIntPipe) id: number){
        await this.groupService.deleteGroup(id);
     }


     @Post(':id/students')
     createGroupStudent(
        @Param('id', ParseIntPipe) id: number, 
        @Body() createStudentDto: CreateStudentDto) {
            return this.groupService.createGroupStudent(id, createStudentDto)
        }

    @Put(':id')
    async updateGroupById(@Param('id', ParseIntPipe) id: number, @Body()updateStudentDto:UpdateGroupDto){
       await this.groupService.updateGroup(id, updateStudentDto);
    }

    @Patch(':idg/students/:ids')
    async addStudentToGroup(@Param('idg', ParseIntPipe) idg: number,
    @Param('ids', ParseIntPipe) ids: number){
        await this.groupService.addStudentToGroup(idg, ids);
    }
     
}
