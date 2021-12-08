export const environment = {
  production: true,
  environmentName: "dev",
  authConfig: {
    authority: 'https://dev-0d2xh410.us.auth0.com',
    redirectUrl: 'http://localhost:4200/auth-callback',
    postLogoutRedirectUri: 'http://localhost:4200/logout',
    clientId: 'GAb6wGt0e5Sa5HmmyLwVEVDNRXQ61Bwv',
    scope: 'openid profile email phone offline_access',
    responseType: 'code',
    silentRenew: true,
    useRefreshToken: true,
    renewTimeBeforeTokenExpiresInSeconds: 30
  }
};
