import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { LoginResponse } from 'angular-auth-oidc-client/lib/login/login-response';
import { UserData } from './user-data-models';

@Injectable()
export class AuthService {
    constructor(
        private oidcSecurityService: OidcSecurityService
    ) {}
  
      public get IdToken(): string {
        return this.oidcSecurityService.getIdToken();
      }
  
      public get userData(): Observable<UserData> {
        return of(this.oidcSecurityService.getUserData());
      }
  
      public checkAuth(): Observable<LoginResponse> {
        return this.oidcSecurityService.checkAuth();
      }
  
      public beginAuthentication(): Observable<void> {
        return of(this.oidcSecurityService.authorize());
      }
  
      public signOut(): void {
        this.oidcSecurityService.logoff();
      }
}
