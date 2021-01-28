# UvUiLib - Getting Started

## Installing UV UI Library

- Install from npm - `npm install uv-ui-lib --save`

## Importing in App

- Import the module in `app.module.ts` :

```
import { UvUiLib } from 'uv-ui-lib'

@NgModule({
  imports: [
    UvUiLibModule,
    ...
  ]
})

export class AppModule {
}
```

## Import global styles

- In `/src/styles.scss` add `@import "~uv-ui-lib/src/lib/scss/_styles.scss";`

---

<br>


This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

## Code scaffolding

Run `ng generate component components/<component-name> --project uv-ui-lib` to generate a new component inside the lib/components folder. 

## Build

Run `npm run build:lib` to build the library and the library's scss folder. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library, go to the dist folder `cd dist/uv-ui-lib` and run `npm publish`.

## Running unit tests

Run `ng test uv-ui-lib` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
