import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, take} from "rxjs";
import {Cart} from "../models/cart";
import {Product} from "../models/Product";

@Injectable({
  providedIn: 'root'
})
export class CartService {
    panier$: BehaviorSubject<Cart> = new BehaviorSubject<Cart>({
        products: [],
        total: 0
    });

    constructor() {
    }

    getCard(): Observable<Cart> {
        return this.panier$.asObservable();
    }

    addToCard(product: Product, qteCom: number): void {
        // we take the value of the cart
        this.panier$.pipe(
            // we take only the first value of the cart for the subscription
            take(1)).subscribe(panier => {

            // we check if the product is already in the cart
            let index = panier.products.findIndex(p => p.id === product.id);

            // if the product is not in the cart we add it to the cart
            if (index === -1) {
                panier.products.push({...product, qte: qteCom});
            }
            // if the product is already in the cart we add the quantity to the existing quantity
            else {
                panier.products[index].qte += qteCom;
            }
            // we calculate the total of the cart
            panier.total += product.price * qteCom;
            // we update the cart
            this.panier$.next(panier);
        })
    }

    getTotal(){

    }
}
