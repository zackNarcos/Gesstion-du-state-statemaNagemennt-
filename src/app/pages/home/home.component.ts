import {Component, OnInit} from '@angular/core';
import {Product} from "../../shareds/models/Product";
import {Observable, Subject} from "rxjs";
import {Store} from "@ngrx/store";
import {AppStateInterface, ProductStateInterface} from "../../store/app.state.interface";
import {ProductActionsList} from "../../store/actions/product.actions";
import {RxState} from "@rx-angular/state";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers: [RxState],
})
export class HomeComponent implements OnInit {

    products$: Observable<Product[]>;
    isLoading$: Observable<boolean>;
    error$: Observable<any>;

    readonly state$ = this.state.select();
    private destroyed$ = new Subject<void>();

    constructor(
        private store: Store<AppStateInterface>,
        private state: RxState<ProductStateInterface>
    ) {
        // this.products$ = this.store.select(state => state.products.products);
        this.isLoading$ = this.store.select(state => state.products.loading);
        this.error$ = this.store.select(state => state.products.error);
        this.state.set(
            {
                product: null,
                products: [],
                error: false,
            }
        )
    }

    ngOnInit(): void {
        this.store.dispatch(ProductActionsList.loadProducts());
        // this.store.select(state => state.products.products).pipe(
        //     takeUntil(this.destroyed$),
        //     tap((products) => {
        //         this.state.set({products: products})
        //     })
        // ).subscribe()
        this.products$ = this.store.select(state => state.products.products);
    }


}
