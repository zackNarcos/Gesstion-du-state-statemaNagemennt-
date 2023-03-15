import {Component, OnInit} from '@angular/core';
import {Product} from "../../shareds/models/product";
import {Observable} from "rxjs";
import {Select, Store} from "@ngxs/store";
import {ProductsState} from "../../store/states/product.state";
import {ProductAction} from "../../store/actions/product.action";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  @Select (ProductsState.getProducts) products$: Observable<Product[]>
  constructor(
      private store: Store
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(new ProductAction.FetchAll)
  }

}
