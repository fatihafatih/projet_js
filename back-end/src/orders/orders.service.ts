import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersService {
private orders: any[] = [];
  create(order: any) {
  const newOrder = {
    numeroCommande: "CMD-" + Math.floor(Math.random() * 100000),
    date: new Date().toLocaleDateString("fr-FR"),
    ...order,
  };

  this.orders.push(newOrder);
  return newOrder;
}
    

findAll() {
  return this.orders;
}

findByEmail(email: string) {
  return this.orders.filter(
    (order) => order.client.email === email,
  );
}
}