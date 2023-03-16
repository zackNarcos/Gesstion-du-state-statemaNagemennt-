import {Component, inject, OnInit} from '@angular/core';
import {Product} from "../../shareds/models/product";
import {Observable} from "rxjs";
import {Select, Store} from "@ngxs/store";
import {ProductsState} from "../../store/states/product.state";
import {ProductAction} from "../../store/actions/product.action";
import {RxState} from "@rx-angular/state";
// import { rxState, get, createStateSlice } from '@rx-angular/state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends RxState<ProductsState> implements OnInit{
  // @Select (ProductsState.getProducts) products$: Observable<Product[]>
  model$ = this.select();
  products$: Observable<any> = this.select("products$");
  constructor(
      private store: Store)
  {
    super()
    // this.products$ = this.store.select(ProductsState.getProducts);
    this.products$ = this.store.select(state => state.products.products);
    //console.log(this.products$)
  }

  ngOnInit(): void {
    this.store.dispatch(new ProductAction.FetchAll)
  }

}
