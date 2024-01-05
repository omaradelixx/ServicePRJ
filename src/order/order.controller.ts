import {Controller,Get,Post,Body,Param,Put,Delete,} from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from './order.model';
@Controller('order')
export class OrderController {
  constructor(private readonly userService: OrderService) {}
  @Post()
  async create(@Body() createUserDto: Order): Promise<Order> {
    return this.userService.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<Order[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Order> {
    return this.userService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: Order,
  ): Promise<Order> {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<any> {
    return this.userService.delete(id);
  }
}
