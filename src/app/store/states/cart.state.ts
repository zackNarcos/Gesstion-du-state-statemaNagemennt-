import {State, Action, StateContext, Selector, Store} from '@ngxs/store';
import {Injectable} from "@angular/core";
import {CartAction} from "../actions/cart.action";
import {Product} from "../../shareds/models/product";
import UpdateWebSocketData = CartAction.UpdateWebSocketData;
import {state} from "@angular/animations";

export interface CartStateModel {
    products: Product[]
    total: number
    totalItems: number
}

@State<CartStateModel>({
    name: 'cart',
    defaults: {
        products: [],
        total : 0,
        totalItems: 0
    }
})

@Injectable()
export class CartsState {
    constructor(
        private store: Store
    ) {
    }

    @Selector()
    static getCartsProduct(state: CartStateModel): Product[] {
        return state.products;
    }

    @Selector()
    static getTotalPrice(state: CartStateModel): number {
        return state.total;
    }

    @Selector()
    static getTotalItems(state: CartStateModel): number {
        return state.totalItems;
    }

    @Action(CartAction.AddProduct)
    add(
        {setState, getState}: StateContext<CartStateModel>,
        { payload }: CartAction.AddProduct
    ) {
        // we check if the product is already in the cart
        let index = getState().products.findIndex(p => p.id === payload.product.id);
        // if the product is not in the cart we add it to the cart
        if (index === -1) {
            getState().products.push({...payload.product, qte: payload.qte});
            getState().totalItems += payload.qte;
        }// if the product is already in the cart we add the quantity to the existing quantity
        else {
            getState().products[index].qte += payload.qte;
            getState().totalItems += payload.qte;
        }
        // we calculate the total of the cart
        getState().total += payload.product.price * payload.qte;

        return setState({
            ...getState()
        });
    }

    @Action(CartAction.Checkout)
    checkout({setState, getState}: StateContext<CartStateModel>) {
        return setState({
            ...getState(),
            products: [],
            total: 0,
            totalItems: 0
        });
    }

    //TODO::Debug this from websocket calling
    @Action(CartAction.UpdateWebSocketData)
    updateWebSocketData(ctx: StateContext<CartStateModel>, { payload }: UpdateWebSocketData) {
        this.store.dispatch(new CartAction.AddProduct({product: payload.product, qte: payload.qte}))
    }
}
