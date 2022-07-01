import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EMPTY, from, Observable } from 'rxjs';
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

    async getByID(id: number): Promise<Property> {
        const found = await this.propertyRepository.findOne({where: {id: id}});
        if(!found) {
            throw new NotFoundException(`Could not find property with id: ${id}`);
        } 
        else return found
    }

    create(property: CreatePropertyDTO) {
        const newProperty = this.propertyRepository.create(property);
        return from(this.propertyRepository.save(newProperty));
    }

    async update(id: number, property) {
        const updatedProperty = await this.getByID(id)
        if(updatedProperty.price){
            updatedProperty.price = property.price;
        }
        if(updatedProperty.status) {
            updatedProperty.status = property.status;
        }        
        await updatedProperty.save()
        return updatedProperty;
    }

    async remove(id: number) {  
        const property = await this.getByID(id);
        if(!property) {
            throw new NotFoundException('Could not find property');
        }else {
            await this.propertyRepository.remove(property);
            return property;
        }
    }
}
