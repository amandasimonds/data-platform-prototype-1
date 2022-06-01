import { Component, Input } from '@angular/core';
import { IUser } from '../../../models/user.model';

@Component({
  selector: 'app-customer-navbar',
  templateUrl: './customer-navbar.component.html',
  styleUrls: ['./customer-navbar.component.scss']
})

export class CustomerNavbarComponent {

  @Input() currentUser: IUser = { id: 1, new: false, name: '' };
  @Input() navActiveIcon = '';
  @Input() navbarIsExpanded = false;

}
