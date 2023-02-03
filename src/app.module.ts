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
    host: 'db-mysql-fra1-33941-do-user-13475848-0.b.db.ondigitalocean.com',
    port: 25060,
    username: 'doadmin',
    password: 'AVNS_Ce8uqmZxPDZTtdEW_n5',
    database: 'defaultdb',
    entities: [Student, Group],
    synchronize: true,
  }), StudentsModule, GroupsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
