import { loginService } from './login-sign.service';
import { login } from './login-sign.model';
export declare class loginController {
    private readonly loginService;
    constructor(loginService: loginService);
    create(createUserDto: login): Promise<login>;
    findAll(): Promise<login[]>;
    findOne(id: string): Promise<login>;
    update(id: string, updateUserDto: login): Promise<login>;
    remove(id: string): Promise<any>;
}
