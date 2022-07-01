import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { Roles } from "./roles.enum";

@Entity({name: 'User'})
export class User extends BaseEntity {

    @PrimaryColumn({unique: true})
    email: string;

    @Column()
    password: string;

    @Column()
    salt: string;

    @Column()
    firstName: string;

    @Column()
    middleName: string;

    @Column()
    lastName: string;

    @Column()
    gender: string

    @Column({default: Roles.guest})
    role: Roles;

    @CreateDateColumn({readonly: true})
    dateRegistered: Date;
}