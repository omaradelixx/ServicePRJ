import { OrderService } from './order.service';
import { Order } from './order.model';
export declare class OrderController {
    private readonly userService;
    constructor(userService: OrderService);
    create(createUserDto: Order): Promise<Order>;
    findAll(): Promise<Order[]>;
    findOne(id: string): Promise<Order>;
    update(id: string, updateUserDto: Order): Promise<Order>;
    remove(id: string): Promise<any>;
}
