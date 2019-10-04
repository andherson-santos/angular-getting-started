import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable(
  {
    providedIn : 'root'
  }  
)
export class CartService {
  items = [];

  constructor(
    private http: HttpClient
  ) { }

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

  getShippingPrices(){
    
    return this.http.get('../assets/shipping.json');
    // return [
    //                 {"type": "Overnight",
    //                 "price": 25.99
    //                 },
    //                 {
    //                   "type": "2-Day",
    //                   "price": 9.99
    //                 },
    //                 {
    //                   "type": "Postal",
    //                   "price": 2.99
    //                 }
    //               ];
  }

}