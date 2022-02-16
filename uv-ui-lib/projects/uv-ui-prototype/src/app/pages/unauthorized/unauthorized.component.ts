
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'projects/uv-ui-prototype/src/environments/environment';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.scss']
})
export class UnauthorizedComponent {

  constructor(private router: Router) {

  }

  public logout() {
    localStorage.clear();
    window.location.href = `${environment.authConfig.authority}/v2/logout?federated`;
    this.router.navigate(['/logout']);
  }

  public navigateToABTest() {
    window.location.href = "https://uvuiusabilitytest.z13.web.core.windows.net/test";
  }

  public navigateToHome() {
    this.router.navigate(['/main/home-splash']);
  }
}
