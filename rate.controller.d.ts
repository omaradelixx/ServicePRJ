import { rateService } from './rate.service';
import { rate } from './rate.model';
export declare class rateController {
    private readonly userService;
    constructor(userService: rateService);
    create(createUserDto: rate): Promise<rate>;
    findAll(): Promise<rate[]>;
    findOne(id: string): Promise<rate>;
    update(id: string, updateUserDto: rate): Promise<rate>;
    remove(id: string): Promise<any>;
}
