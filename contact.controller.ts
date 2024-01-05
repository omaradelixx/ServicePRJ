import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { contactService } from './contact.service';
import { contact } from './contact.model';

@Controller('contact')
export class contactController {
    constructor(private readonly contactService: contactService) { }
    @Post()
    async create(@Body() createUserDto: contact): Promise<contact> {
        return this.contactService.create(createUserDto);
    }

    @Get()
    async findAll(): Promise<contact[]> {
        return this.contactService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<contact> {
        return this.contactService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateUserDto: contact): Promise<contact> {
        return this.contactService.update(id, updateUserDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<any> {
        return this.contactService.delete(id);
    }

}
