import {createAction, props} from "@ngrx/store";
import {Product} from "../../shareds/models/Product";

enum ProductActions {
    UPDATE_PRODUCT_FORM = '[Product Form] Update Product Form',
    RESET_PRODUCT_FORM = '[Product Form] Reset Product Form',

}

const productUpdateForm = createAction(
    ProductActions.UPDATE_PRODUCT_FORM,
    props<{ product: Product }>()
);

const productResetForm = createAction(
    ProductActions.RESET_PRODUCT_FORM,
);


export const ProductFormActions = {
    productUpdateForm,
    productResetForm

}
