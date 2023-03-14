import {Component, OnInit} from '@angular/core';
import {NotiflixService} from "../../../shareds/services/notiflix.service";
import {Confirm} from "notiflix/build/notiflix-confirm-aio";
import {AddressService} from "../../../shareds/services/api/address.service";
import {Observable, take} from "rxjs";
import {Address} from "../../../shareds/models/address";
import {select, Store} from "@ngrx/store";
import {AddressActionsList} from "../../../store/actions/address.actions";
import {addressSelectors} from "../../../store/selectors/address.selectors";
import {AppStateInterface} from "../../../store/app.state.interface";

@Component({
    selector: 'app-address-list',
    templateUrl: './address-list.component.html',
    styleUrls: ['./address-list.component.scss'],
})
export class AddressListComponent implements OnInit {
    addresses$: Observable<Address[]>;
    isLoading$: Observable<boolean>;
    error$: Observable<any>;

    constructor(
        private notiflixService: NotiflixService,
        private addressService: AddressService,
        private store: Store<AppStateInterface>
    ) {
        this.isLoading$ = this.store.pipe(select(addressSelectors.selectAddressLoading));
        this.error$ = this.store.pipe(select(addressSelectors.selectAddressError));
        this.addresses$ = this.store.pipe(select(addressSelectors.selectAddresses));
    }

    ngOnInit() {
        this.store.dispatch(AddressActionsList.loadAddresses())
    }


    deleteAddress(id: number) {
        Confirm.show(
            'Delete Address',
            'Are you sure you want to delete this address?',
            'Yes',
            'No',
            () => {
                this.store.dispatch(AddressActionsList.deleteAddress({addressId: id}));
            },
            () => {
                this.notiflixService.warning('Operation canceled');
            }, {},);
    }
}
