export const environment = {
    production: true,
    environmentName: "aws-ut",
    authConfig: {
        authority: 'https://dev-0d2xh410.us.auth0.com',
        redirectUrl: 'https://d9ufe8lsojac3.cloudfront.net/auth-callback',
        postLogoutRedirectUri: 'https://d9ufe8lsojac3.cloudfront.net/logout',
        clientId: 'GAb6wGt0e5Sa5HmmyLwVEVDNRXQ61Bwv',
        scope: 'openid profile email phone offline_access',
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
        renewTimeBeforeTokenExpiresInSeconds: 30
    }
};
