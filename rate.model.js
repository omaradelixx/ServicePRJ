"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rateModel = exports.rateSchema = void 0;
const mongoose_1 = require("mongoose");
exports.rateSchema = new mongoose_1.Schema({
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
exports.rateModel = (0, mongoose_1.model)('rateSchema', exports.rateSchema);
//# sourceMappingURL=rate.model.js.map