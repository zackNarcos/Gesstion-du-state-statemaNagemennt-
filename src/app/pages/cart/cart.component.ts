import {Component, OnInit} from '@angular/core';
import {CartService} from "../../shareds/services/cart.service";
import {Cart} from "../../shareds/models/cart";
import {Observable} from "rxjs";
import {NotiflixService} from "../../shareds/services/notiflix.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  cart$: Observable<Cart>;
  constructor(private cartService: CartService, private notiflixService : NotiflixService) {
  }
  ngOnInit(): void {
    this.cart$ = this.cartService.getCard();
  }

  checkout() {
    this.cartService.checkout();
    this.notiflixService.success(`Your Order is validated`)
  }
}
