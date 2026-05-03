import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

@Injectable()
export class OrdersService {
private filePath = join(process.cwd(), 'src', 'data', 'orders.json');
  async create(order: any) {
    const orders = await this.findAll();

    const newOrder = {
      numeroCommande: "CMD-" + Math.floor(Math.random() * 100000),
      date: new Date().toLocaleDateString("fr-FR"),
      ...order,
    };

    orders.push(newOrder);

    await writeFile(this.filePath, JSON.stringify(orders, null, 2));

    return newOrder;
  }

  async findAll() {
    try {
      const data = await readFile(this.filePath, 'utf-8');
      return JSON.parse(data);
    } catch {
      return [];
    }
  }

  async findByEmail(email: string) {
    const orders = await this.findAll();
    return orders.filter(
      (order) => order.client.email === email,
    );
  }
}