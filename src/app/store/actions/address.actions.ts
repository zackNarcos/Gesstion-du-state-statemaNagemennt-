import {createAction, props} from "@ngrx/store";
import {Address} from "../../shareds/models/address";

 enum AddressActions  {
    CREATE_ADDRESS = '[Address Form Page] Create Address when submit form',
    CREATE_ADDRESS_SUCCESS = '[Address List Page] Create Address Success',
    CREATE_ADDRESS_FAILURE = '[Address List Page] Create Address Failure',


    UPDATE_ADDRESS = '[Address Form Page] Update Address when submit form',
    UPDATE_ADDRESS_SUCCESS = '[Address List Page] Update Address Success',
    UPDATE_ADDRESS_FAILURE = '[Address List Page] Update Address Failure',


    DELETE_ADDRESS = '[Address List Page] Delete Address from api when click delete button',
    DELETE_ADDRESS_SUCCESS = '[Address List Page] Delete Address Success',
    DELETE_ADDRESS_FAILURE = '[Address List Page] Delete Address Failure',

    LOAD_ADDRESSES = '[Address List Page] Load Addresses when page load from api',
    LOAD_ADDRESSES_SUCCESS = '[Address List Page] Load Addresses Success',
    LOAD_ADDRESSES_FAILURE = '[Address List Page] Load Addresses Failure',

    LOAD_ADDRESS_BY_ID = '[Address List Page] Load Address By Id when click edit button from api',
    LOAD_ADDRESS_BY_ID_SUCCESS = '[Address List Page] Load Address By Id Success',
    LOAD_ADDRESS_BY_ID_FAILURE = '[Address List Page] Load Address By Id Failure',

}

//create actions for create, update, delete, load, load by id
export const createAddress = createAction(
    AddressActions.CREATE_ADDRESS,
    props<{ address: Address }>()
)

export const createAddressSuccess = createAction(
    AddressActions.CREATE_ADDRESS_SUCCESS,
    props<{ address: Address }>()
)

export const createAddressFailure = createAction(
    AddressActions.CREATE_ADDRESS_FAILURE,
    props<{ error: any }>()
)

export const updateAddress = createAction(
    AddressActions.UPDATE_ADDRESS,
    props<{ address: Address }>()
)

export const updateAddressSuccess = createAction(
    AddressActions.UPDATE_ADDRESS_SUCCESS,
    props<{ address: Address }>()
)

export const updateAddressFailure = createAction(
    AddressActions.UPDATE_ADDRESS_FAILURE,
    props<{ error: any }>()
)

export const deleteAddress = createAction(
    AddressActions.DELETE_ADDRESS,
    props<{ addressId: number }>()
)

export const deleteAddressSuccess = createAction(
    AddressActions.DELETE_ADDRESS_SUCCESS,
    props<{ addressId: number }>()
)

export const deleteAddressFailure = createAction(
    AddressActions.DELETE_ADDRESS_FAILURE,
    props<{ error: any }>()
)

export const loadAddresses = createAction(
    AddressActions.LOAD_ADDRESSES
)

export const loadAddressesSuccess = createAction(
    AddressActions.LOAD_ADDRESSES_SUCCESS,
    props<{ addresses: Address[] }>()
)

export const loadAddressesFailure = createAction(
    AddressActions.LOAD_ADDRESSES_FAILURE,
    props<{ error: any }>()
)

export const loadAddressById = createAction(
    AddressActions.LOAD_ADDRESS_BY_ID,
    props<{ addressId: number }>()
)

export const loadAddressByIdSuccess = createAction(
    AddressActions.LOAD_ADDRESS_BY_ID_SUCCESS,
    props<{ address: Address }>()
)

export const loadAddressByIdFailure = createAction(
    AddressActions.LOAD_ADDRESS_BY_ID_FAILURE,
    props<{ error: any }>()
)

//export all actions
export const AddressActionsList = {
    createAddress,
    createAddressSuccess,
    createAddressFailure,

    updateAddress,
    updateAddressSuccess,
    updateAddressFailure,

    deleteAddress,
    deleteAddressSuccess,
    deleteAddressFailure,

    loadAddresses,
    loadAddressesSuccess,
    loadAddressesFailure,

    loadAddressById,
    loadAddressByIdSuccess,
    loadAddressByIdFailure,
}
