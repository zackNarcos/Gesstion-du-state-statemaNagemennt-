import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable, of, take} from "rxjs";
import {Cart} from "../models/cart";
import {Product} from "../models/Product";

@Injectable({
  providedIn: 'root'
})
export class CartService {
    private panier$: BehaviorSubject<Cart> = new BehaviorSubject<Cart>({
        products: [],
        totalItems: 0,
        total: 0
    });

    constructor() {
    }

    getCard(): Observable<Cart> {
        return this.panier$.asObservable();
    }

    checkout(){
        this.panier$.next({
            products : [],
            totalItems: 0,
            total: 0
        })
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
                panier.totalItems += qteCom;
            }
            // if the product is already in the cart we add the quantity to the existing quantity
            else {
                panier.products[index].qte += qteCom;
                panier.totalItems += qteCom;

            }
            // we calculate the total of the cart
            panier.total += product.price * qteCom;
            // we update the cart
            this.panier$.next(panier);
        })
    }

}
