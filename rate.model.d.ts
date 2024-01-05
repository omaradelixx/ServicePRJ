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
export interface rate extends Document {
    readonly value: Number;
    readonly comment: string;
    readonly createdAt?: Date;
}
export declare const rateSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    value: number;
    comment: string;
    createdAt: Date;
}, Document<unknown, {}, import("mongoose").FlatRecord<{
    value: number;
    comment: string;
    createdAt: Date;
}>> & import("mongoose").FlatRecord<{
    value: number;
    comment: string;
    createdAt: Date;
}> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export declare const rateModel: import("mongoose").Model<rate, {}, {}, {}, Document<unknown, {}, rate> & rate & {
    _id: import("mongoose").Types.ObjectId;
}, any>;
