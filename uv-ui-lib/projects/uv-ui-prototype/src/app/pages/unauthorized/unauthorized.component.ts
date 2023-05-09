
import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
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
    private destroy$: NgOnDestroyService,) {
  }

  public ngOnInit(): void {

  }

  public logout() {
    localStorage.clear();
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
