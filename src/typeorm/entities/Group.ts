import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Student } from "./Student";

@Entity({name: 'groups'})
export class Group{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique:true})
    title: string;

    @Column({nullable: true})
    graduationYear: string;

    @OneToMany(() => Student, (student) => student.group)
    students: Student[];
}