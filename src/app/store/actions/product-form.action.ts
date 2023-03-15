import {Product} from "../../shareds/models/product";

export namespace ProductFormAction {
    export class UpdateName {
        static readonly type = '[ProductForm] UpdateName';
        constructor(public payload: string) { }
    }

    export class UpdatePrice {
        static readonly type = '[ProductForm] UpdatePrice';
        constructor(public payload: number) { }
    }

    export class UpdateDescription {
        static readonly type = '[ProductForm] UpdateDescription';
        constructor(public payload: string) { }
    }

    export class UpdateImage {
        static readonly type = '[ProductForm] UpdateImage';
        constructor(public payload: string) { }
    }

}
