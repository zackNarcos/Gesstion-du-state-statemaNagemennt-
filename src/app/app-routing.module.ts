import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ProductComponent} from "./pages/product/product.component";
import {CartComponent} from "./pages/cart/cart.component";
import {AddProductComponent} from "./pages/add-product/add-product.component";

const routes: Routes = [
    // routes without lazy loading
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'product/:id',
        component: ProductComponent
    },
    {
        path: 'cart',
        component: CartComponent
    },
    {
        path: 'products/add',
        component: AddProductComponent
    },

    //routes with lazy loading
    {
        path: 'addresses',
        loadChildren: () => import('./pages/address/address.module').then(m => m.AddressModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
