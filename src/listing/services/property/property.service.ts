import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EMPTY, from, Observable } from 'rxjs';
import { Property } from 'src/listing/entities/property.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PropertyService {
    constructor( @InjectRepository(Property) private propertyRepository: Repository<Property>) {

    }

    getAll() : Observable<Property[]> {
        const properties = this.propertyRepository.find();
        if(properties){
            return from(properties)
        } else return EMPTY;
    }

    getByID(id: number) {
        const property = this.propertyRepository.findOne({where: {id: id}});
        if(property) {
            return from(property)
        } else throw new NotFoundException();
    }

    create() {
        return 'This action adds a new property';
    }

    update() {
        
    }

    remove() {  
    
    }
}
