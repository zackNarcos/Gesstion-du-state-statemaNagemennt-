import {NgModule} from '@angular/core';
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
import {MetaReducer, StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EffectsModule} from "@ngrx/effects";
import {cartReducers} from "./store/reducers/cart.reducer";
import {productReducers} from "./store/reducers/product.reducer";
import {ProductEffects} from "./store/effects/product.effects";
import {errorReducer} from "./store/reducers/meta.reducer";
import {AppStateInterface} from "./store/app.state.interface";

const metaReducers: MetaReducer<AppStateInterface>[] = [errorReducer];

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
        StoreModule.forRoot({
                cart: cartReducers,
                products: productReducers
            },
            {
                metaReducers
            }
        ),
        EffectsModule.forRoot([ProductEffects]),
        StoreDevtoolsModule.instrument(
            {
                maxAge: 25, // Retains last 25 states
            }
        )
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
