import { NgModule } from '@angular/core';
import { AuthModule } from 'angular-auth-oidc-client';
import { devEnv, devEnvLocal, testEnv, testEnvLocal } from './env';
import { LocalStorage } from './local-storage.service';

@NgModule({
    imports: [AuthModule.forRoot({
        storage: LocalStorage,
        // config: devEnv
        config: devEnvLocal
        // config: testEnv
        // config: testEnvLocal
    })],
    exports: [AuthModule]
})
export class AuthConfigModule {}
