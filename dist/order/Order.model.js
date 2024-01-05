"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderModel = exports.orderSchema = void 0;
const mongoose_1 = require("mongoose");
exports.orderSchema = new mongoose_1.Schema({
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
exports.orderModel = (0, mongoose_1.model)('Order', exports.orderSchema);
//# sourceMappingURL=Order.model.js.map