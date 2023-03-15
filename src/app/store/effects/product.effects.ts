import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ProductsService} from "../../shareds/services/api/products.service";
import {catchError, map, mergeMap} from "rxjs/operators";
import {ProductActionsList} from "../actions/product.actions";
import {of} from "rxjs";

@Injectable()
export class ProductEffects {
    loadProducts$ = createEffect(
        () => this.actions$.pipe(
            ofType(ProductActionsList.loadProducts),
            mergeMap(() => this.productService.getProducts()
                .pipe(
                    map(products => ProductActionsList.loadProductsSuccess({products})),
                    catchError(error => of(ProductActionsList.loadProductsFailure({error})))
                ))
        )
    );
    loadProduct$ = createEffect(
        () => this.actions$.pipe(
            ofType(ProductActionsList.loadProduct),
            mergeMap((action) => this.productService.getProduct(action.id)
                .pipe(
                    map(product => ProductActionsList.loadProductSuccess({product})),
                    catchError(error => of(ProductActionsList.loadProductFailure({error})))
                ))
        )
    );
    createProduct$ = createEffect(
        () => this.actions$.pipe(
            ofType(ProductActionsList.addProduct),
            mergeMap((action) => this.productService.addProduct(action.product)
                .pipe(
                    map(product => ProductActionsList.addProductSuccess({product: product})),
                    catchError(error => of(ProductActionsList.addProductFailure({error})))
                ))
        )
    );

    constructor(
        private actions$: Actions,
        private productService: ProductsService
    ) {
    }

}