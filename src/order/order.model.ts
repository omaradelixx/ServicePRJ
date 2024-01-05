import { Schema, Document, model } from 'mongoose';
export interface Order extends Document {
  readonly first_name: string;
  readonly email?: string;
  readonly phone_number: number;
  readonly order_number: number;
  readonly total_cost: Int32Array;
  readonly location: string;
  readonly createdAt?: Date;
}

export const orderSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
  phone_number: {
    type: Number,
    required: true,
  },
  order_number: {
    type: Number,
    required: true,
  },
  total_cost: {
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
export const orderModel = model<Order>('Order', orderSchema);
