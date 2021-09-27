import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sandbox-uv-ui-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

  constructor(private route: Router) { }

  public login() {
    this.route.navigate(['/main/home-splash']);
  }
}
