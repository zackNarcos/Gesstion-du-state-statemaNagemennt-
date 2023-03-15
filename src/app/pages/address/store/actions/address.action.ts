import {Address} from "../../../../shareds/models/address";

export namespace AddressAction {
    export class Add {
        static readonly type = '[Address] Add';
        constructor(public payload: Address) {}
    }

    export class Edit {
        static readonly type = '[Address] Edit';

        constructor(public payload: { id: number; address: Address }) {}
    }

    export class FetchAll {
        static readonly type = '[Address] Fetch All';
    }

    export class SetSelected {
        static readonly type = '[Address] Fetch One';

        constructor(public id: number) {
        }
    }

    export class Delete {
        static readonly type = '[Address] Delete';
        constructor(public id: number) {}
    }
}
