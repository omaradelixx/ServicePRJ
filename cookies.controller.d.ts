import { CookiesService } from './cookies.service';
import { Cookies } from './cookies.model';
export declare class CookiesController {
    private readonly CookiesService;
    constructor(CookiesService: CookiesService);
    create(createUserDto: Cookies): Promise<Cookies>;
    findAll(): Promise<Cookies[]>;
    findOne(id: string): Promise<Cookies>;
    update(id: string, updateUserDto: Cookies): Promise<Cookies>;
    remove(id: string): Promise<any>;
}
