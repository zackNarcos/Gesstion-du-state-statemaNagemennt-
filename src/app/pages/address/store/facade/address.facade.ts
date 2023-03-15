import {Store} from "@ngrx/store";
import {AddressStateInterface} from "../reducer/address.reducer";
import {Address} from "../../../../shareds/models/address";
import {addressSelectors} from "../selectors/address.selectors";
import {AddressActionsList} from "../actions/address.actions";
import {Injectable} from "@angular/core";

@Injectable()
export class AddressFacade {
    // get the selectors
    isLoading$ = this.store.select(addressSelectors.selectAddressLoading);
    error$ = this.store.select(addressSelectors.selectAddressError);
    addresses$ = this.store.select(addressSelectors.selectAddresses);
    address$ = this.store.select(addressSelectors.selectAddress);

    constructor(private store: Store<AddressStateInterface>) {
    }

    // get the actions and dispatch them to the store
    getAddresses = () => this.store.dispatch(AddressActionsList.loadAddresses());
    getAddress = (id: number) => this.store.dispatch(AddressActionsList.loadAddressById({addressId: id}));
    deleteAddress = (id: number) => this.store.dispatch(AddressActionsList.deleteAddress({addressId: id}));
    createAddress = (address: Address) => this.store.dispatch(AddressActionsList.createAddress({address}));
    updateAddress = (address: Address) => this.store.dispatch(AddressActionsList.updateAddress({address}));

}