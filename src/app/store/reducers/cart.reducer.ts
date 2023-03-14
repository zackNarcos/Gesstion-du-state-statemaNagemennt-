import {createReducer, on} from "@ngrx/store";
import {CartActionsList} from "../actions/cart.actions";
import {CartStateInterface} from "../app.state.interface";

const initialState: CartStateInterface = {
    cart: {
        products: [],
        totalItems: 0,
        total: 0,
    },
}

export const cartReducers = createReducer(
    initialState,
    on(CartActionsList.loadCart, (state) => {
        return {
            ...state,
        }
    }),

    on(CartActionsList.clearCart, (state) => {
        return {
            ...state,
            cart: {
                products: [],
                totalItems: 0,
                total: 0,
            }
        }
    }),
    on(CartActionsList.addItem, (state, action) => {
        const existingItemIndex = state.cart.products.findIndex(p => p.id === action.product.id);

        if (existingItemIndex !== -1) {
            // if the product is in the cart, we update the qte
            const existingProduct = state.cart.products[existingItemIndex];
            const newProduct = {
                ...existingProduct,
                qte: existingProduct.qte + action.qteCom
            };
            const newProducts = [...state.cart.products];
            newProducts[existingItemIndex] = newProduct;

            return {
                ...state,
                cart: {
                    ...state.cart,
                    products: newProducts,
                    totalItems: state.cart.totalItems + action.qteCom,
                    total: state.cart.total + action.qteCom * existingProduct.price
                }
            };
        } else {
            // if the product is not in the cart, we add it
            const newProduct = {
                ...action.product,
                qte: action.qteCom
            };
            const newProducts = [...state.cart.products, newProduct];

            return {
                ...state,
                cart: {
                    ...state.cart,
                    products: newProducts,
                    totalItems: (state.cart.totalItems + action.qteCom),
                    total: state.cart.total + action.qteCom * action.product.price
                }
            };
        }
    }),
    on(CartActionsList.removeItem, (state, action) => {
        const existingItemIndex = state.cart.products.findIndex(p => p.id === action.product.id);

        if (existingItemIndex !== -1) {
            // if the product is in the cart, we remove it
            const existingProduct = state.cart.products[existingItemIndex];
            const newProducts = [...state.cart.products];
            newProducts.splice(existingItemIndex, 1);

            return {
                ...state,
                cart: {
                    ...state.cart,
                    products: newProducts,
                    totalItems: state.cart.totalItems - existingProduct.qte,
                    total: state.cart.total - existingProduct.qte * existingProduct.price
                }
            };
        } else {
            return {
                ...state
            };
        }
    }),
)
