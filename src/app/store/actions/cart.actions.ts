import {createAction, props} from "@ngrx/store";
import {Product} from "../../shareds/models/Product";
import {Cart} from "../../shareds/models/cart";

enum CartActions {
    ADD_ITEM = '[Cart] Add Item',
    REMOVE_ITEM = '[Cart] Remove Item',
    CLEAR_CART = '[Cart] Clear Cart',
    LOAD_CART = '[Cart] Load Cart',

}

export const addItem = createAction(
    CartActions.ADD_ITEM,
    props<{ product: Product, qteCom : number }>()
);

export const removeItem = createAction(
    CartActions.REMOVE_ITEM,
    props<{ product: Product }>()
);

export const clearCart = createAction(
    CartActions.CLEAR_CART
);

export const loadCart = createAction(
    CartActions.LOAD_CART,
    props<{ cart: Cart }>()
);

export const CartActionsList = {
    addItem,
    removeItem,
    clearCart,
    loadCart
}
