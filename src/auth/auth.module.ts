import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './controllers/auth/auth.controller';

@Module({
  imports: [UserModule],
  controllers: [AuthController],
  providers: []
})
export class AuthModule {}
