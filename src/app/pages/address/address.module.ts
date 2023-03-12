import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressRoutingModule } from './address-routing.module';
import { AddressFormComponent } from './address-form/address-form.component';
import { AddressListComponent } from './address-list/address-list.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AddressFormComponent,
    AddressListComponent
  ],
  imports: [
    CommonModule,
    AddressRoutingModule,
    ReactiveFormsModule
  ]
})
export class AddressModule { }
