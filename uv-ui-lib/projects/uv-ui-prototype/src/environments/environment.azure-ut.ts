export const environment = {
    production: true,
    environmentName: "azure-ut",
    authConfig: {
        authority: 'https://dev-0d2xh410.us.auth0.com',
        redirectUrl: 'https://uvuiusabilitytest.z13.web.core.windows.net/auth-callback',
        postLogoutRedirectUri: 'https://uvuiusabilitytest.z13.web.core.windows.net/logout',
        clientId: 'GAb6wGt0e5Sa5HmmyLwVEVDNRXQ61Bwv',
        scope: 'openid profile email phone offline_access',
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
        renewTimeBeforeTokenExpiresInSeconds: 30
    }
  };
  