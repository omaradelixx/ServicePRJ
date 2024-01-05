"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginModel = exports.loginSchema = void 0;
const mongoose_1 = require("mongoose");
exports.loginSchema = new mongoose_1.Schema({
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
exports.loginModel = (0, mongoose_1.model)('loginSchema', exports.loginSchema);
//# sourceMappingURL=login-sign.model.js.map