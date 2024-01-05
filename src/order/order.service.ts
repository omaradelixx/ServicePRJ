import { Injectable,Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from './Order.model';

@Injectable()
export class OrderService {
  constructor(
    @Inject('OrderModel') private readonly OrderModel: Model<Order>,
  ) {}

  async create(user: Order): Promise<Order> {
    const newUser = new this.OrderModel(user);
    return await newUser.save();
  }

  async findAll(): Promise<Order[]> {
    return await this.OrderModel.find().exec();
  }

  async findOne(id: string): Promise<Order> {
    return await this.OrderModel.findById(id).exec();
  }

  async update(id: string, user: Order): Promise<Order> {
    return await this.OrderModel.findByIdAndUpdate(id, user, { new: true }).exec();
  }

  async delete(id: string): Promise<any> {
    return await this.OrderModel.deleteOne({ _id: id }).exec();
  }
}
