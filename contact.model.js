"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactModel = exports.contactSchema = void 0;
const mongoose_1 = require("mongoose");
exports.contactSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    phone_number: {
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
exports.contactModel = (0, mongoose_1.model)('contactSchema', exports.contactSchema);
//# sourceMappingURL=contact.model.js.map