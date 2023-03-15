import { Component, OnInit} from '@angular/core';
import {NotiflixService} from "../../../shareds/services/notiflix.service";
import {Confirm} from "notiflix/build/notiflix-confirm-aio";
import {Observable} from "rxjs";
import {Address} from "../../../shareds/models/address";
import {Select, Store} from "@ngxs/store";
import {AddressState} from "../store/states/address.state";
import {AddressAction} from "../store/actions/address.action";

@Component({
    selector: 'app-address-list',
    templateUrl: './address-list.component.html',
    styleUrls: ['./address-list.component.scss'],
})
export class AddressListComponent implements OnInit {
    @Select(AddressState.getAddresses) addresses$: Observable<Address[]>

    constructor(
        private notiflixService: NotiflixService,
        private store: Store,
    ) {
    }

    ngOnInit() {
        this.store.dispatch(new AddressAction.FetchAll())
    }


    deleteAddress(id: number) {
        Confirm.show(
            'Delete Address',
            'Are you sure you want to delete this address?',
            'Yes',
            'No',
            () => {
                this.store.dispatch(new AddressAction.Delete(id)).subscribe({
                    next:(data) => {
                        this.notiflixService.failure('Address deleted')
                    },
                    error: () => {
                        this.notiflixService.warning('Address not deleted')
                    }
                })
            },
            () => {this.notiflixService.warning('Operation canceled');},{
        },);
    }
}
