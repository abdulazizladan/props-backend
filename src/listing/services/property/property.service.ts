import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EMPTY, from, Observable, of } from 'rxjs';
import { CreatePropertyDTO } from 'src/listing/dto/property.dto';
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
    
    getByID(id: number): Observable<Property> {
        const found = this.propertyRepository.findOne({where: {id: id}});
        if(found == undefined) {
            throw new NotFoundException(`Could not find property with id: ${id}`);
        } 
        return from(found)
    }

    create(property: CreatePropertyDTO) {
        const newProperty = this.propertyRepository.create(property);
        return from(this.propertyRepository.save(newProperty));
    }

    update(id: number, property) {
        const updatedProperty = this.getByID(id)
        //if(updatedProperty.price){
        //    updatedProperty.price = property.price;
        //}
        //if(updatedProperty.status) {
        //    updatedProperty.status = property.status;
        //}        
        //updatedProperty.save()
        //return updatedProperty;
    }

    remove(id: number) {  
        //const property = await this.getByID(id);
        //if(!property) {
        //    throw new NotFoundException('Could not find property');
        //}else {
        //    await this.propertyRepository.remove(property);
        //    return property;
        //}
    }
}
