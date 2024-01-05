import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { loginService } from './login-sign.service';
import { login } from './login-sign.model';

@Controller('login')
export class loginController {
    constructor(private readonly loginService: loginService) { }
    @Post()
    async create(@Body() createUserDto: login): Promise<login> {
        return this.loginService.create(createUserDto);
    }

    @Get()
    async findAll(): Promise<login[]> {
        return this.loginService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<login> {
        return this.loginService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateUserDto: login): Promise<login> {
        return this.loginService.update(id, updateUserDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<any> {
        return this.loginService.delete(id);
    }

}