import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Address} from "../../../../shareds/models/address";
import {NotiflixService} from "../../../../shareds/services/notiflix.service";
import {AddressFacade} from "../../store/facade/address.facade";

@Component({
    selector: 'app-address-form',
    templateUrl: './address-form.component.html',
    styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {

    addAddressForm: FormGroup
    addressId: number = null;
    selectedAddress: Address = null;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private notiflixService: NotiflixService,
        private addressFacade: AddressFacade,
    ) {
    }

    ngOnInit() {
        // Create the form group and form controls when the component is initialized
        this.addAddressForm = new FormGroup({
            firstName: new FormControl('', [Validators.required]),
            lastName: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required]),
            address: new FormControl('', [Validators.required]),
            country: new FormControl('', [Validators.required]),
            state: new FormControl('', [Validators.required]),
            zip: new FormControl('', [Validators.required]),
        });

        // Get the address id from the route if it exists
        this.route.params.subscribe(params => {
            this.addressId = params['id'];
            if (this.addressId) {
                this.addressFacade.getAddress(this.addressId)
                this.addressFacade.address$.subscribe({
                    next: (address: Address) => {
                        this.selectedAddress = address
                        this.addAddressForm.patchValue(address)
                    },
                    error: (error) => {
                        this.notiflixService.failure(`Failled to load address: ${this.addressId}`)
                        this.router.navigateByUrl('/addresses')
                    }
                });
            }
        });

    }


    submitForm() {
        if (this.addressId != null) {
            let address: Address = this.addAddressForm.value
            address.id = this.addressId
            this.addressFacade.updateAddress(address)
            this.notiflixService.success(`Address: ${this.addAddressForm.value.address} added`)
            this.addAddressForm.reset()
            this.router.navigateByUrl('/addresses')

        } else {
            //when is new address
            let address: Address = this.addAddressForm.value
            this.addressFacade.createAddress(address)
            this.notiflixService.success(`Address: ${this.addAddressForm.value.address} added`)
            this.addAddressForm.reset()
            this.router.navigateByUrl('/addresses')
        }
    }


    /**
     * @description Get the validation class for the form control
     * @param controlName
     */
    getValidationClass(controlName: string): string {
        const control = this.addAddressForm.get(controlName);
        return !control.valid && control.touched ? 'is-invalid' : '';
    }

}
