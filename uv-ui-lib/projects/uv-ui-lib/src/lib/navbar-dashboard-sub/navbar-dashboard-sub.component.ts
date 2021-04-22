import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'lib-uv-ui-navbar-dashboard-sub',
  templateUrl: './navbar-dashboard-sub.component.html',
  styleUrls: ['./navbar-dashboard-sub-component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarDashboardSubComponent {
    @Input() public headingTxt = '';
    @Input() public subHeadingTxt = '';
}
