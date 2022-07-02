import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './controllers/user/user.controller';
import { SigninUserDTO } from './dto/signindto';
import { User } from './entities/user.entity';
import { UserService } from './services/user/user.service';

@Module({
  imports: [
    User, TypeOrmModule.forFeature([User])
  ],
  controllers: [UserController],
  providers: [
    UserService, 
    SigninUserDTO
  ],
  exports: [
    UserService, 
    SigninUserDTO,
    User,
    TypeOrmModule.forFeature([User])
  ]
})
export class UserModule {}
