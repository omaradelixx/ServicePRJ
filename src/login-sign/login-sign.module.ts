import { Module } from '@nestjs/common';
import { loginController } from './login-sign.controller';
import { loginService } from './login-sign.service';
import { MongooseModule } from '@nestjs/mongoose';
import { loginSchema,loginModel } from './login-sign.model'; // Import the schema



@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'login', schema: loginSchema }]), // Provide ItemModel
  ],
  controllers: [loginController],
  providers: [loginService]
})
export class loginModule {}