import {Component, OnInit} from '@angular/core';
import {NotiflixService} from "../../../shareds/services/notiflix.service";
import {Confirm} from "notiflix/build/notiflix-confirm-aio";

@Component({
    selector: 'app-address-list',
    templateUrl: './address-list.component.html',
    styleUrls: ['./address-list.component.scss']
})
export class AddressListComponent implements OnInit {

    constructor(private notiflixService: NotiflixService) {
    }

    ngOnInit() {
    }


    deleteAddress(number: number) {
        Confirm.show(
            'Delete Address',
            'Are you sure you want to delete this address?',
            'Yes',
            'No',
            () => {this.notiflixService.success('Address deleted');},
            () => {this.notiflixService.success('Operation canceled');},{
        },);
    }
}
