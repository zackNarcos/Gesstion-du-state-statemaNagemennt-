import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule, routes} from './app-routing.module';
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
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EffectsModule} from "@ngrx/effects";
import {cartReducers} from "./store/reducers/cart.reducer";
import {productReducers} from "./store/reducers/product.reducer";
import {ProductEffects} from "./store/effects/product.effects";
import {EntityDataModule} from '@ngrx/data';
import {entityConfig} from "./pages/address/store/data/entity-metadata";
import {routerReducer, StoreRouterConnectingModule} from "@ngrx/router-store";
import {CustomSerializer} from "./store/store-route/custom.serializer";
import {RouterModule} from "@angular/router";
import {productFormReducer} from "./store/reducers/product-form.reducer";


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
                products: productReducers,
                productForm: productFormReducer,
                router: routerReducer,
            }
        ),
        EffectsModule.forRoot([ProductEffects]),
        StoreDevtoolsModule.instrument(
            {
                maxAge: 25, // Retains last 25 states
                logOnly: false, // Restrict extension to log-only mode
                trace: true // Trace changes over time
                //allow to change page in devtools

            }
        ),

        RouterModule.forRoot(routes),
        StoreRouterConnectingModule.forRoot({
            serializer: CustomSerializer,
        }),
        EntityDataModule.forRoot(entityConfig),

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
