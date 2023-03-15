import {createReducer, on} from "@ngrx/store";
import {AddressActionsList} from "../actions/address.actions";
import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {Address} from "../../../../shareds/models/address";


export interface AddressStateInterface extends EntityState<Address> {
    address: Address;
    loading: boolean;
    error: any;
}


export const addressAdapter: EntityAdapter<Address> = createEntityAdapter<Address>({
    selectId: (address) => address.id,
    sortComparer: false

});

export const initialState: AddressStateInterface = addressAdapter.getInitialState(
    {
        address: null,
        loading: false,
        error: null
    }
);


export const addressReducers = createReducer(
    initialState,

    /**
     * [loadAddress, loadAddressSuccess, loadAddressFailure actions]
     * @description : load addresses from server, if success, update state, if failure, update error
     * @param state
     * @param action
     *
     */
    on(AddressActionsList.loadAddresses, (state) => {
        return {
            ...state,
            loading: true
        }
    }),
    on(AddressActionsList.loadAddressesSuccess, (state, action) => {
        return addressAdapter.setAll(action.addresses, {...state, loading: false});
    }),
    on(AddressActionsList.loadAddressesFailure, (state, action) => {
        return {
            ...state,
            loading: false,
            error: action.error
        }
    }),


    /**
     * [createAddress, createAddressSuccess, createAddressFailure actions]
     * @description : create addresses from server, if success, update state, if failure, update error
     * @param state
     * @param action
     */
    on(AddressActionsList.createAddress, (state) => {
        return {
            ...state,
            loading: true
        }
    }),
    on(AddressActionsList.createAddressSuccess, (state, action) => {
        return addressAdapter.addOne(action.address, {...state, loading: false});
    }),
    on(AddressActionsList.createAddressFailure, (state, action) => {
        return {
            ...state,
            loading: false,
            error: action.error
        }
    }),


    /**
     * [updateAddress, updateAddressSuccess, updateAddressFailure actions]
     * @description : update addreses from server, if success, update state, if failure, update error
     * @param state
     * @param action
     */
    on(AddressActionsList.updateAddress, (state) => {
        return {
            ...state,
            loading: true
        }
    }),

    on(AddressActionsList.updateAddressSuccess, (state, action) => {
        return addressAdapter.updateOne({id: action.address.id, changes: action.address}, {...state, loading: false});
    }),

    on(AddressActionsList.updateAddressFailure, (state, action) => {
        return {
            ...state,
            loading: false,
            error: action.error
        }
    }),


    /**
     * [deleteAddress, deleteAddressSuccess, deleteAddressFailure actions]
     * @description : delete addreses from server, if success, update state, if failure, update error
     * @param state
     * @param action
     */
    on(AddressActionsList.deleteAddress, (state) => {
        return {
            ...state,
            loading: true
        }
    }),
    on(AddressActionsList.deleteAddressSuccess, (state, action) => {
        return addressAdapter.removeOne(action.addressId, {...state, loading: false});
    }),
    on(AddressActionsList.deleteAddressFailure, (state, action) => {
        return {
            ...state,
            loading: false,
            error: action.error
        }
    }),


    /**
     * [loadAddressById, loadAddressByIdSuccess, loadAddressByIdFailure actions]
     * @description : load addreses by id from server, if success, update state, if failure, update error
     * @param state
     * @param action
     */
    on(AddressActionsList.loadAddressById, (state) => {
        return {
            ...state,
            loading: true
        }
    }),
    on(AddressActionsList.loadAddressByIdSuccess, (state, action) => {
        return {
            ...state,
            loading: false,
            address: action.address
        }
    }),
    on(AddressActionsList.loadAddressByIdFailure, (state, action) => {
        return {
            ...state,
            loading: false,
            error: action.error
        }
    })
)


