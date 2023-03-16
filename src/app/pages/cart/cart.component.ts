import {Component, OnInit} from '@angular/core';
import {Cart} from "../../shareds/models/cart";
import {Observable} from "rxjs";
import {NotiflixService} from "../../shareds/services/notiflix.service";
import {Store} from "@ngrx/store";
import {AppStateInterface} from "../../store/app.state.interface";
import {CartActionsList} from "../../store/actions/cart.actions";

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
    cart$: Observable<Cart>;

    constructor(
        private store: Store<AppStateInterface>,
        private notiflixService: NotiflixService) {
        this.cart$ = this.store.select(state => state.cart.cart);
    }

    ngOnInit(): void {
    }

    checkout() {
        this.store.dispatch(CartActionsList.clearCart());
    }
}
