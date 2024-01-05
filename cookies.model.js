"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CookiesModel = exports.CookiesSchema = void 0;
const mongoose_1 = require("mongoose");
exports.CookiesSchema = new mongoose_1.Schema({
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
exports.CookiesModel = (0, mongoose_1.model)('CookiesSchema', exports.CookiesSchema);
//# sourceMappingURL=cookies.model.js.map