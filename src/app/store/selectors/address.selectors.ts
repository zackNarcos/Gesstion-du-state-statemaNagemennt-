import { createSelector} from "@ngrx/store";
import {AddressStateInterface, AppStateInterface} from "../app.state.interface";
const selectFeature = (state: AppStateInterface) => state.addresses;

export const selectAddresses = createSelector(
    selectFeature,
    (state: AddressStateInterface) => state.addresses
)

export const selectAddress = createSelector(
    selectFeature,
    (state: AddressStateInterface) => state.address
)

export const selectAddressLoading = createSelector(
    selectFeature,
    (state: AddressStateInterface) => state.loading
)

export const selectAddressError = createSelector(
    selectFeature,
    (state: AddressStateInterface) => state.error
)


//export selectors
export const addressSelectors = {
    selectAddresses,
    selectAddress,
    selectAddressLoading,
    selectAddressError
}