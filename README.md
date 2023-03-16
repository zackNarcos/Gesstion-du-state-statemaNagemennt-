# Elf

## Introduction

ELF is an Angular state management library that provides a simple and powerful way to manage state in your Angular applications. With ELF, you can easily create and manage your application's state, and update it in a predictable and efficient manner.

## Getting Started

To get started with ELF, you need to install it using npm. You can do this by running the following command:

`npm install @ngneat/elf --save`

Once you have installed ELF, you can import it into your Angular module like this:

```
import { ElfModule } from '@ngneat/elf';

@NgModule({
  imports: [
    ElfModule.forRoot()
  ]
})
export class AppModule { }

```


## Usage

ELF provides a simple API for creating and managing your application's state. The core concept of ELF is the Store, which is a container for your application's state.

### Creating a Store

To create a Store, you can use the `createStore` function:

```
class AddressProps {
    address: Address | null
}

// creation of our address store with withEntities, withCollectionIds
/**
 * store {
 *     name : address
 *     entities : address[]
 *     collectionsId : []
 * }
 */
const store = createStore(
    {name: 'addresses'},
    // for gerer address
    withEntities<Address>(),
    //for storing address ids
    withProps<AddressProps>({address: null})
);
```

In this example, our store is initialized with an empty `entities` array and a `collectionsId` array. We also specify the initial value of our `address` property using the `withProps` helper.


### Entities

This feature enables the store to act as an entities store. You can think of an `entities` state as a table in a database, where each table represents a flat collection of similar entities. Elf's entities state simplifies the process, giving you everything you need to manage it.

First, you need to install the package by using the CLI command `elf-cli install` and selecting the entities package, or via npm:

```bash
npm i @ngneat/elf-entities
```


### Updating State

To update the state of our address store, we use the `setState` method provided by `@ngneat/elf`.

```
store.setState((state) => ({
  ...state,
  entities: [
    ...state.entities,
    {
      id: '1',
      street: '123 Main St',
      city: 'Springfield',
      state: 'IL',
      zip: '12345',
    },
  ],
  props: {
    ...state.props,
    address: {
      id: '1',
      street: '123 Main St',
      city: 'Springfield',
      state: 'IL',
      zip: '12345',
    },
  },
}));

```


In this example, we are updating the state of our store by adding a new address to the `entities` array and setting the `address` property to the newly added address.

### Selecting State

To select a portion of the state from our address store, we use the `select` method provided by `@ngneat/elf`.

```
const address$ = store.select((state) => state.props.address);

```

In this example, we are selecting the `address` property from our store's state. The `address$` variable is an Observable that emits the current value of the `address` property whenever it changes.

Nb : you can use all the predefined funtions of `withEntities` to `to update`, `slect/query`, `create` new address

[for more infos about entities](https://ngneat.github.io/elf/docs/features/entities-management/entities)

[](https://)

### Some Partners with elf

#### Entity Pattern

The Entity pattern is a design pattern that focuses on managing entities in a domain-driven way. An entity represents a domain object with an identity that remains constant throughout its lifecycle. In the context of state management, an entity is typically represented by an object that has an `id` property.

The Entity pattern in `@ngneat/elf` is implemented using the `withEntities` helper. This helper adds the `entities` and `collectionIds` properties to the store's state, making it easy to manage collections of entities.

#### Feature Pattern

The Feature pattern is a design pattern that focuses on separating an application into smaller, more manageable parts called features. Each feature is responsible for a specific set of functionality within the application.

The Feature pattern in `@ngneat/elf` is implemented using the `createFeature` function. This function creates a feature store that can be combined with other feature stores to create a larger, more complex application state.

Each feature store is independent and contains its own state, actions, and selectors. This makes it easy to separate concerns and create smaller, more focused modules that can be combined to create a larger, more complex application.

#### Facade Pattern

The Facade pattern is a design pattern that provides a simplified interface to a larger and more complex system. It acts as a front-facing interface that simplifies the interaction with the system and hides its complexity.

In `@ngneat/elf`, the Facade pattern is implemented using the `createFacade` function. This function creates a facade that simplifies the interaction with the store by exposing a simplified interface that hides the details of the state management implementation.

The Facade pattern is particularly useful when you have a complex application with multiple features and you want to provide a simplified interface for interacting with the store.

#### Repository Pattern

The Repository pattern is a design pattern that provides a way to decouple the application from the underlying data storage. It separates the concerns of data access and storage from the rest of the application.

In `@ngneat/elf`, the Repository pattern is implemented using the `withRequests` helper. This helper provides a way to manage data access and storage by defining a set of actions that are responsible for interacting with an external data source.

The Repository pattern is particularly useful when you have an application that requires data to be fetched from an external data source, such as a REST API or a database.


## Management effects 

Managing side effects is an important aspect of state management in any application. Side effects refer to any actions or operations that occur outside of the main application flow and can affect the state of the application.

In `@ngneat/elf`, managing side effects is achieved using the `withRequests` helper. This helper provides a simple and intuitive way to manage side effects by defining a set of actions that are responsible for interacting with external data sources.

### withRequests Helper

The `withRequests` helper is used to manage side effects in `@ngneat/elf`. It provides a set of actions that are responsible for interacting with an external data source, such as a REST API or a database.

To use the `withRequests` helper, you first need to define a set of actions that describe the behavior of the external data source. These actions can be defined using the `createAction` function provided by `@ngneat/elf`.

<pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>typescript</span></div></div></pre>

<pre><div class="bg-black rounded-md mb-4"><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-typescript">import { createAction } from '@ngneat/elf';

export const fetchAddresses = createAction('[Addresses] Fetch Addresses');
export const createAddress = createAction('[Addresses] Create Address', (address: Address) => ({ address }));
export const updateAddress = createAction('[Addresses] Update Address', (address: Address) => ({ address }));
export const deleteAddress = createAction('[Addresses] Delete Address', (address: Address) => ({ address }));
</code></div></div></pre>

In this example, we have defined a set of actions for interacting with an external data source that contains address data. The `fetchAddresses` action is responsible for fetching a list of addresses from the external data source, while the `createAddress`, `updateAddress`, and `deleteAddress` actions are responsible for creating, updating, and deleting individual addresses.

Once you have defined your actions, you can use the `withRequests` helper to create a store that manages the side effects of these actions.

<pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>typescript</span></div></div></pre>

<pre><div class="bg-black rounded-md mb-4"><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-typescript">import { withRequests } from '@ngneat/elf';

const store = createStore(
  { name: 'addresses' },
  withEntities<Address>(),
  withRequests()
);
</code></div></div></pre>

In this example, we have created a store that manages a collection of addresses using the Entity pattern. We have also used the `withRequests` helper to manage the side effects of the actions we defined earlier.

### Effects

The `withRequests` helper uses Effects to manage side effects. Effects are functions that are triggered by actions and are responsible for performing side effects.

To define an Effect, you can use the `createEffect` function provided by `@ngneat/elf`.

<pre><div class="bg-black rounded-md mb-4"><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-typescript">import { createEffect } from '@ngneat/elf';

export const fetchAddressesEffect = createEffect(fetchAddresses, ({ run }) =>
  run(() => this.addressService.getAddresses())
);
</code></div></div></pre>

In this example, we have defined an Effect for the `fetchAddresses` action. The Effect is responsible for fetching a list of addresses from the external data source using the `addressService.getAddresses()` method.

To use the Effect, we need to register it with the store using the `addEffect` method.

<pre><div class="bg-black rounded-md mb-4"><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-typescript">store.addEffect(fetchAddressesEffect);
</code></div></div></pre>

In this example, we have registered the `fetchAddressesEffect` Effect with the store. This means that whenever the `fetchAddresses` action is dispatched, the Effect will be triggered and the external data source will be queried.

## Conclusion

In conclusion, managing side effects is an important aspect of state management in any application. In `@ngneat/elf`, side effects can be managed using the `withRequests` helper, which provides a simple and intuitive way to define and manage actions that interact with external data sources. By using Effects, you can trigger side effects in response to actions and keep your application state consistent and
