import { Injectable, NotFoundException } from '@nestjs/common';
import { PRODUCTS } from './products.data';

@Injectable()
export class ProductsService {

  findAll() {
    return PRODUCTS;
  }

  findOne(id: number) {
    const product = PRODUCTS.find(p => p.id === id);

    if (!product) {
      throw new NotFoundException("Produit introuvable");
    }

    return product;
  }
}