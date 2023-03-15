import {Product} from "../../shareds/models/product";

export namespace ProductAction {
    export class Add {
        static readonly type = '[Product] Add';
        constructor(public payload: Product) {}
    }

    export class Edit {
        static readonly type = '[Product] Edit';

        constructor(public payload: { id: number; address: Product }) {}
    }

    export class FetchAll {
        static readonly type = '[Product] Fetch All';
    }

    export class SetSelected {
        static readonly type = '[Product] Fetch One';

        constructor(public id: number) {
        }
    }

    export class Delete {
        static readonly type = '[Product] Delete';
        constructor(public id: number) {}
    }
}
