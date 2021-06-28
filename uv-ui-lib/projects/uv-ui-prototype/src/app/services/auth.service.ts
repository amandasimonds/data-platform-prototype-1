import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HelperService } from '../services/helper.service';

@Injectable({
providedIn: 'root'
})
export class AuthService {
    // TODO: get this info from pipeline eventually
    private settings: {authority: string; clientId: string; redirectUri: string} = {
        authority: 'https://gwu.auth.us-east-1.amazoncognito.com',
        // TODO: These values will be based on the subdomain
        clientId: '2fakcqk6ihkmk78h8h0o7vs0bq',
        // redirectUri: 'https://uvuiprototype.z13.web.core.windows.net/auth-callback',
        redirectUri: 'http://localhost:4200/auth-callback'
    };
    constructor(private http: HttpClient, private helper: HelperService) {}

    public isLoggedIn(): boolean {
        const jwt = localStorage.getItem('id_token');
        if (jwt) {

            return true;
        }

        return false;
    }

    public startAuthentication(): void {
        // Create random "state"
        const state = this.helper.getRandomString();
        sessionStorage.setItem('pkce_state', state);

        // Create PKCE code verifier
        const codeVerifier = this.helper.getRandomString();
        sessionStorage.setItem('codeVerifier', codeVerifier);
        console.log(`codeVerifier: ${codeVerifier}`);
        this.helper.encryptStringWithSHA256(codeVerifier).then(arrayHash => {
            const codeChallenge = this.helper.hashToBase64url(arrayHash);
            sessionStorage.setItem('codeChallenge', codeChallenge);
            console.log(`codeChallenge: ${codeChallenge}`);
            this.helper.navigateToUrl(
                `${this.settings.authority}/oauth2/authorize?response_type=code&client_id=${this.settings.clientId}&redirect_uri=${this.settings.redirectUri}&code_challenge_method=S256&code_challenge=${codeChallenge}&state=${state}`
            );
        });
    }

    public logout(): void {
        localStorage.clear();
        this.helper.navigateToUrl(
            `${this.settings.authority}/logout?client_id=${this.settings.clientId}&logout_uri=http://localhost:4200/logout`
            // `${this.settings.authority}/logout?client_id=${this.settings.clientId}&logout_uri=https://uvuiprototype.z13.web.core.windows.net/logout`
        );
    }

    public isValidState(state: string | null): boolean {
        // Verify state matches
        const sentState = sessionStorage.getItem('pkce_state');
        if(sentState !== state) {
            console.log(`State is invalid.\nReceived state: ${state}\nSent state: ${sentState}`);

            return false;
        } else {

            return true;
        }
    }

    public getToken(code: string | null): Observable<object> {
        // Fetch OAuth2 tokens from Cognito
        const codeVerifier = sessionStorage.getItem('codeVerifier');
        const headers: HttpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded'
        );

        return this.http.post(
            `${this.settings.authority}/oauth2/token?grant_type=authorization_code&code=${code}&client_id=${this.settings.clientId}&redirect_uri=${this.settings.redirectUri}&code_verifier=${codeVerifier}`,
            {},
            { headers }
        );
    }

    public getUserInfo(jwt: string): Observable<boolean> {
        console.log('get user info', jwt);

        return new Observable((subscriber) => {
            try {
                const jwtData: any = JSON.parse(atob(jwt.split('.')[1]));
                localStorage.setItem('userName', jwtData.name);
                localStorage.setItem('principal', jwtData['custom:principal_id']);
                localStorage.setItem('groups', jwtData['custom:groups']);
                localStorage.setItem(
                    'userName',
                    jwtData.identities[0].userId.split('@')[0]
                );
                localStorage.setItem('jwtExp', jwtData.exp);
                subscriber.next(true);
                subscriber.complete();
            } catch (err) {
                subscriber.next(false);
                subscriber.complete();
            }
        });
    }

    public getUserEmail(jwt: string): string {
        const jwtData: any = JSON.parse(atob(jwt.split('.')[1]));
        const email = jwtData.identities[0].userId;
        localStorage.setItem('userEmail', email);

        return email;
    }

    public getGroups(): string {

        return localStorage.getItem('groups') || '{}';
    }

    public getPrincipalID(): string {

        return localStorage.getItem('principal') || '{}';
    }

    public isJwtValid(): boolean {
        const expDate = new Date(0);
        expDate.setUTCMilliseconds(+localStorage.getItem('jwtExp')! * 1000);
        const today = new Date();

        return expDate >= today ? true : false;
    }

    public getJWT(): string {

        return 'Bearer ' + localStorage.getItem('id_token');
    }
}
