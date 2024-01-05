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
exports.drinkService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
let drinkService = class drinkService {
    constructor(drinkModel) {
        this.drinkModel = drinkModel;
    }
    async create(user) {
        const newdrink = new this.drinkModel(user);
        return await newdrink.save();
    }
    async findAll() {
        return await this.drinkModel.find().exec();
    }
    async findOne(id) {
        return await this.drinkModel.findById(id).exec();
    }
    async update(id, user) {
        return await this.drinkModel.findByIdAndUpdate(id, user, { new: true }).exec();
    }
    async delete(id) {
        return await this.drinkModel.deleteOne({ _id: id }).exec();
    }
};
exports.drinkService = drinkService;
exports.drinkService = drinkService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('drinkModel')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], drinkService);
//# sourceMappingURL=drink.service.js.map