import { NgModule } from '@angular/core';
import { AuthModule } from 'angular-auth-oidc-client';
import { environment } from '../../environments/environment';
import { LocalStorage } from './local-storage.service';

@NgModule({
    imports: [AuthModule.forRoot({
        storage: LocalStorage,
        config: environment.authConfig
    })],
    exports: [AuthModule]
})
export class AuthConfigModule {}
