import { ENV } from "../app-env";

export const environment = {
  production: true,
  environmentName: "dev",
  authConfig: {
    authority: ENV.ut_authority,
    redirectUrl: 'http://localhost:4200/auth-callback',
    postLogoutRedirectUri: 'http://localhost:4200/logout',
    clientId: ENV.ut_client_id,
    scope: 'openid profile email phone offline_access',
    responseType: 'code',
    silentRenew: true,
    useRefreshToken: true,
    renewTimeBeforeTokenExpiresInSeconds: 30
  }
};
