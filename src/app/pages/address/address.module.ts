import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressRoutingModule } from './address-routing.module';
import { AddressFormComponent } from './address-form/address-form.component';
import { AddressListComponent } from './address-list/address-list.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NgxsModule} from "@ngxs/store";
import {AddressState} from "./store/states/address.state";


@NgModule({
  declarations: [
    AddressFormComponent,
    AddressListComponent
  ],
  imports: [
    CommonModule,
    AddressRoutingModule,
    ReactiveFormsModule,
    NgxsModule.forFeature([AddressState]),
  ]
})
export class AddressModule { }
