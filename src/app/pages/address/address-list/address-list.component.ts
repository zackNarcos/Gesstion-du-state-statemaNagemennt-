import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {NotiflixService} from "../../../shareds/services/notiflix.service";
import {Confirm} from "notiflix/build/notiflix-confirm-aio";
import {AddressService} from "../../../shareds/services/api/address.service";
import {Observable} from "rxjs";
import {Address} from "../../../shareds/models/address";

@Component({
    selector: 'app-address-list',
    templateUrl: './address-list.component.html',
    styleUrls: ['./address-list.component.scss'],
})
export class AddressListComponent implements OnInit {
    addresses$: Observable<Address[]>

    constructor(
        private notiflixService: NotiflixService,
        private addressService: AddressService
    ) {
    }

    ngOnInit() {
        this.addresses$ = this.addressService.getAddresses()
    }


    deleteAddress(id: string) {
        Confirm.show(
            'Delete Address',
            'Are you sure you want to delete this address?',
            'Yes',
            'No',
            () => {
                this.addressService.deleteAddress(id).subscribe(()=>{
                    this.notiflixService.failure('Address deleted')
                    this.addresses$ = this.addressService.getAddresses()
                },error => {
                    this.notiflixService.warning('Address not deleted')
                })
            },
            () => {this.notiflixService.warning('Operation canceled');},{
        },);
    }
}
