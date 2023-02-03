import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsModule } from 'src/students/students.module';
import { Group } from 'src/typeorm/entities/Group';
import { Student } from 'src/typeorm/entities/Student';
import { GroupsController } from './controllers/groups/groups.controller';
import { GroupsService } from './services/groups/groups.service';

@Module({
  imports: [TypeOrmModule.forFeature([Group, Student]), StudentsModule],
  controllers: [GroupsController],
  providers: [GroupsService]
})
export class GroupsModule {}
