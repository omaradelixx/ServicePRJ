import { contactService } from './contact.service';
import { contact } from './contact.model';
export declare class contactController {
    private readonly contactService;
    constructor(contactService: contactService);
    create(createUserDto: contact): Promise<contact>;
    findAll(): Promise<contact[]>;
    findOne(id: string): Promise<contact>;
    update(id: string, updateUserDto: contact): Promise<contact>;
    remove(id: string): Promise<any>;
}
