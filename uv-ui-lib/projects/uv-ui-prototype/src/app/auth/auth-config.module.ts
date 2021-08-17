import { NgModule } from '@angular/core';
import { AuthModule } from 'angular-auth-oidc-client';
import { LocalStorage } from './local-storage.service';

@NgModule({
    imports: [AuthModule.forRoot({ 
        storage: LocalStorage,
        config: {
            authority: 'https://uv-dev-test.us.auth0.com',
            redirectUrl: 'https://uvuiprototype.z13.web.core.windows.net/auth-callback',
            postLogoutRedirectUri: 'https://uvuiprototype.z13.web.core.windows.net/logout',
            // redirectUrl: 'http://localhost:4200/auth-callback',
            // postLogoutRedirectUri: 'http://localhost:4200/logout',
            clientId: 'g3ijY9qhNYluzQOQVnnc1hyYi0uxtoXq',
            scope: 'openid profile email phone offline_access',
            responseType: 'code',
            silentRenew: true,
            useRefreshToken: true,
            renewTimeBeforeTokenExpiresInSeconds: 30,
        }
    })],
    exports: [AuthModule]
})
export class AuthConfigModule {}
