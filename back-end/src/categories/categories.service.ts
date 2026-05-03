import { Injectable } from '@nestjs/common';
import data  from '../data/products.json';
@Injectable()
export class CategoriesService {
findAll():string[]{
const unique=[...new Set(data.PRODUCTS.map((p)=>p.categorie))];
return ['Tous',...unique];
}
}