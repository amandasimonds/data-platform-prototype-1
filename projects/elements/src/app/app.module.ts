import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector  } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { UvUiLibModule, ɵd } from  'uv-ui-lib';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    UvUiLibModule
  ],
  providers: []
})
export class AppModule {
  constructor(private injector: Injector){}

  ngDoBootstrap(){
    const element = createCustomElement(ɵd, { injector: this.injector })
    customElements.define("lib-components", element);
  }
}
