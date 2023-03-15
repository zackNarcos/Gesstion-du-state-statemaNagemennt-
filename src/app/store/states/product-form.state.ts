import {State, Action, StateContext, Selector} from '@ngxs/store';
import {Injectable} from "@angular/core";
import {tap} from "rxjs";
import {Product} from "../../shareds/models/product";
import {ProductsService} from "../../shareds/services/api/products.service";
import {ProductAction} from "../actions/product.action";
import {ProductFormAction} from "../actions/product-form.action";

export interface ProductStateModel {
    products: Product[];
    selectedProduct: Product
}

@State<ProductStateModel>({
    name: 'products',
    defaults: {
        products: [],
        selectedProduct : null
    }
})

export class ProductFormStateModel {
    productForm: Product;
}

@State<ProductFormStateModel>({
    name: 'productForm',
    defaults: {
        productForm: {
            id: 0,
            name: '',
            price: 0,
            description: '',
            qte: 0,
            image: ''
        }
    }
})
@Injectable()
export class ProductFormState {
    @Selector()
    static getProductForm(state: ProductFormStateModel) {
        return state.productForm;
    }

    @Action(ProductFormAction.UpdateName)
    updateName(ctx: StateContext<ProductFormStateModel>, { payload }: ProductFormAction.UpdateName) {
        const state = ctx.getState();
        ctx.patchState({
            productForm: {
                ...state.productForm,
                name: payload
            }
        });
    }

    @Action(ProductFormAction.UpdatePrice)
    updatePrice(ctx: StateContext<ProductFormStateModel>, { payload }: ProductFormAction.UpdatePrice) {
        const state = ctx.getState();
        ctx.patchState({
            productForm: {
                ...state.productForm,
                price: payload
            }
        });
    }

    @Action(ProductFormAction.UpdateDescription)
    updateDescription(ctx: StateContext<ProductFormStateModel>, { payload }: ProductFormAction.UpdateDescription) {
        const state = ctx.getState();
        ctx.patchState({
            productForm: {
                ...state.productForm,
                description: payload
            }
        });
    }

    @Action(ProductFormAction.UpdateImage)
    updateImage(ctx: StateContext<ProductFormStateModel>, { payload }: ProductFormAction.UpdateImage) {
        const state = ctx.getState();
        ctx.patchState({
            productForm: {
                ...state.productForm,
                description: payload
            }
        });
    }
}
