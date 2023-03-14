import {Address} from "../../shareds/models/address";
import {createEntityAdapter} from "@ngrx/entity";

export const addressAdapter = createEntityAdapter<Address>({
    selectId: address => address.id
});
