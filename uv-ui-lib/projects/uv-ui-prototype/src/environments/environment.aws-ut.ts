import { ENV } from "../app-env";

export const environment = {
    production: true,
    environmentName: "aws-ut",
    authConfig: {
        authority: ENV.ut_authority,
        redirectUrl: 'https://d9ufe8lsojac3.cloudfront.net/auth-callback',
        postLogoutRedirectUri: 'https://d9ufe8lsojac3.cloudfront.net/logout',
        clientId: ENV.ut_client_id,
        scope: 'openid profile email phone offline_access',
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
        renewTimeBeforeTokenExpiresInSeconds: 30
    }
};
