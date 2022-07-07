import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Layout } from './layout.entity';
import { Rooms } from './rooms.entity';

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

    @OneToOne(() => Layout, (layout) => layout.property)
    @JoinColumn()
    layout: Layout;

    @OneToOne(() => Rooms, (rooms) => rooms.property)
    @JoinColumn()
    rooms: Rooms;

    @Column()
    user: string;
}

