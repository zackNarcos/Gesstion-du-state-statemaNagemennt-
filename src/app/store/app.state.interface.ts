import {Product} from "../shareds/models/Product";
import {Address} from "../shareds/models/address";
import {productReducers} from "./reducers/product.reducer";
import {cartReducers} from "./reducers/cart.reducer";
import {Cart} from "../shareds/models/cart";


export interface ProductStateInterface {
    products: Product[];
    product: Product;
    loading: boolean;
    error: any;
}

export interface CartStateInterface {
    cart: Cart
}

export interface AddressStateInterface {
    addresses: Address[];
    address: Address;
    loading: boolean;
    error: any;
}


/**
 * The AppStateInterface is the interface that defines the state of the application.
 * It is used to define the type of the state in the store.
 * It is also used to define the type of the state in the selectors.
 */
export interface AppStateInterface {
    addresses: AddressStateInterface,
    cart: CartStateInterface,
    products: ProductStateInterface,
}