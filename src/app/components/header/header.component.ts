import {Component, OnInit} from '@angular/core';
import {CartService} from "../../shareds/services/cart.service";
import {Cart} from "../../shareds/models/cart";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  cart: Cart | undefined
  constructor(private cartService: CartService) {
  }
  ngOnInit(): void {
    this.cartService.getCard().subscribe( cart => {
      this.cart = cart
    })
  }

}
