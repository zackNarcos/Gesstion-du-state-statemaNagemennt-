import {Product} from "../../shareds/models/product";

export namespace CartAction {
    export class AddProduct {
        static readonly type = '[Cart] Add Product';

        constructor(public payload: { product: Product, qte: number }) {}
    }

    export class FetchAll {
        static readonly type = '[Cart] FeTch Product';
    }

    export class Checkout {
        static readonly type = '[Cart] Checkout';
    }
}
