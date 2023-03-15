import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AddressRoutingModule} from './address-routing.module';
import {AddressFormComponent} from './components/address-form/address-form.component';
import {AddressListComponent} from './components/address-list/address-list.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MetaReducer, StoreModule} from "@ngrx/store";
import {addressReducers} from "./store/reducer/address.reducer";
import {EffectsModule} from "@ngrx/effects";
import {AddressService} from "../../shareds/services/api/address.service";
import {AddressEffects} from "./store/effects/address.effects";
import {errorReducer} from "../../store/reducers/meta.reducer";
import {AddressFacade} from "./store/facade/address.facade";

const metaReducers: MetaReducer<any>[] = [errorReducer];

@NgModule({
    declarations: [
        AddressFormComponent,
        AddressListComponent
    ],
    imports: [
        CommonModule,
        AddressRoutingModule,
        ReactiveFormsModule,
        StoreModule.forFeature('addresses', addressReducers, {metaReducers}),
        EffectsModule.forFeature([AddressEffects]),
    ],
    providers: [AddressService, AddressFacade]
})
export class AddressModule {
}
