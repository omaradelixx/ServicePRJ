import { Injectable,Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Cookies } from './cookies.model';

@Injectable()
export class CookiesService {
    constructor(@Inject('CookiesModel') private readonly CookiesModel: Model<Cookies>) {}

  async create(user: Cookies): Promise<Cookies> {
    const newUser = new this.CookiesModel(user);
    return await newUser.save();
  }

  async findAll(): Promise<Cookies[]> {
    return await this.CookiesModel.find().exec();
  }

  async findOne(id: string): Promise<Cookies> {
    return await this.CookiesModel.findById(id).exec();
  }

  async update(id: string, user: Cookies): Promise<Cookies> {
    return await this.CookiesModel.findByIdAndUpdate(id, user, { new: true }).exec();
  }

  async delete(id: string): Promise<any> {
    return await this.CookiesModel.deleteOne({ _id: id }).exec();
  }
}
