import { Module } from '@nestjs/common';
import { contactController } from './contact.controller';
import { contactService } from './contact.service';
import { MongooseModule } from '@nestjs/mongoose';
import { contactSchema,contactModel } from './contact.model'; // Import the schema



@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'contact', schema: contactSchema }]), // Provide ItemModel
  ],
  controllers: [contactController],
  providers: [contactService]
})
export class contactModule {}

