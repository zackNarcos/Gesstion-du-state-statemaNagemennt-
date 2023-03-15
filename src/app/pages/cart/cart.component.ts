import {Component, OnInit} from '@angular/core';
import {Cart} from "../../shareds/models/cart";
import {Observable} from "rxjs";
import {NotiflixService} from "../../shareds/services/notiflix.service";
import {CartsState} from "../../store/states/cart.state";
import {Select, Store} from "@ngxs/store";
import {CartAction} from "../../store/actions/cart.action";
import {Product} from "../../shareds/models/product";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  @Select (CartsState.getCartsProduct) products$: Observable<Product[]>;
  @Select (CartsState.getTotalPrice) totalPrice$: Observable<number>;
  @Select (CartsState.getTotalItems) totalItems$: Observable<number>;
  constructor(
      private store: Store,
      private notiflixService : NotiflixService)
  {

  }

  checkout() {
    this.store.dispatch(new CartAction.Checkout()).subscribe({
      next: () => {
        this.notiflixService.success(`Your Order is validated`)
      },
      error:() => {
        this.notiflixService.failure(`Error: Order is invalidated`)
      }
    });

  }
}
