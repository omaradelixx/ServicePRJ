import { Schema,Document,model } from 'mongoose';

export interface Cookies extends Document {
  readonly product_name: string;
  readonly flavour_name: string;
  readonly quantity: Number;
  readonly price: Number;
  readonly expirydate: Date;
  readonly createdAt?: Date;
}

export const CookiesSchema = new Schema({
  product_name: {
    type: String,
    required: true,
  },
  flavour_name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  expirydate: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const CookiesModel = model<Cookies>('CookiesSchema', CookiesSchema);