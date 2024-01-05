import { Module } from '@nestjs/common';
import { rateController } from './rate.controller';
import { rateService } from './rate.service';
import { MongooseModule } from '@nestjs/mongoose';
import { rateSchema,rateModel } from './rate.model'; // Import the schema



@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'rate', schema: rateSchema }]), // Provide ItemModel
  ],
  controllers: [rateController],
  providers: [rateService]
})
export class rateModule {}



