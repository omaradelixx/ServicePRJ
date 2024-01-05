"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.drinkModel = exports.drinkSchema = void 0;
const mongoose_1 = require("mongoose");
exports.drinkSchema = new mongoose_1.Schema({
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
exports.drinkModel = (0, mongoose_1.model)('drinkSchema', exports.drinkSchema);
//# sourceMappingURL=drink.model.js.map