import { Controller, Get } from '@nestjs/common';
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
}
