import {Product} from "../shareds/models/Product";
import {Cart} from "../shareds/models/cart";
import {AddressStateInterface} from "../pages/address/store/reducer/address.reducer";
import * as fromRouter from '@ngrx/router-store';
import {ProductFormStateInterface} from "./reducers/product-form.reducer";

export interface ProductStateInterface {
    products: Product[];
    product: Product;
    loading: boolean;
    error: any;
}

export interface CartStateInterface {
    cart: Cart
}


/**
 * The AppStateInterface is the interface that defines the state of the application.
 * It is used to define the type of the state in the store.
 * It is also used to define the type of the state in the selectors.
 */
export interface AppStateInterface {
    addresses: AddressStateInterface,
    productForm: ProductFormStateInterface
    cart: CartStateInterface,
    products: ProductStateInterface,
    router: fromRouter.RouterReducerState<any>;
}


