import { drinkService } from './drink.service';
import { drink } from './drink.model';
export declare class drinkController {
    private readonly drinkService;
    constructor(drinkService: drinkService);
    create(createUserDto: drink): Promise<drink>;
    findAll(): Promise<drink[]>;
    findOne(id: string): Promise<drink>;
    update(id: string, updateUserDto: drink): Promise<drink>;
    remove(id: string): Promise<any>;
}
