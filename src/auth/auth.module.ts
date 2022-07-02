import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { User } from 'src/user/entities/user.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { Strategy } from 'passport-jwt';
import { AuthController } from './controllers/auth/auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    UserModule, 
    PassportModule.register({defaultStrategy: 'jwt'}),
  JwtModule.register({
  secret: 'secret',
  signOptions: {
    expiresIn: 36000,
  }
}),],
  controllers: [AuthController],
  providers: []
})
export class AuthModule {}
