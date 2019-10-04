import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable(
  {
    providedIn : 'root'
  }  
)
export class CartService {
  items = [];

  constructor() { }

  getItems(){
    return this.items;
  }

  addToCart(item){
    this.items.push(item);
  }

  clearCart(){
    this.items = [];
    return this.items;

  }


}