import { createSelector} from "@ngrx/store";
import {AppStateInterface, CartStateInterface} from "../app.state.interface";

export const cartFeatureSelector = (state: AppStateInterface) => state.cart;

export const selectCart = createSelector(
    cartFeatureSelector,
    (state: CartStateInterface) => state.cart
)

export const selectCartProduct = createSelector(
    cartFeatureSelector,
    (state: CartStateInterface) => state.cart.products
)

export const selectCartTotalItems = createSelector(
    cartFeatureSelector,
    (state: CartStateInterface) => state.cart.totalItems
)

export const selectCartTotal = createSelector(
    cartFeatureSelector,
    (state: CartStateInterface) => state.cart.total
)

//export selectors
export const cartSelectors = {
    selectCart,
    selectCartProduct,
    selectCartTotalItems,
    selectCartTotal
}