import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Property } from "./property.entity";

@Entity()
export class Layout extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({default: false})
    parkingSpace: boolean;

    @Column({default: false})
    fenced: boolean;

    @Column({default: 0, nullable: false})
    cotenants: number;

    @OneToOne(() => Property, (property) => property.layout)
    property: Property
}