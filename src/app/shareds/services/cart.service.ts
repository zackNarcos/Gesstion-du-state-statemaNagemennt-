import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import {Product} from "../models/product";
import {webSocket} from "rxjs/webSocket";
import {CartAction} from "../../store/actions/cart.action";
import {NotiflixService} from "./notiflix.service";

@Injectable({
  providedIn: 'root'
})
export class CartService {
    private socket$ = webSocket('ws://localhost:4200'); // Create instance of WebSocket

    constructor(
        private store: Store,
        private notiflixService: NotiflixService
    ) {}

    addItem(product: Product, qte: number) {
        this.store.dispatch(new CartAction.AddProduct({ product: product, qte: qte })).subscribe({
            next: () => {
                this.notiflixService.success( `${product.name} added to cart` )
            }
        });

        //TODO:: Debug this call
        this.socket$.next({ type: '[Socket] Add Product', payload: { product: product, qte: qte } }); // send the same action by WebSocket
    }

    checkout() {
        this.store.dispatch(new CartAction.Checkout());
        this.socket$.next({type: '[Socket] Checkout'});
    }





}
