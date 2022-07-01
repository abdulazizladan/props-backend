import { Controller, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from 'src/user/services/user/user.service';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor( private userService: UserService) {

  }

  @Post('/signin')
  signin() {

  }

  @Post('/signup')
  signup() {

  }

  @Post(':email/reset-password')
  resetPassword(@Param('email') email: string) {

  }
}
