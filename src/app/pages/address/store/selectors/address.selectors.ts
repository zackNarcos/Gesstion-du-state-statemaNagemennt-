import {createFeatureSelector, createSelector} from "@ngrx/store";
import {addressAdapter, AddressStateInterface} from "../reducer/address.reducer";

// 1. Create a feature selector
export const selectAddressState = createFeatureSelector<AddressStateInterface>('addresses');

// 2. Create a selector for each "branch" of the state
const {selectAll, selectEntities, selectTotal} = addressAdapter.getSelectors();


export const selectAddresses = createSelector(
    selectAddressState, selectAll,
)

export const selectAddress = createSelector(
    selectAddressState,
    (state: AddressStateInterface) => state.address
)

export const selectAddressLoading = createSelector(
    selectAddressState,
    (state: AddressStateInterface) => state.loading
)

export const selectAddressError = createSelector(
    selectAddressState,
    (state: AddressStateInterface) => state.error
)


//export selectors
export const addressSelectors = {
    selectAddresses,
    selectAddress,
    selectAddressLoading,
    selectAddressError
}