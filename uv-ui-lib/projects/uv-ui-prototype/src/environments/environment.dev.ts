export const environment = {
  production: true,
  environmentName: "dev",
  authConfig: {
    authority: 'https://uv-dev-test.us.auth0.com',
    redirectUrl: 'https://uvuiprototype.z13.web.core.windows.net/auth-callback',
    postLogoutRedirectUri: 'https://uvuiprototype.z13.web.core.windows.net/logout',
    clientId: 'g3ijY9qhNYluzQOQVnnc1hyYi0uxtoXq',
    scope: 'openid profile email phone offline_access',
    responseType: 'code',
    silentRenew: true,
    useRefreshToken: true,
    renewTimeBeforeTokenExpiresInSeconds: 30
  }
};
