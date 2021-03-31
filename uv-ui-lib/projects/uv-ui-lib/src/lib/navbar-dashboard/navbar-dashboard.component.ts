import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { INav } from '../interfaces/navbar.interfaces';

@Component({
  selector: 'lib-uv-ui-navbar-dashboard',
  templateUrl: './navbar-dashboard.component.html',
  styleUrls: [ '../scss/_styles.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarDashboardComponent {
  @Input() public navlinks: INav[] = [{icon: '', navlink: '', classes: ['']}];
  @Input() public userPic = '';
  @Input() public userLink = '';
}
