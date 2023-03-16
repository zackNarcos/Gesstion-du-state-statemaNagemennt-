import {State, Action, StateContext, Selector} from '@ngxs/store';
import {Injectable} from "@angular/core";
import {map, Observable, tap} from "rxjs";
import {Product} from "../../shareds/models/product";
import {ProductsService} from "../../shareds/services/api/products.service";
import {ProductAction} from "../actions/product.action";
import {RxState} from "@rx-angular/state";

export interface ProductStateModel {
    products: Product[];
    selectedProduct: Product
}

@State<ProductStateModel>({
    name: 'products',
    defaults: {
        products: [],
        selectedProduct : null
    }
})

@Injectable()
export class ProductsState extends RxState<ProductStateModel>{
    constructor(private productsService: ProductsService) {
        super();
    }
    products$ = this.select("products");

    @Selector()
    static getProducts(state: ProductStateModel): Product[] {
        return state.products;
    }

    @Selector()
    static getSelectedProduct(state: ProductStateModel): Product {
        return state.selectedProduct;
    }

    @Action(ProductAction.SetSelected)
    setSelectedProduct({getState, setState}: StateContext<ProductStateModel>, {id}: ProductAction.SetSelected) {
        return this.productsService.getProduct(id).pipe(
            tap((data) => {
                const state = getState();
                setState({
                    ...state,
                    selectedProduct: data
                });
            })
        );
    }

    @Action(ProductAction.FetchAll)
    async fetchAll({getState, setState }: StateContext<ProductStateModel>)
    {
        return this.productsService.getProducts().pipe(
            tap((data) => {
                setState({
                    ...getState(),
                    products: data
                });
            })
        );
    }

    @Action(ProductAction.Add)
    add({getState, setState }: StateContext<ProductStateModel>, { payload }: ProductAction.Add) {
        return this.productsService.addProduct(payload).pipe(
            tap((data) => {
                setState({
                    ...getState(),
                    products: [...getState().products, data]
                });
            })
        );
    }
}
