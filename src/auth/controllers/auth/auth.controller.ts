import { Body, Controller, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SigninUserDTO } from 'src/user/dto/signindto';
import { UserService } from 'src/user/services/user/user.service';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor( private userService: UserService) {

  }

  @Post('/signin')
  signin(@Body() user: SigninUserDTO) {
    return this.userService.signin(user)
  }

  @Post('/signup')
  signup() {

  }

  @Post(':email/reset-password')
  resetPassword(@Param('email') email: string) {

  }
}
