import { Injectable } from '@nestjs/common';

@Injectable()
export class PropertyService {
    constructor() {

    }

    getAll() {
        return 'This action returns all properties';
    }

    getByID(id: number) {
        return `This action returns a #${id} property`;
    }

    create() {
        return 'This action adds a new property';
    }

    update() {
        
    }

    remove() {  
    
    }
}
