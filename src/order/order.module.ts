import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { MongooseModule } from '@nestjs/mongoose';
import { orderSchema, orderModel } from './order.model'; // Import the schema

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Order', schema: orderSchema }]), // Provide ItemModel
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
