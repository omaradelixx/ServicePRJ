/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Schema, Document } from 'mongoose';
export interface Order extends Document {
    readonly first_name: string;
    readonly email?: string;
    readonly phone_number: number;
    readonly order_number: number;
    readonly total_cost: Int32Array;
    readonly location: string;
    readonly createdAt?: Date;
}
export declare const orderSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    first_name: string;
    phone_number: number;
    order_number: number;
    total_cost: number;
    location: string;
    createdAt: Date;
    email?: string;
}, Document<unknown, {}, import("mongoose").FlatRecord<{
    first_name: string;
    phone_number: number;
    order_number: number;
    total_cost: number;
    location: string;
    createdAt: Date;
    email?: string;
}>> & import("mongoose").FlatRecord<{
    first_name: string;
    phone_number: number;
    order_number: number;
    total_cost: number;
    location: string;
    createdAt: Date;
    email?: string;
}> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export declare const orderModel: import("mongoose").Model<Order, {}, {}, {}, Document<unknown, {}, Order> & Order & {
    _id: import("mongoose").Types.ObjectId;
}, any>;
