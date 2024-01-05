import { Injectable,Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { login } from './login-sign.model';

@Injectable()
export class loginService {
    constructor(@Inject('loginModel') private readonly loginModel: Model<login>) {}

  async create(user: login): Promise<login> {
    const newUser = new this.loginModel(user);
    return await newUser.save();
  }

  async findAll(): Promise<login[]> {
    return await this.loginModel.find().exec();
  }

  async findOne(id: string): Promise<login> {
    return await this.loginModel.findById(id).exec();
  }

  async update(id: string, user: login): Promise<login> {
    return await this.loginModel.findByIdAndUpdate(id, user, { new: true }).exec();
  }

  async delete(id: string): Promise<any> {
    return await this.loginModel.deleteOne({ _id: id }).exec();
  }
}