import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { rateService } from './rate.service';
import { rate } from './rate.model';

@Controller('rate')
export class rateController {
    constructor(private readonly userService: rateService) { }
    @Post()
    async create(@Body() createUserDto: rate): Promise<rate> {
        return this.userService.create(createUserDto);
    }

    @Get()
    async findAll(): Promise<rate[]> {
        return this.userService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<rate> {
        return this.userService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateUserDto: rate): Promise<rate> {
        return this.userService.update(id, updateUserDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<any> {
        return this.userService.delete(id);
    }

}

