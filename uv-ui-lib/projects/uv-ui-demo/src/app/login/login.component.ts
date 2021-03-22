import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
// eslint-disable-next-line
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

  constructor(private route: Router) { }

  public btnFunctionCall(): void {
    console.log('function was called');
    void this.route.navigate(['/start-page']);
  }
}
