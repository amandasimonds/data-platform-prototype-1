import { ENV } from "../app/app-env";

export const environment = {
  production: true,
  environmentName: "dev",
  authConfig: {
    authority: ENV.dev_authority,
    redirectUrl: 'https://uvuiprototype.z13.web.core.windows.net/auth-callback',
    postLogoutRedirectUri: 'https://uvuiprototype.z13.web.core.windows.net/logout',
    clientId: ENV.dev_client_id,
    scope: 'openid profile email phone offline_access',
    responseType: 'code',
    silentRenew: true,
    useRefreshToken: true,
    renewTimeBeforeTokenExpiresInSeconds: 30
  }
};
