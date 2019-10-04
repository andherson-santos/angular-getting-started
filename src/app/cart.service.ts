import { Injectable } from '@angular/core';

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

  putOnCart(item){
    this.items.push(item);
  }

  clearCart(){
    this.items = [];
    return this.items;

  }


}