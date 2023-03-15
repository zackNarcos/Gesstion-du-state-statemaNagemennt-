import {Component, OnInit} from '@angular/core';
import {CartService} from "../../shareds/services/cart.service";
import {Cart} from "../../shareds/models/cart";
import {Observable} from "rxjs";
import {Select} from "@ngxs/store";
import {CartsState} from "../../store/states/cart.state";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Select (CartsState.getTotalItems) totalItems$: Observable<Cart>
  constructor() {
  }


}
