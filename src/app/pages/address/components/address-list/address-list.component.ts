import {Component, OnInit} from '@angular/core';
import {NotiflixService} from "../../../../shareds/services/notiflix.service";
import {Confirm} from "notiflix/build/notiflix-confirm-aio";
import {Observable} from "rxjs";
import {Address} from "../../../../shareds/models/address";
import {AddressRepository} from "../../state/address.repository";
import {AddressService} from "../../../../shareds/services/api/address.service";

@Component({
    selector: 'app-address-list',
    templateUrl: './address-list.component.html',
    styleUrls: ['./address-list.component.scss'],
})
export class AddressListComponent implements OnInit {
    addresses$: Observable<Address[]> = this.addressRepo.addresses$;

    constructor(
        private notiflixService: NotiflixService,
        private addressRepo: AddressRepository,
        private addressService: AddressService
    ) {
    }

    ngOnInit() {
        this.addresses$ = this.addressService.getAddresses()
    }


    deleteAddress(id: number) {
        Confirm.show(
            'Delete Address',
            'Are you sure you want to delete this address?',
            'Yes',
            'No',
            () => {
                this.addressService.deleteAddress(id).subscribe(() => {
                    this.notiflixService.failure('Address deleted')
                    this.addresses$ = this.addressService.getAddresses()
                }, error => {
                    this.notiflixService.warning('Address not deleted')
                })
            },
            () => {
                this.notiflixService.warning('Operation canceled');
            }, {},);
    }
}
