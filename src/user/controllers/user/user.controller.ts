import { Controller, Get, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserService } from '../../services/user/user.service';

@ApiTags('Users')
@Controller('user')
export class UserController {

    constructor( private userService: UserService) {

    }

    @Get()
    @ApiOperation({summary: 'Get all users'})
    getAll() {
        return this.userService.getAll()
    }

    @ApiOperation({summary: 'toggle user active status', description: 'toggle user active status betweeb active|suspended|inactive'})
    @Patch('toggle-user-status/:id')
    toggleUserActive(@Param('id', ParseIntPipe)id: number) {

    }
}
