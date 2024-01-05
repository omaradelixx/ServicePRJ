import { Schema,Document,model } from 'mongoose';

export interface contact extends Document {
  readonly name: string;
  readonly phone_number: Number;
  readonly location: string;
  readonly createdAt?: Date;
}

export const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone_number: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const contactModel = model<contact>('contactSchema', contactSchema);