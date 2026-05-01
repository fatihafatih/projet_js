import { Controller, Post, Get, Body, Query } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Post()
  create(@Body() order) {
    return this.ordersService.create(order);
  }

  @Get()
  getOrders(@Query('email') email?: string) {
    if (email) {
      return this.ordersService.findByEmail(email);
    }
    return this.ordersService.findAll();
  }
}