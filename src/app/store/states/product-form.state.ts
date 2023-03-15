import {State, Action, StateContext, Selector} from '@ngxs/store';
import {Injectable} from "@angular/core";
import {ProductFormAction} from "../actions/product-form.action";
import {ProductForm} from "../../shareds/models/product.form";

export class ProductFormStateModel {
    productForm: ProductForm;
}

@State<ProductFormStateModel>({
    name: 'productForm',
    defaults: {
        productForm: {
            name: '',
            price: 0,
            description: '',
            image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg'
        }
    }
})
@Injectable()
export class ProductFormState {
    @Selector()
    static getProductForm(state: ProductFormStateModel) {
        return state.productForm;
    }

    @Action(ProductFormAction.UpdateProductForm)
    updateForm(ctx: StateContext<ProductFormStateModel>, action: ProductFormAction.UpdateProductForm) {
        const state = ctx.getState()
        ctx.setState({
            ...state,
            productForm: action.payload
        });
    }
}
