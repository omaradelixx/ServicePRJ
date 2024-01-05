import { Module } from '@nestjs/common';
import { CookiesController } from './cookies.controller';
import { CookiesService } from './cookies.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CookiesSchema,CookiesModel } from './cookies.model'; // Import the schema



@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Cookies', schema: CookiesSchema }]), // Provide ItemModel
  ],
  controllers: [CookiesController],
  providers: [CookiesService]
})
export class CookiesModule {}

