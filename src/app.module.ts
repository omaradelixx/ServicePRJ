import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { loginModule } from './login-sign/login-sign.module';
import * as dotenv from 'dotenv'; // Import dotenv
dotenv.config();
@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URL),
    loginModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
