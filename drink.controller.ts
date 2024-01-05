import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { drinkService } from './drink.service';
import { drink } from './drink.model';

@Controller('drink')
export class drinkController {
    constructor(private readonly drinkService: drinkService) { }
    @Post()
    async create(@Body() createUserDto: drink): Promise<drink> {
        return this.drinkService.create(createUserDto);
    }

    @Get()
    async findAll(): Promise<drink[]> {
        return this.drinkService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<drink> {
        return this.drinkService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateUserDto: drink): Promise<drink> {
        return this.drinkService.update(id, updateUserDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<any> {
        return this.drinkService.delete(id);
    }

}
