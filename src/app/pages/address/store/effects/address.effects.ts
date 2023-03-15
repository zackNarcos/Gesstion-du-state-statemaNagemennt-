import {Actions, createEffect, ofType} from "@ngrx/effects";
import {AddressService} from "../../../../shareds/services/api/address.service";
import {AddressActionsList} from "../actions/address.actions";
import {catchError, map, mergeMap, switchMap} from "rxjs/operators";
import {of} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class AddressEffects {
    loadAddresses$ = createEffect(
        () => this.actions$.pipe(
            ofType(AddressActionsList.loadAddresses),
            switchMap(() => this.addressService.getAddresses()
                .pipe(
                    map(addresses => AddressActionsList.loadAddressesSuccess({addresses})),
                    catchError(error => of(AddressActionsList.loadAddressesFailure({error})))
                ))
        )
    );
    createAddress$ = createEffect(
        () => this.actions$.pipe(
            ofType(AddressActionsList.createAddress),
            mergeMap((action) => this.addressService.addAddress(action.address)
                .pipe(
                    map(address => AddressActionsList.createAddressSuccess({address})),
                    catchError(error => of(AddressActionsList.createAddressFailure({error})))
                ))
        )
    );
    deleteAddress$ = createEffect(
        () => this.actions$.pipe(
            ofType(AddressActionsList.deleteAddress),
            mergeMap((action) => this.addressService.deleteAddress(action.addressId)
                .pipe(
                    map(() => AddressActionsList.deleteAddressSuccess({addressId: action.addressId})),
                    catchError(error => of(AddressActionsList.deleteAddressFailure({error})))
                ))
        )
    );
    updateAddress$ = createEffect(
        () => this.actions$.pipe(
            ofType(AddressActionsList.updateAddress),
            mergeMap((action) => this.addressService.updateAddress(action.address)
                .pipe(
                    map(address => AddressActionsList.updateAddressSuccess({address})),
                    catchError(error => of(AddressActionsList.updateAddressFailure({error})))
                ))
        )
    );
    loadAddressById$ = createEffect(
        () => this.actions$.pipe(
            ofType(AddressActionsList.loadAddressById),
            mergeMap((action) => this.addressService.getAddress(action.addressId)
                .pipe(
                    map(address => AddressActionsList.loadAddressByIdSuccess({address})),
                    catchError(error => of(AddressActionsList.loadAddressByIdFailure({error})))
                ))
        )
    );

    constructor(
        private actions$: Actions,
        private addressService: AddressService
    ) {
    }


}