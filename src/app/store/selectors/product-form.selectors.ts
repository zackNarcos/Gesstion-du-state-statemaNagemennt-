import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ProductFormStateInterface} from "../reducers/product-form.reducer";

const ProductFormSelectorFeature = createFeatureSelector<ProductFormStateInterface>('productForm');

const productFormSelector = createSelector(
    ProductFormSelectorFeature,
    (state: ProductFormStateInterface) => state.product
)


export const ProductFormSelectors = {
    ProductFormSelectorFeature,
    productFormSelector
}
