import {ProductStateInterface} from "../app.state.interface";
import {createReducer, on} from "@ngrx/store";
import {ProductActionsList} from "../actions/product.actions";

export const initialState: ProductStateInterface = {
    products: [],
    product: null,
    loading: false,
    error: null
}


export const productReducers = createReducer(
    initialState,
    /**
     * [loadProducts, loadProductsSuccess, loadProductsFailure actions]
     * @description : load products from server, if success, update state, if failure, update error
     * @param state
     * @param action
     */
    on(ProductActionsList.loadProducts, (state) => {
        return {
            ...state,
            loading: true
        }
    }),
    on(ProductActionsList.loadProductsSuccess, (state, action) => {
        return {
            ...state,
            loading: false,
            products: action.products
        }
    }),
    on(ProductActionsList.loadProductsFailure, (state, action) => {
        return {
            ...state,
            loading: false,
            error: action.error
        }
    }),


    /**
     * [loadProduct, loadProductSuccess, loadProductFailure actions]
     * @description : load product from server, if success, update state, if failure, update error
     * @param state
     * @param action
     */

    on(ProductActionsList.loadProduct, (state) => {
        return {
            ...state,
            loading: true
        }
    }),
    on(ProductActionsList.loadProductSuccess, (state, action) => {
        return {
            ...state,
            loading: false,
            product: action.product
        }
    }),
    on(ProductActionsList.loadProductFailure, (state, action) => {
        return {
            ...state,
            loading: false,
            error: action.error
        }
    }),


    /**
     * [addProduct, addProductSuccess, addProductFailure actions]
     * @description : add product to server, if success, update state, if failure, update error
     * @param state
     * @param action
     */
    on(ProductActionsList.addProduct, (state) => {
        return {
            ...state,
            loading: true
        }
    }),
    on(ProductActionsList.addProductSuccess, (state, action) => {
        return {
            ...state,
            loading: false,
            products: [...state.products, action.product]
        }
    }),
    on(ProductActionsList.addProductFailure, (state, action) => {
            return {
                ...state,
                loading: false,
                error: action.error
            }
        }
    ),
)