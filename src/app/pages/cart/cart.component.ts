import {Component, OnInit} from '@angular/core';
import {CartService} from "../../shareds/services/cart.service";
import {Cart} from "../../shareds/models/cart";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  cart: Cart | undefined
  constructor(private cartService: CartService) {
  }
  ngOnInit(): void {
    this.cartService.getCard().subscribe( cart => {
      this.cart = cart
    } )
  }

}
