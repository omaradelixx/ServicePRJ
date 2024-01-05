"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginModule = void 0;
const common_1 = require("@nestjs/common");
const login_sign_controller_1 = require("./login-sign.controller");
const login_sign_service_1 = require("./login-sign.service");
const mongoose_1 = require("@nestjs/mongoose");
const login_sign_model_1 = require("./login-sign.model");
let loginModule = class loginModule {
};
exports.loginModule = loginModule;
exports.loginModule = loginModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'login', schema: login_sign_model_1.loginSchema }]),
        ],
        controllers: [login_sign_controller_1.loginController],
        providers: [login_sign_service_1.loginService]
    })
], loginModule);
//# sourceMappingURL=login-sign.module.js.map