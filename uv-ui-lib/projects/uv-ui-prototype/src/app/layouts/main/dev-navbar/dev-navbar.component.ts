import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../../../models/user.model';
import { navItems } from '../navbar/navItems';

@Component({
  selector: 'app-dev-navbar',
  templateUrl: './dev-navbar.component.html',
  styleUrls: ['./dev-navbar.component.scss']
})
export class DevNavbarComponent {

  @Input() currentUser: IUser = { id: 1, new: false, name: '' };
  @Input() navActiveIcon = '';
  @Input() navbarIsExpanded = false;
  public navlinks = navItems;
  @Output() toggleSearchSidebarEvent = new EventEmitter<Event>();

  constructor(private router: Router, private route: ActivatedRoute) { }

  public toggleSearchSidebar(event: Event) {
    this.toggleSearchSidebarEvent.emit(event);
  }

  public handleNavlinkAction(navlink: any) {
    this.router.navigate([navlink.navlink], { queryParams: { app: navlink.app }, relativeTo: this.route });
  }

}
