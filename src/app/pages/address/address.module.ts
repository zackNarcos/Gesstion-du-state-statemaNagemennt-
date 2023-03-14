import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AddressRoutingModule} from './address-routing.module';
import {AddressFormComponent} from './address-form/address-form.component';
import {AddressListComponent} from './address-list/address-list.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MetaReducer, StoreModule} from "@ngrx/store";
import {addressReducers} from "../../store/reducers/address.reducer";
import {EffectsModule} from "@ngrx/effects";
import {AddressService} from "../../shareds/services/api/address.service";
import {AddressEffects} from "../../store/effects/address.effects";
import {errorReducer} from "../../store/reducers/meta.reducer";

const metaReducers : MetaReducer<any>[] = [errorReducer];

@NgModule({
    declarations: [
        AddressFormComponent,
        AddressListComponent
    ],
    imports: [
        CommonModule,
        AddressRoutingModule,
        ReactiveFormsModule,
        StoreModule.forFeature('addresses', addressReducers, {metaReducers} ),
        EffectsModule.forFeature([AddressEffects])
    ],
    providers: [AddressService]
})
export class AddressModule {
}
