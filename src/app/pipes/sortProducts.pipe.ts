import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'sortProducts'
})
export class SortProductsPipe implements PipeTransform {

  
  transform(products : Product[] | null, sortingKey : 'title' | 'price' | 'stock'): Product[] {
    return products ? products.sort((leftKey, rightKey) => leftKey[sortingKey].toString()
    .localeCompare(rightKey[sortingKey].toString())) : [];
  }

}
