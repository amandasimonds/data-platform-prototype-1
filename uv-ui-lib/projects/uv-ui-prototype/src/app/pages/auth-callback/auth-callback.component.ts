import { ChangeDetectionStrategy, Component, OnInit, Self } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { LoginResponse } from 'angular-auth-oidc-client/lib/login/login-response';
import { AuthService } from '../../auth/auth.service';
import { HelperService } from '../../services/helper.service';
import { NgOnDestroyService } from '../../services/on-destroy.service';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  providers: [NgOnDestroyService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthCallbackComponent implements OnInit {

    constructor(
      @Self() private readonly destroy$: NgOnDestroyService,
      private authService: AuthService,
      private helperService: HelperService
    ) {}

    public ngOnInit(): void {
      this.authService.checkAuth()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: LoginResponse) => {
        if (res) {
          this.helperService.navigateToUrl('/main/home-splash');
          console.log(res);
        } else {
          this.authService.signOut();
        }
      });
    }
}
