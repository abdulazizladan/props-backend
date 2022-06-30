import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

enum Status {
    available = 'available',
    sold = 'sold',
    reserved = 'reserved'
}

@Entity()
export class Property extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({default: 0})
    price: number;

    @Column()
    type: string;

    @Column()
    streetAddress: string;

    @Column()
    city: string;

    @Column()
    state: string;


    @Column()
    image: string;

    @Column({default: Status.available})
    status: Status

    @Column()
    user: string;
}

