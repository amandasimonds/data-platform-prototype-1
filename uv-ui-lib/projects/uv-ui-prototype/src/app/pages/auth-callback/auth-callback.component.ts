import { ChangeDetectionStrategy, Component, OnInit, Self } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { LoginResponse } from 'angular-auth-oidc-client/lib/login/login-response';
import { AuthService } from '../../auth/auth.service';
import { HelperService } from '../../services/helper.service';
// import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import { NgOnDestroyService } from '../../services/on-destroy.service';
// import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  providers: [NgOnDestroyService],
  styleUrls: ['./auth-callback.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthCallbackComponent implements OnInit {

  // color: ThemePalette = 'primary';
  // mode: ProgressSpinnerMode = 'determinate';
  // value = 50;

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
        } else {
          this.authService.signOut();
        }
      });
    }
}
