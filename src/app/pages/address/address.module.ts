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
import {ForModule} from "@rx-angular/template/for";
import {IfModule} from "@rx-angular/template/if";

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
        ForModule,
        IfModule,
    ],
    providers: [AddressService, AddressFacade]
})
export class AddressModule {
}
