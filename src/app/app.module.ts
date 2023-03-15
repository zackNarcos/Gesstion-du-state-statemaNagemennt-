import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './pages/home/home.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './pages/product/product.component';
import { CartComponent } from './pages/cart/cart.component';
import {HttpClientModule} from "@angular/common/http";
import { AddProductComponent } from './pages/add-product/add-product.component';
import { FooterComponent } from './components/footer/footer.component';
import {NgxsModule} from "@ngxs/store";
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import {ProductsState} from "./store/states/product.state";
import {CartsState} from "./store/states/cart.state";
import {NgxsRouterPluginModule} from "@ngxs/router-plugin";
import {NgxsWebsocketPluginModule} from "@ngxs/websocket-plugin";
import {WebSocketModule} from "./shareds/web-socket/web-socket.module";

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
    WebSocketModule,
    NgxsModule.forRoot([ProductsState, CartsState]),
    NgxsRouterPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
