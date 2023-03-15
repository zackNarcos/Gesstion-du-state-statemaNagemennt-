import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HomeComponent} from './pages/home/home.component';
import {ProductCardComponent} from './components/product-card/product-card.component';
import {HeaderComponent} from './components/header/header.component';
import {ProductComponent} from './pages/product/product.component';
import {CartComponent} from './pages/cart/cart.component';
import {HttpClientModule} from "@angular/common/http";
import {AddProductComponent} from './pages/add-product/add-product.component';
import {FooterComponent} from './components/footer/footer.component';


import {Actions, EffectsNgModule} from '@ngneat/effects-ng';
import {devTools} from '@ngneat/elf-devtools';

export function initElfDevTools(actions: Actions) {
    return () => {
        devTools({
            name: 'Sample Application',
            actionsDispatcher: actions
        })
    };
}

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ProductCardComponent,
        HeaderComponent,
        ProductComponent,
        CartComponent,
        AddProductComponent,
        FooterComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        // other modules
        EffectsNgModule.forRoot([]),
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            multi: true,
            useFactory: initElfDevTools,
            deps: [Actions]
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
