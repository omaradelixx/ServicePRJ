import { Module } from '@nestjs/common';
import { drinkController } from './drink.controller';
import { drinkService } from './drink.service';
import { MongooseModule } from '@nestjs/mongoose';
import { drinkSchema,drinkModel } from './drink.model'; // Import the schema



@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'drink', schema: drinkSchema }]), // Provide ItemModel
  ],
  controllers: [drinkController],
  providers: [drinkService]
})
export class DrinkModule {}

