import {createAction, props} from "@ngrx/store";
import {Product} from "../../shareds/models/Product";

enum ProductActions {
    LOAD_PRODUCTS = '[Product/API] Load Products',
    LOAD_PRODUCTS_SUCCESS = '[Product/API] Load Products Success',
    LOAD_PRODUCTS_FAILURE = '[Product/API] Load Products Failure',

    LOAD_PRODUCT = '[Product/API] Load Product',
    LOAD_PRODUCT_SUCCESS = '[Product/API] Load Product Success',
    LOAD_PRODUCT_FAILURE = '[Product/API] Load Product Failure',

    ADD_PRODUCT = '[Product/API] Add Product',
    ADD_PRODUCT_SUCCESS = '[Product/API] Add Product Success',
    ADD_PRODUCT_FAILURE = '[Product/API] Add Product Failure',

}

export const loadProducts = createAction(
    ProductActions.LOAD_PRODUCTS
);


export const loadProductsSuccess = createAction(
    ProductActions.LOAD_PRODUCTS_SUCCESS,
    props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
    ProductActions.LOAD_PRODUCTS_FAILURE,
    props<{ error: any }>()
);

export const loadProduct = createAction(
    ProductActions.LOAD_PRODUCT,
    props<{ id: number }>()
);

export const loadProductSuccess = createAction(
    ProductActions.LOAD_PRODUCT_SUCCESS,
    props<{ product: Product }>()
);

export const loadProductFailure = createAction(
    ProductActions.LOAD_PRODUCT_FAILURE,
    props<{ error: any }>()
);

export const addProduct = createAction(
    ProductActions.ADD_PRODUCT,
    props<{ product: Product }>()
);

export const addProductSuccess = createAction(
    ProductActions.ADD_PRODUCT_SUCCESS,
    props<{ product: Product }>()
);

export const addProductFailure = createAction(
    ProductActions.ADD_PRODUCT_FAILURE,
    props<{ error: any }>()
);

export const ProductActionsList = {
    loadProducts,
    loadProductsSuccess,
    loadProductsFailure,

    loadProduct,
    loadProductSuccess,
    loadProductFailure,

    addProduct,
    addProductSuccess,
    addProductFailure

}

