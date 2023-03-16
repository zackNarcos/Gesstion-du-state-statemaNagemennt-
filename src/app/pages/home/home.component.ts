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
  providers: [RxState],
})
export class HomeComponent implements OnInit{
  // @Select (ProductsState.getProducts) products$: Observable<Product[]>
  readonly products$: Observable<Product[]>;
  constructor(
      private store: Store,
      private readonly productState: ProductsState)
  {
    this.productState.products$.subscribe({
      next: (data)=>{
        console.log("success")
      },
      error: (data)=>{
        console.log("error")
      }
    })
    this.products$ = this.productState.products$;
  }

  ngOnInit(): void {
    this.store.dispatch(new ProductAction.FetchAll)
  }

}
