import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ProductStateInterface} from "../app.state.interface";

export const ProductsSelectorFeature = createFeatureSelector<ProductStateInterface>('products');

const selectProducts = createSelector(
    ProductsSelectorFeature,
    (state: ProductStateInterface) => state.products
)

const selectProduct = createSelector(
    ProductsSelectorFeature,
    (state: ProductStateInterface) => state.product
)

const selectLoading = createSelector(
    ProductsSelectorFeature,
    (state: ProductStateInterface) => state.loading
)

const selectError = createSelector(
    ProductsSelectorFeature,
    (state: ProductStateInterface) => state.error
)



export const productSelectors = {
    ProductsSelectorFeature,
    selectProducts,
    selectProduct,
    selectLoading,
    selectError
}

