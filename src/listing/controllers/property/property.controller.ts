import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Property')
@Controller('property')
export class PropertyController {

    @ApiOperation({ summary: 'Create new property' })
    @Post('/create')
    create() {
        return 'This action adds a new property';
    }

    @ApiOperation({summary: 'Get all properties'})
    @Get('/')
    getAll() {
        return 'This action returns all properties';
    }

    @ApiOperation({summary: 'Get property by ID'})
    @Get('/:id')
    getByID(id: number) {
        return `This action returns a #${id} property`;
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
