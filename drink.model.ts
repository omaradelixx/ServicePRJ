import { Schema,Document,model } from 'mongoose';

export interface drink extends Document {
  readonly product_name: string;
  readonly price : string;
  readonly quantity: string;
  readonly flavour: string;
  readonly createdAt?: Date;
}

export const drinkSchema = new Schema({
  product_name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },

  flavour: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const drinkModel = model<drink>('drinkSchema', drinkSchema);