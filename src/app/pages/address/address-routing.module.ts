import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddressListComponent} from "./address-list/address-list.component";
import {AddressFormComponent} from "./address-form/address-form.component";

const routes: Routes = [
    {
        path: '',
        component: AddressListComponent,
    },
    {
        path: 'new',
        component: AddressFormComponent,
    },
    {
        path: ':id/edit',
        component: AddressFormComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddressRoutingModule {
}
