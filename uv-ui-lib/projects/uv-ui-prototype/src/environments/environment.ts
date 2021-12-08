// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    authConfig: {
        authority: 'https://uv-dev-test.us.auth0.com',
        redirectUrl: 'http://localhost:4200/auth-callback',
        postLogoutRedirectUri: 'http://localhost:4200/logout',
        clientId: 'g3ijY9qhNYluzQOQVnnc1hyYi0uxtoXq',
        scope: 'openid profile email phone offline_access',
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
        renewTimeBeforeTokenExpiresInSeconds: 30
    }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
