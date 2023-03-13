import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AddressService} from "../../../shareds/services/api/address.service";
import {Address} from "../../../shareds/models/address";
import {NotiflixService} from "../../../shareds/services/notiflix.service";

@Component({
    selector: 'app-address-form',
    templateUrl: './address-form.component.html',
    styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {

    constructor(
        private route : ActivatedRoute,
        private router: Router,
        private addressService: AddressService,
        private notiflixService: NotiflixService
        ) {}

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
            if (this.addressId){
                this.addressService.getAddress(this.addressId).subscribe({
                    next:(data)=>{
                        this.addAddressForm.patchValue(data)
                    },
                    error:()=>{
                        this.notiflixService.failure("Address not found")
                        this.router.navigateByUrl('/addresses')
                }
                })
            }
        });

    }


    submitForm() {
        if (this.addressId != null) {
            this.addressService.updateAddress(this.addressId, this.addAddressForm.value).subscribe({
                next: (data)=>{
                    this.notiflixService.success(`Address: ${this.addAddressForm.value.address} added`)
                    this.addAddressForm.reset()
                    this.router.navigateByUrl('/addresses')
                },
                error:()=> {
                this.notiflixService.failure(`Failled to add address: ${this.addAddressForm.value.address}`)
            }
            })

        }else{
            //when is new address
            let address: Address =  this.addAddressForm.value
            this.addressService.addAddress(address).subscribe(()=>{
                this.notiflixService.success(`Address: ${this.addAddressForm.value.address} added`)
                this.addAddressForm.reset()
                this.router.navigateByUrl('/addresses')
                },
                error => {
                this.notiflixService.failure(`Failled to add address: ${this.addAddressForm.value.address}`)
            })
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
