"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactModule = void 0;
const common_1 = require("@nestjs/common");
const contact_controller_1 = require("./contact.controller");
const contact_service_1 = require("./contact.service");
const mongoose_1 = require("@nestjs/mongoose");
const contact_model_1 = require("./contact.model");
let contactModule = class contactModule {
};
exports.contactModule = contactModule;
exports.contactModule = contactModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'contact', schema: contact_model_1.contactSchema }]),
        ],
        controllers: [contact_controller_1.contactController],
        providers: [contact_service_1.contactService]
    })
], contactModule);
//# sourceMappingURL=contact.module.js.map