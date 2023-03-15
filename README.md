# NGXS Library Implementation Documentation
This documentation describes the implementation of the NGXS library.

Introduction
The NGXS library is a state management library for Angular. It allows to store the state of the application in a data tree and to update it in a reactive way. This library is widely used for UI state management.
## Installation
To install the NGXS library, you must first install the following dependencies:

`npm install -g @angular/cli`

`cd stateManagement`

`npm install`

Angular 6 or higher

RxJS 6 or higher

Then you can install NGXS using npm :

`npm install --save @ngxs/store`
## Starting servers (Angular server | json server)

`npm start`

## More information 
    we have two store in this project:
> - global store  
>  - states:
>    - [cart.state.ts](src/app/store/states/cart.state.ts)
>    - [product.state.ts](src/app/store/states/product.state.ts)
>  - actions:
>    - [cart.action.ts](src/app/store/actions/cart.action.ts)
>    - [product.action.ts](src/app/store/actions/product.action.ts)

> - Addresses store (_***lazyloading***_)
>   - states:
>     - [product.state.ts](src/app/pages/address/store/states/address.state.ts)
>   - actions:
>     - [product.action.ts](src/app/pages/address/store/.action.ts)

# Redux Devtools 
### Installation 
`npm install @ngxs/router-plugin --save`

### Configuration 
```ts
import { NgxsModule } from '@ngxs/store';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';

@NgModule({
  imports: [NgxsModule.forRoot([]), NgxsRouterPluginModule.forRoot()]
})
export class AppModule {}
```

# Global Store 
### Configuration 

To use NGXS in our application, we first added the NGXS module in our [AppModule](src/app/app.module.ts) :

```ts
import {NgxsModule} from '@ngxs/store';
import {NgModule} from '@angular/core';
import {ProductsState} from "./product.state";

@NgModule({
    imports: [
        //...
        NgxsModule.forRoot([
            ProductsState
        ]), {
            developmentMode: !environment.production
        }
    ]
})
export class AppModule {
}
```
# Web Socket (implement in cart)
>Bind server web socket events to Ngxs store actions.

### Installation
`npm install @ngxs/websocket-plugin --save`

### Configuration

Add the NgxsWebsocketPluginModule plugin to your root app module:

```ts
import { NgxsModule } from '@ngxs/store';
import { NgxsWebsocketPluginModule } from '@ngxs/websocket-plugin';

@NgModule({
  imports: [
    NgxsModule.forRoot([]),
    NgxsWebsocketPluginModule.forRoot({
      url: 'ws://localhost:4200' //Url of the web socket connection
    })
  ]
})
export class AppModule {}
 ```

### - Create [cartService](src/app/shareds/services/cart.service.ts) 
    To manage shopping cart actions and communicate them via the WebSocket
