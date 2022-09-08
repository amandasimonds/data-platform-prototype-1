import { ENV } from "../app/app-env";

export const environment = {
    production: false,
    authConfig: {
        authority: ENV.dev_authority,
        redirectUrl: 'http://localhost:4200/auth-callback',
        postLogoutRedirectUri: 'http://localhost:4200/logout',
        clientId: ENV.dev_client_id,
        scope: 'openid profile email phone offline_access',
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
        renewTimeBeforeTokenExpiresInSeconds: 30
    }
};