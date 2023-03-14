import {Component} from '@angular/core';
import {Cart} from "../../shareds/models/cart";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AppStateInterface} from "../../store/app.state.interface";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  cart$: Observable<Cart>;
  constructor(private store: Store<AppStateInterface>) {
    this.cart$ = this.store.select(state => state.cart.cart);
  }


}
