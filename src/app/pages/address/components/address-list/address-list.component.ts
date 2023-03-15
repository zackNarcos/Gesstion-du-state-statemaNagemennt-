import {Component, OnInit} from '@angular/core';
import {NotiflixService} from "../../../../shareds/services/notiflix.service";
import {Confirm} from "notiflix/build/notiflix-confirm-aio";
import {AddressService} from "../../../../shareds/services/api/address.service";
import {Observable} from "rxjs";
import {Address} from "../../../../shareds/models/address";
import {AddressFacade} from "../../store/facade/address.facade";

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
        private addressFacade: AddressFacade,
    ) {
        this.isLoading$ = this.addressFacade.isLoading$;
        this.error$ = this.addressFacade.error$;
        this.addresses$ = this.addressFacade.addresses$;
    }

    ngOnInit() {
        this.addressFacade.getAddresses();

        //make loading and error handling easier
        this.isLoading$.subscribe({
            next: (isLoading) => {
                if (isLoading) {
                    this.notiflixService.loading();
                } else {
                    setTimeout(() => {
                        this.notiflixService.removeLoading();
                    }, 0)

                }
            }
        });

        this.error$.subscribe({
            next: (error) => {
                if (error) {
                    this.notiflixService.failure(error.message);
                } else {
                    this.notiflixService.removeLoading();
                }
            }
        });
    }


    deleteAddress(id: number) {
        Confirm.show(
            'Delete Address',
            'Are you sure you want to delete this address?',
            'Yes',
            'No',
            () => {
                this.addressFacade.deleteAddress(id);
            },
            () => {
                this.notiflixService.warning('Operation canceled');
            }, {},);
    }
}
