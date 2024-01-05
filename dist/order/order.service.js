"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
let OrderService = class OrderService {
    constructor(OrderModel) {
        this.OrderModel = OrderModel;
    }
    async create(user) {
        const newUser = new this.OrderModel(user);
        return await newUser.save();
    }
    async findAll() {
        return await this.OrderModel.find().exec();
    }
    async findOne(id) {
        return await this.OrderModel.findById(id).exec();
    }
    async update(id, user) {
        return await this.OrderModel.findByIdAndUpdate(id, user, { new: true }).exec();
    }
    async delete(id) {
        return await this.OrderModel.deleteOne({ _id: id }).exec();
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('OrderModel')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], OrderService);
//# sourceMappingURL=order.service.js.map