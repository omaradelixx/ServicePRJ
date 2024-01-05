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
export interface drink extends Document {
    readonly product_name: string;
    readonly price: string;
    readonly quantity: string;
    readonly flavour: string;
    readonly createdAt?: Date;
}
export declare const drinkSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    product_name: string;
    price: number;
    quantity: number;
    flavour: string;
    createdAt: Date;
}, Document<unknown, {}, import("mongoose").FlatRecord<{
    product_name: string;
    price: number;
    quantity: number;
    flavour: string;
    createdAt: Date;
}>> & import("mongoose").FlatRecord<{
    product_name: string;
    price: number;
    quantity: number;
    flavour: string;
    createdAt: Date;
}> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export declare const drinkModel: import("mongoose").Model<drink, {}, {}, {}, Document<unknown, {}, drink> & drink & {
    _id: import("mongoose").Types.ObjectId;
}, any>;
