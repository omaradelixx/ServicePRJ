import { Injectable,Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { drink } from './drink.model';

@Injectable()
export class drinkService {
    constructor(@Inject('drinkModel') private readonly drinkModel: Model<drink>) {}

  async create(user: drink): Promise<drink> {
    const newdrink = new this.drinkModel(user);
    return await newdrink.save();
  }

  async findAll(): Promise<drink[]> {
    return await this.drinkModel.find().exec();
  }

  async findOne(id: string): Promise<drink> {
    return await this.drinkModel.findById(id).exec();
  }

  async update(id: string, user: drink): Promise<drink> {
    return await this.drinkModel.findByIdAndUpdate(id, user, { new: true }).exec();
  }

  async delete(id: string): Promise<any> {
    return await this.drinkModel.deleteOne({ _id: id }).exec();
  }
}