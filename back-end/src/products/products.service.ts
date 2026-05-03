import { Injectable, NotFoundException } from '@nestjs/common';
import data from '../data/products.json';
@Injectable()
export class ProductsService {

  findAll() {
    return data.PRODUCTS;
  }

  findOne(id: number) {
const product = data.PRODUCTS.find(p => p.id === Number(id));
    if (!product) {
      throw new NotFoundException("Produit introuvable");
    }

    return product;
  }
}