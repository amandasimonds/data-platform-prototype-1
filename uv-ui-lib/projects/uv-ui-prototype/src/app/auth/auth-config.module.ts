import { NgModule } from '@angular/core';
import { AuthModule } from 'angular-auth-oidc-client';
import { LocalStorage } from './local-storage.service';

@NgModule({
    imports: [AuthModule.forRoot({ 
        storage: LocalStorage,
        config: {
            authority: 'https://dev-0d2xh410.us.auth0.com',
            // redirectUrl: 'https://uvuiusabilitytest.z13.web.core.windows.net/auth-callback',
            // postLogoutRedirectUri: 'https://uvuiusabilitytest.z13.web.core.windows.net/logout',
            redirectUrl: 'http://localhost:4200/auth-callback',
            postLogoutRedirectUri: 'http://localhost:4200/logout',
            clientId: 'GAb6wGt0e5Sa5HmmyLwVEVDNRXQ61Bwv',
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
