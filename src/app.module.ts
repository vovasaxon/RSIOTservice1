import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Student } from './typeorm/entities/Student';
import { StudentsModule } from './students/students.module';
import { Group } from './typeorm/entities/Group';
import { GroupsModule } from './groups/groups.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: '34.116.178.181',
    username: 'root',
    password: '123',
    port:3306,
    database:'distant',
    entities: [Student, Group],
    synchronize: true,
  }), StudentsModule, GroupsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
