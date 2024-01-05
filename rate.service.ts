import { Injectable,Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { rate } from './rate.model';

@Injectable()
export class rateService {
    constructor(@Inject('rateModel') private readonly rateModel: Model<rate>) {}

  async create(user: rate): Promise<rate> {
    const newUser = new this.rateModel(user);
    return await newUser.save();
  }

  async findAll(): Promise<rate[]> {
    return await this.rateModel.find().exec();
  }

  async findOne(id: string): Promise<rate> {
    return await this.rateModel.findById(id).exec();
  }

  async update(id: string, user: rate): Promise<rate> {
    return await this.rateModel.findByIdAndUpdate(id, user, { new: true }).exec();
  }

  async delete(id: string): Promise<any> {
    return await this.rateModel.deleteOne({ _id: id }).exec();
  }
}

