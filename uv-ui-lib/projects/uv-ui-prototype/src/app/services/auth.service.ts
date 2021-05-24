import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HelperService } from '../services/helper.service';

@Injectable({
providedIn: 'root',
})
export class AuthService {
    // TODO: get this info from pipeline eventually
    private settings: any = {
        authority: 'https://gwu.auth.us-east-1.amazoncognito.com',
        // TODO: These values will be based on the subdomain
        clientId: '2fakcqk6ihkmk78h8h0o7vs0bq',
        // redirectUri: 'https://uvuiprototype.z13.web.core.windows.net/auth-callback',
        redirectUri: 'http://localhost:4200/auth-callback',
    };
    constructor(private http: HttpClient, private helper: HelperService) {}

    isLoggedIn(): boolean {
        const jwt = localStorage.getItem('id_token');
        if (jwt) {
            console.log(jwt)
            return true;
        }
        return false;
    }

    startAuthentication(): void {
        // Create random "state"
        var state = this.helper.getRandomString();
        sessionStorage.setItem("pkce_state", state);

        // Create PKCE code verifier
        let code_verifier = this.helper.getRandomString();
        sessionStorage.setItem("code_verifier", code_verifier);
        console.log(`code_verifier: ${code_verifier}`);
        this.helper.encryptStringWithSHA256(code_verifier).then(arrayHash => {
            let code_challenge = this.helper.hashToBase64url(arrayHash);
            sessionStorage.setItem("code_challenge", code_challenge)
            console.log(`code_challenge: ${code_challenge}`);
            this.helper.navigateToUrl(
                `${this.settings.authority}/oauth2/authorize?response_type=code&client_id=${this.settings.clientId}&redirect_uri=${this.settings.redirectUri}&code_challenge_method=S256&code_challenge=${code_challenge}&state=${state}`
            );
        });
    }

    logout(): void {
        localStorage.clear();
        this.helper.navigateToUrl(
            `${this.settings.authority}/logout?client_id=${this.settings.clientId}&logout_uri=http://localhost:4200/logout`
            // `${this.settings.authority}/logout?client_id=${this.settings.clientId}&logout_uri=https://uvuiprototype.z13.web.core.windows.net/logout`
        );
    }

    isValidState(state: string | null): boolean {
        // Verify state matches
        let sentState = sessionStorage.getItem("pkce_state")
        if(sentState != state) {
            console.log(`State is invalid.\nReceived state: ${state}\nSent state: ${sentState}`)
            return false;
        } else {
            return true;
        }
    }

    getToken(code: string | null): Observable<object> {
        // Fetch OAuth2 tokens from Cognito
        let code_verifier = sessionStorage.getItem('code_verifier');
            const headers: HttpHeaders = new HttpHeaders()
                .set('Content-Type', 'application/x-www-form-urlencoded'
        );
        return this.http.post(
            `${this.settings.authority}/oauth2/token?grant_type=authorization_code&code=${code}&client_id=${this.settings.clientId}&redirect_uri=${this.settings.redirectUri}&code_verifier=${code_verifier}`,
            {},
            { headers }
        );
    }

    getUserInfo(jwt: string): Observable<boolean> {
        console.log('get user info', jwt);
        return new Observable((subscriber) => {
            try {
                const jwtData: any = JSON.parse(atob(jwt.split('.')[1]));
                localStorage.setItem('userName', jwtData.name);
                localStorage.setItem('principal', jwtData["custom:principal_id"]);
                localStorage.setItem('groups', jwtData["custom:groups"]);
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

    getUserEmail(jwt: string): string {
        const jwtData: any = JSON.parse(atob(jwt.split('.')[1]));
        const email = jwtData.identities[0].userId;
        localStorage.setItem('userEmail', email);
        return email;
    }

    getGroups(): string {
        return localStorage.getItem('groups') || '{}';
    }

    getPrincipalID(): string {
        return localStorage.getItem('principal') || '{}';
    }

    isJwtValid(): boolean {
        const expDate = new Date(0);
        expDate.setUTCMilliseconds(+localStorage.getItem('jwtExp')! * 1000);
        const today = new Date();
        return expDate >= today ? true : false;
    }

    getJWT(): string {
        return 'Bearer ' + localStorage.getItem('id_token');
    }
}
