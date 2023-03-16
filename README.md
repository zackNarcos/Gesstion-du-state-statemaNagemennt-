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

> - Addresses store (_***lazy-loading***_)
>   - states:
>     - [product.state.ts](src/app/pages/address/store/states/address.state.ts)
>   - actions:
>     - [product.action.ts](src/app/pages/address/store/.action.ts)

# How it works
## 1. Configuration
### Global Store 

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

### Address Store

To use NGXS in our application, we first added the NGXS module in our [AppModule](src/app/app.module.ts) :

```ts
import {NgxsModule} from '@ngxs/store';
import {NgModule} from '@angular/core';
@NgModule({
    declarations: [
        AddressFormComponent,
        AddressListComponent
    ],
    imports: [
        CommonModule,
        AddressRoutingModule,
        ReactiveFormsModule,
        NgxsModule.forFeature([AddressState]),
    ]
})
export class AddressModule { }
```

# 2. create States
```ts
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Product} from '../models/product.model';
import {AddProduct, GetProducts, RemoveAllProducts, RemoveProduct} from './product.action';

export class ProductStateModel {
    products: Product[];
}

@State<ProductStateModel>({
    name: 'products',
    defaults: {
        products: []
    }
})
export class ProductState {
    @Selector()
    static getProducts(state: ProductStateModel) {
        return state.products;
    }

    @Action(GetProducts)
    get({getState, patchState}: StateContext<ProductStateModel>) {
        return this.productService.getProducts().subscribe((result: Product[]) => {
            const state = getState();
            patchState({
                ...state,
                products: result
            });
        });
    }

    @Action(AddProduct)
    add({getState, patchState}: StateContext<ProductStateModel>, {payload}: AddProduct) {
        return this.productService.addProduct(payload).subscribe(() => {
            const state = getState();
            patchState({
                ...state,
                products: [...state.products, payload]
            });
        });
    }

    @Action(RemoveProduct)
    remove({getState, patchState}: StateContext<ProductStateModel>, {payload}: RemoveProduct) {
        return this.productService.deleteProduct(payload).subscribe(() => {
            patchState({
                products: getState().products.filter(a => a.id !== payload)
            });
        });
    }

    @Action(RemoveAllProducts)
    removeAll({patchState}: StateContext<ProductStateModel>) {
        return this.productService.deleteAllProducts().subscribe(() => {
            patchState({
                products: []
            });
        });
    }

    constructor(private productService: ProductService) {
    }
}
```
# 3. create Actions
```ts
import {Product} from '../models/product.model';

export class GetProducts {
    static readonly type = '[Product] Get';
}

export class AddProduct {
    static readonly type = '[Product] Add';

    constructor(public payload: Product) {
    }
}

export class RemoveProduct {
    static readonly type = '[Product] Remove';

    constructor(public payload: number) {
    }
}

export class RemoveAllProducts {
    static readonly type = '[Product] Remove All';
}
```
# 4. create Store
a. declare state model
```ts
export interface ProductStateModel {
    products: Product[];
    selectedProduct: Product
}

```
b. declare initial state
```ts
export const initialState: ProductStateModel = {
    products: [],
    selectedProduct: null
};
```
c. create state
```ts
@State<ProductStateModel>({
    name: 'products',
    defaults: initialState
})
export class ProductState {
    constructor(private productService: ProductService) {
    }

    @Selector()
    static getProducts(state: ProductStateModel) {
        return state.products;
    }

    @Selector()
    static getSelectedProduct(state: ProductStateModel) {
        return state.selectedProduct;
    }

    @Action(GetProducts)
    get({getState, patchState}: StateContext<ProductStateModel>) {
        return this.productService.getProducts().subscribe((result: Product[]) => {
            const state = getState();
            patchState({
                ...state,
                products: result
            });
        });
    }

    @Action(AddProduct)
    add({getState, patchState}: StateContext<ProductStateModel>, {payload}: AddProduct) {
        return this.productService.addProduct(payload).subscribe(() => {
            const state = getState();
            patchState({
                ...state,
                products: [...state.products, payload]
            });
        });
    }

    @Action(RemoveProduct)
    remove({getState, patchState}: StateContext<ProductStateModel>, {payload}: RemoveProduct) {
        return this.productService.deleteProduct(payload).subscribe(() => {
            patchState({
                products: getState().products.filter(a => a.id !== payload)
            });
        });
    }

    @Action(RemoveAllProducts)
    removeAll({patchState}: StateContext<ProductStateModel>) {
        return this.productService.deleteAllProducts().subscribe(() => {
            patchState({
                products: []
            });
        });
    }

    @Action(SelectProduct)
    select({getState, patchState}: StateContext<ProductStateModel>, {payload}: SelectProduct) {
        patchState({
            selectedProduct: payload
        });
    }
}
```
# 5. create Store (***in this project, we use store in component***)
```ts
import {Injectable} from '@angular/core';
import {Store} from '@ngxs/store';
import {Product} from '../models/product.model';
import {AddProduct, GetProducts, RemoveAllProducts, RemoveProduct, SelectProduct} from './product.action';

@Injectable({
    providedIn: 'root'
})
export class ProductStore {
    constructor(private store: Store) {
    }

    getProducts() {
        this.store.dispatch(new GetProducts());
    }

    addProduct(product: Product) {
        this.store.dispatch(new AddProduct(product));
    }

    removeProduct(id: number) {
        this.store.dispatch(new RemoveProduct(id));
    }

    removeAllProducts() {
        this.store.dispatch(new RemoveAllProducts());
    }

    selectProduct(product: Product) {
        this.store.dispatch(new SelectProduct(product));
    }
}
```
# 6. use store in component

```ts
import values from "ajv/lib/vocabularies/jtd/values";

constructor(private
store: Store
)
{
    this.store.getProducts();
}

ngOnInit()
:
void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.store.dispatch(new ProductAction.SetSelected(this.id)).subscribe({
        next: (data) => {
            this.store.select(ProductsState.getSelectedProduct).subscribe({
                next: data => {
                    this.product = data
                }
            })
        },
        error: () => {
            this.notiflixService.failure("Product not found")
            this.router.navigateByUrl('/')
        }
    })
}

addToCart(value: string){
    this.cartService.addItem(this.product, parseInt(value))
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
