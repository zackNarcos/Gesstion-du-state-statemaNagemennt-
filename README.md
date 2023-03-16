# RX-ANGULAR & NgXs DOCUMENTATION 

## install

```bash
npm install rx-angular/template
```

## usage

# RxAngular/Template

## What is it?

The template package is a collection of helpers and tools to make your life as a developer easier.

## What can it do?

### `rxLet`

`rxLet` is a structural directive that binds an observable to a template context. It takes an observable as input and pushes the emitted values to the template context. It also takes a second argument, a strategy, which defines how the values are pushed to the template context. The default strategy is `coalescing` which means that the values are only pushed if they are different from the previous one. This is useful if you have a lot of emissions that are the same (e.g. when using `async` pipe). If you don't want to use the `coalescing` strategy, you can set it to `native` which will use the `async` pipe under the hood.

```typescript
// app.component.ts
@Component({
  selector: 'app-root',
  template: `
    <div *rxLet="myObservable as value; strategy: 'native'">
      {{ value }}
    </div>
  `
})
export class AppComponent {
  myObservable = interval(1000);
}
```

### `rxSuspense`

`rxSuspense` is a structural directive that binds an observable to a template context. It takes an observable as input and pushes the emitted values to the template context. It also takes a second argument, a strategy, which defines how the values are pushed to the template context. The default strategy is `coalescing` which means that the values are only pushed if they are different from the previous one. This is useful if you have a lot of emissions that are the same (e.g. when using `async` pipe). If you don't want to use the `coalescing` strategy, you can set it to `native` which will use the `async` pipe under the hood.

```typescript
// app.component.ts
@Component({
  selector: 'app-root',
  template: `
    <div *rxLet="myObservable as value; strategy: 'native'">
      {{ value }}
    </div>
  `
})
export class AppComponent {
  myObservable = interval(1000);
}
```

## `rxSuspense`

`rxSuspense` is a structural directive that binds an observable to a template context. It takes an observable as input and pushes the emitted values to the template context. It also takes a second argument, a
