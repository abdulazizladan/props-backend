import { BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Property } from "./property.entity";

@Entity()
export class Rooms extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({default: 0, nullable: false})
    bedrooms: number;

    @Column({default: 0, nullable: false})
    livingRooms: number;

    @Column({default: 0, nullable: false})
    kitchens: number;

    toilets: number;

    bathrooms: number;

    sharedBathroom: number;

    @OneToOne(() => Property, (property) => property.rooms)
    property: Property;

    pantry: number;

}