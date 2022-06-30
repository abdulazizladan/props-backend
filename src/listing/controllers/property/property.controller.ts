import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseFilters } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreatePropertyDTO } from 'src/listing/dto/property.dto';
import { PropertyService } from 'src/listing/services/property/property.service';

@ApiTags('Property')
@Controller('property')
export class PropertyController {

    constructor( private propertyService: PropertyService) {

    }

    @ApiOperation({ summary: 'Create new property' })
    @Post('/create')
    create(@Body() property: CreatePropertyDTO) {
        return this.propertyService.create(property);
    }

    @ApiOperation({summary: 'Get all properties'})
    @Get('/')
    getAll() {
        return this.propertyService.getAll();
    }

    @ApiOperation({summary: 'Get property by ID'})
    @Get('/:id')
    getByID(@Param('id', ParseIntPipe)id: number) {
        return this.propertyService.getByID(id);
    }

    @ApiOperation({summary: 'Update property by ID'})
    @Patch('/:id')
    update() {

    }

    @ApiOperation({summary: 'Delete property by ID'})
    @Delete('/:id')
    remove() {
    
    }

}
