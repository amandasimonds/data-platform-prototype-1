import { ENV } from "../app-env";

export const environment = {
    production: true,
    environmentName: "azure-ut",
    authConfig: {
        authority: ENV.ut_authority,
        redirectUrl: 'https://uvuiusabilitytest.z13.web.core.windows.net/auth-callback',
        postLogoutRedirectUri: 'https://uvuiusabilitytest.z13.web.core.windows.net/logout',
        clientId: ENV.ut_client_id,
        scope: 'openid profile email phone offline_access',
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
        renewTimeBeforeTokenExpiresInSeconds: 30
    }
};
