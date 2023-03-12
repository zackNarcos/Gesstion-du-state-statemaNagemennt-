import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-address-form',
    templateUrl: './address-form.component.html',
    styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {

    constructor(private route : ActivatedRoute) {}

    addAddressForm: FormGroup
    addressId: number = null;
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
        });

    }


    submitForm() {
        if (this.addAddressForm.valid) {
            //when is edit address
            console.log(this.addAddressForm.value);
        }else{
            //when is new address
            console.log(this.addAddressForm.value);
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
