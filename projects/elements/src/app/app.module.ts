import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector  } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { LoginComponent } from 'projects/uv-ui-lib/src/lib/components/login/login.component';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule
  ],
  providers: []
})
export class AppModule {
  constructor(private injector: Injector){}

  ngDoBootstrap(){
    const element = createCustomElement(LoginComponent, { injector: this.injector })
    customElements.define("ihsm-login", element);
  }
}
