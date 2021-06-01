import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'app-auth-guard',
  templateUrl: './auth-guard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthGuardComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private helper: HelperService
  ) {}

  public ngOnInit(): void {
    this.getCode(window.location.search);
  }

  public getCode(queryParams: string): void {
    const params = new URLSearchParams(queryParams);
    if (params.has('code') && params.has('state') && this.authService.isValidState(params.get('state'))) {
      this.authService
        .getToken(params.get('code'))
        .subscribe((data: any) => {
          localStorage.setItem('id_token', data.id_token);
          localStorage.setItem('access_token', data.access_token);
          localStorage.setItem('refresh_token', data.refresh_token);
          this.authService.getUserInfo(data.id_token).subscribe((res) => {
            if (res) {
                console.log('res', res);
              localStorage.setItem('userData', JSON.stringify(res));
                this.helper.navigateToUrl('/login');
            } else {
              // bad JWT
              this.authService.logout();
            }
          });
        });
    } else {
      this.authService.logout();
    }
  }
}
