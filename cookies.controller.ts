import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CookiesService } from './cookies.service';
import { Cookies } from './cookies.model';

@Controller('Cookies')
export class CookiesController {
    constructor(private readonly CookiesService: CookiesService) { }
    @Post()
    async create(@Body() createUserDto: Cookies): Promise<Cookies> {
        return this.CookiesService.create(createUserDto);
    }

    @Get()
    async findAll(): Promise<Cookies[]> {
        return this.CookiesService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Cookies> {
        return this.CookiesService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateUserDto: Cookies): Promise<Cookies> {
        return this.CookiesService.update(id, updateUserDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<any> {
        return this.CookiesService.delete(id);
    }

}
