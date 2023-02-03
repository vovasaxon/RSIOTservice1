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
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'sos455405',
    database: 'nestjs_mysql_distant_edu',
    entities: [Student, Group],
    synchronize: true,
  }), StudentsModule, GroupsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
