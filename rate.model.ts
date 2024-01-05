import { Schema,Document,model } from 'mongoose';

export interface rate extends Document {
  readonly value: Number;
  readonly comment: string;
  readonly createdAt?: Date;
}

export const rateSchema = new Schema({
  value: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
 
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const rateModel = model<rate>('rateSchema', rateSchema);
