# NgRx

NgRx is an open-source library for state management in Angular applications. It is based on the Redux design pattern and allows for storing and managing the application state in a predictable and centralized manner.

## Basic Concepts

The basic concepts of NgRx are:

* Actions: Actions are simple objects that describe an event that has occurred in the application. They are used to trigger state changes in the application.
* Reducers: Reducers are pure functions that take the current application state and an action as input, and return a new application state as output. Reducers are used to make changes to the application state in response to actions.
* Selectors: Selectors are functions that allow access to a specific part of the application state. They allow for filtering, sorting, or transforming the data stored in the application state.
* State: The state is the global state of the application. It can be represented as a JSON object containing the application's data and information.
* NgRx Effects: Effects are functions that manage side effects such as HTTP calls, asynchronous state changes, etc. They are used to isolate the application's asynchronous logic from the rest of the application state.

## Installation

`npm install`

### 1. Create resource models

Create models for the resources you will be managing in your application:

* Product resource
* Address resource
* Cart resource

### 2. Create actions for each resource, including API calls

For each resource, create a set of actions that will be used to manage their state:

* Product Actions
* Address Actions
* Cart Actions

### 3. Manage reducers for each resource

Create reducers for each resource to handle state changes in response to actions:

* Product Reducer
* Address Reducer
* Cart Reducer

### 4. Implement lazy loading for the Address Module

Configure the routes in the main module to use lazy loading for the Address module:

* Create a dedicated module for addresses with its own routing file
* Configure the Address module to load lazily

### 5. Manage other resources in global state

To manage the other resources in the global state, configure the Store in `app.module.ts`:

* Import the necessary NgRx modules
* Register the reducers and effects for each resource

By following these steps, you will have an Angular application with NgRx for managing the state of the Product, Address, and Cart resources. The resource models, actions, reducers, lazy loading for the Address module, and global state management for the other resources are all configured for better performance and code organization.

### 6. Create and register selectors for each resource

Create selectors for each resource to access specific parts of the application state:

* Product Selectors
* Address Selectors
* Cart Selectors

Register the selectors in your components and use them to access the state.

### 7. Implement Effects for handling side effects

Create Effects for each resource to handle side effects like API calls and asynchronous actions:

* Product Effects
* Address Effects
* Cart Effects

Register the effects in your `app.module.ts`.

### 8. Connect components to the store

Update your components to use the store for managing state:

* Dispatch actions to update the state
* Use selectors to retrieve data from the state
* Subscribe to state changes and update the view accordingly

### 9. Handle errors and loading states

Implement error handling and loading state management for each resource:

* Add error and loading properties to the state
* Create actions for error and loading state changes
* Update reducers to handle error and loading state changes
* Display error messages and loading indicators in your components

### 10. Test your application

Write unit and integration tests for your application to ensure proper functionality:

* Test actions, reducers, selectors, and effects
* Test components and services
* Test your application's end-to-end functionality

By following these additional steps, you will have an Angular application that uses NgRx for managing the state of the Product, Address, and Cart resources. This includes connecting components to the store, handling side effects with Effects, managing error and loading states, and testing the application to ensure proper functionality.
