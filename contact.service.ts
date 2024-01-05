import { Injectable,Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { contact } from './contact.model';

@Injectable()
export class contactService {
    constructor(@Inject('contactModel') private readonly contactModel: Model<contact>) {}

  async create(user: contact): Promise<contact> {
    const newcontact = new this.contactModel(user);
    return await newcontact.save();
  }

  async findAll(): Promise<contact[]> {
    return await this.contactModel.find().exec();
  }

  async findOne(id: string): Promise<contact> {
    return await this.contactModel.findById(id).exec();
  }

  async update(id: string, user: contact): Promise<contact> {
    return await this.contactModel.findByIdAndUpdate(id, user, { new: true }).exec();
  }

  async delete(id: string): Promise<any> {
    return await this.contactModel.deleteOne({ _id: id }).exec();
  }
}