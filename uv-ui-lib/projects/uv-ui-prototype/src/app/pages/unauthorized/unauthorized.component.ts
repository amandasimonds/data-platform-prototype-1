
import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'projects/uv-ui-prototype/src/environments/environment';
import { UserService } from '../../auth/user.service';
import { NgOnDestroyService } from '../../services/on-destroy.service';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.scss']
})
export class UnauthorizedComponent {

  public currentUser = { id: 1, new: false, name: '' };

  constructor(
    private router: Router,
    private ref: ChangeDetectorRef,
    private userService: UserService,
    private destroy$: NgOnDestroyService,) {
  }

  public ngOnInit(): void {
    this.userService.updateUserName();
    this.userService.getCurrentUser()
      .subscribe((user) => {
        this.currentUser = user;
        this.ref.detectChanges()
      });
    this.redirectUser();
  }

  public logout() {
    localStorage.clear();
    window.location.href = `${environment.authConfig.authority}/v2/logout?federated`;
    this.router.navigate(['/logout']);
  }

  public navigateToABTest() {
    window.location.href = "https://uvuiusabilitytest.z13.web.core.windows.net/test";
    console.log('navigate to abtest');
  }

  public navigateToHome() {
    this.router.navigate(['/main/home-splash']);
  }

  public redirectUser() {
    this.currentUser.name === 'abtest@test.com' ? this.navigateToABTest() : console.log('not abtest user');
  }

}
