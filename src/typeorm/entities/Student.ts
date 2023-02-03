import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Group } from './Group'

@Entity({name: 'students'})
export class Student{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    surname: string;

    @Column()
    name: string;

    @Column({nullable: true})
    number: string;

    @ManyToOne(() => Group, (group) => group.students, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    group: Group;
}