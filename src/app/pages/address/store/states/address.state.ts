import {State, Action, StateContext, Selector} from '@ngxs/store';
import {AddressAction} from "../actions/address.action";
import {Address} from "../../../../shareds/models/address";
import {Injectable} from "@angular/core";
import {AddressService} from "../../../../shareds/services/api/address.service";
import {tap} from "rxjs";

export interface AddressStateModel {
    addresses: Address[];
    selectedAddress: Address
}

@State<AddressStateModel>({
    name: 'addresses',
    defaults: {
        addresses: [],
        selectedAddress : null
    }
})

@Injectable()
export class AddressState {
    constructor(private addressService: AddressService) {
    }

    @Selector()
    static getAddresses(state: AddressStateModel): Address[] {
        return state.addresses;
    }

    @Selector()
    static getSelectedAddress(state: AddressStateModel): Address {
        return state.selectedAddress;
    }

    @Action(AddressAction.SetSelected)
    setSelectedAddress({getState, setState}: StateContext<AddressStateModel>, {id}: AddressAction.SetSelected) {
        return this.addressService.getAddress(id).pipe(
            tap((data) => {
                const state = getState();
                setState({
                    ...state,
                    selectedAddress: data
                });
            })
        );
    }

    @Action(AddressAction.FetchAll)
    async fetchAll({getState, setState}: StateContext<AddressStateModel>)
    {
        return this.addressService.getAddresses().pipe(
            tap((data) => {
                setState({
                    ...getState(),
                    addresses: data
                });
            })
        );
    }

    @Action(AddressAction.Add)
    add({getState, setState}: StateContext<AddressStateModel>, { payload }: AddressAction.Add) {
        return this.addressService.addAddress(payload).pipe(
            tap((data) => {
                setState({
                    ...getState(),
                    addresses: [...getState().addresses, data]
                });
            })
        );
    }

    @Action(AddressAction.Delete)
    remove({getState, setState}: StateContext<AddressStateModel>, { id }: AddressAction.Delete) {
        return this.addressService.deleteAddress(id).pipe(
            tap((data) => {
                const filteredArray = getState().addresses.filter(item => item.id !== id);
                setState({
                    ...getState(),
                    addresses: filteredArray,
                });
            })
        );
    }

    @Action(AddressAction.Edit)
    update({getState, setState }: StateContext<AddressStateModel>, { payload }: AddressAction.Edit) {
        return this.addressService.updateAddress(payload.id, payload.address).pipe(
            tap((data) => {
                const filteredArray = getState().addresses.filter(item => item.id !== payload.id);
                setState({
                    ...getState(),
                    addresses: filteredArray,
                });
            })
        );

    }
}
