import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, take} from "rxjs";
import {Cart} from "../models/cart";
import {Product} from "../models/Product";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  panier$:BehaviorSubject<Cart>=new BehaviorSubject<Cart>({
    products:[],
    total:0
  });

  constructor() {
  }

  getCard():Observable<Cart>{
    return this.panier$.asObservable();
  }

    addToCard(product: Product, qteCom: number):void{
    this.getCard().pipe(take(1)).subscribe(
        cart=> {
          let index: number = 0
          if (cart.products.includes(product,index)){
            cart.products[index].qte += 1
            cart.total +=  product.price
          }else {
            cart.total +=  product.price * qteCom
              product.qte = qteCom
            cart.products.push(product)
          }

        }
    )
  }


}
