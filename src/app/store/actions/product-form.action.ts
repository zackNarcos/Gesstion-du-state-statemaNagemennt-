import {Product} from "../../shareds/models/product";
import {ProductForm} from "../../shareds/models/product.form";

export namespace ProductFormAction {
    export class UpdateProductForm {
        static readonly type = '[ProductForm] Update Form';
        constructor(public payload: ProductForm) {}
    }

}
