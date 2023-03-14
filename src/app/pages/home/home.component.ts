import {Component, OnInit} from '@angular/core';
import {Product} from "../../shareds/models/Product";
import {Observable} from "rxjs";
import { Store} from "@ngrx/store";
import {AppStateInterface} from "../../store/app.state.interface";
import {ProductActionsList} from "../../store/actions/product.actions";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    products$: Observable<Product[]>;
    isLoading$: Observable<boolean>;
    error$: Observable<any>;

    constructor(private store: Store<AppStateInterface>) {
        this.products$ = this.store.select(state => state.products.products);
        this.isLoading$ = this.store.select(state => state.products.loading);
        this.error$ = this.store.select(state => state.products.error);
    }

    ngOnInit(): void {
        this.store.dispatch(ProductActionsList.loadProducts());
    }

}
