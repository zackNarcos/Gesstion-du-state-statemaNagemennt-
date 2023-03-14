import {ActionReducerMap, createReducer, on} from "@ngrx/store";
import {AddressActionsList} from "../actions/address.actions";
import {AddressStateInterface, AppStateInterface} from "../app.state.interface";
import {errorReducer} from "./meta.reducer";

export const initialState: AddressStateInterface = {
    addresses: [],
    loading: false,
    error: null,
    address: null
}



 export  const addressReducers = createReducer(

    initialState,

    /**
     * [loadAddress, loadAddressSuccess, loadAddressFailure actions]
     * @description : load addreses from server, if success, update state, if failure, update error
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
        return {
            ...state,
            loading: false,
            addresses: action.addresses
        }
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
     * @description : create addreses from server, if success, update state, if failure, update error
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
        return {
            ...state,
            loading: false,
            addresses: [...state.addresses, action.address]
        }
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
        return {
            ...state,
            loading: false,
            addresses: state.addresses.map(address => {
                if (address.id === action.address.id) {
                    return action.address;
                }
                return address;
            })
        }
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
        return {
            ...state,
            loading: false,
            addresses: state.addresses.filter(address => address.id !== action.addressId)
        }
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


