import {createReducer, on} from "@ngrx/store";
import {ProductFormActions} from "../actions/product-form.actions";
import {Product} from "../../shareds/models/Product";

export interface ProductFormStateInterface {
    product: Product;
}

const initialState: ProductFormStateInterface = {
    product: {
        id: 0,
        name: '',
        price: 0,
        description: '',
        image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
        qte: 0,
    }
}

export const productFormReducer = createReducer(
    initialState,
    on(ProductFormActions.productResetForm, state => {
            return {...state, product: initialState.product}
        }
    ),
    on(ProductFormActions.productUpdateForm, (state, action) => {
            return {...state, product: action.product}
        }
    )
)