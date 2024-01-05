import { Schema,Document,model } from 'mongoose';

export interface login extends Document {
  readonly first_name: string;
  readonly last_name: string;
  readonly user_name: string;
  readonly email?: string;
  readonly password: Number;
  readonly createdAt?: Date;
}

export const loginSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  user_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  password: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const loginModel = model<login>('loginSchema', loginSchema);