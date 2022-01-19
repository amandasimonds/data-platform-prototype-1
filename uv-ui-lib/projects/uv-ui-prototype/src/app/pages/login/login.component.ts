import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sandbox-uv-ui-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

  public newIcons = [
    {
      name: 'drag',
      url: 'actions/Drag.svg'
  },
  {
      name: 'down_crop',
      url: 'content/Down crop.svg'
  },
  {
  name: 'play',
  url: 'content/Play.svg'
},
  {
      name: 'up_down',
      url: 'content/Up and down.svg'
  },
  {
      name: 'up_crop',
      url: 'content/Up crop.svg'
  },
  {
      name: 'cummins',
      url: 'logos/Cummins.svg'
  },
  {
      name: 'cursor',
      url: 'gwu/Cursor.svg'
  },
  {
    name: 'linkage_guidelines',
    url: 'gwu/Linkage guidelines.svg'
  },
  {
      name: 'analytics_alt_line',
      url: 'services/Analytics alt line.svg'
  },
  {
      name: 'attention',
      url: 'services/Attention.svg'
  },
  {
      name: 'cloud',
      url: 'services/Cloud.svg'
  },
  {
      name: 'connectors',
      url: 'services/Connectors.svg'
  },
  {
      name: 'global_where_used_alt',
      url: 'services/Global where used alt.svg'
  },
  {
      name: 'issue',
      url: 'services/Issue.svg'
  },
  {
      name: 'log_out',
      url: 'services/Log out.svg'
  },
  {
      name: 'notifications',
      url: 'services/Notifications.svg'
  },
  {
      name: 'projects_2',
      url: 'services/Projects 2.svg'
  },
  {
      name: 'projects_alt',
      url: 'services/Projects alt.svg'
  },
  ]

  constructor(private route: Router) { }

  public login() {
    this.route.navigate(['/main/home-splash']);
  }
}
