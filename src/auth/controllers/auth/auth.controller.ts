import { Body, Controller, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SigninUserDTO } from 'src/user/dto/signindto';
import { UserService } from 'src/user/services/user/user.service';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor( private userService: UserService) {

  }

  @ApiOperation({summary: 'user signin'})
  @Post('/signin')
  signin(@Body() user: SigninUserDTO) {
    return this.userService.signin(user)
  }

  @ApiOperation({summary: 'user signup'})
  @Post('/signup')
  signup() {

  }

  @ApiOperation({summary: 'reset user password'})
  @Post(':email/reset-password')
  resetPassword(@Param('email') email: string) {

  }
}
