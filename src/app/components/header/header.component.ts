import {Component, OnInit} from '@angular/core';
import {CartService} from "../../shareds/services/cart.service";
import {Cart} from "../../shareds/models/cart";
import {Observable} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  cart$: Observable<Cart> = this.cartService.getCard();
  constructor(private cartService: CartService) {
  }


}
