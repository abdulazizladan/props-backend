import { Entity } from 'typeorm'

@Entity()
export class Property {

    name: string;

    description: string;

    price: number;

    type: string;

    address: string;

    city: string;

    state: string;

    zip: string;

    image: string;

    status: string;

    user: string;
}