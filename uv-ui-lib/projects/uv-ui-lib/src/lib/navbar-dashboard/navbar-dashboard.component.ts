import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'lib-uv-ui-navbar-dashboard',
  templateUrl: './navbar-dashboard.component.html',
  styleUrls: [ '../scss/_styles.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarDashboardComponent {

  @Input() public navlinks: [Nav];
  @Input() public userPic = '';
  @Input() public userLink = '';

}

interface Nav{
  icon: string;
  navlink: string;
  classes: [string];
}
