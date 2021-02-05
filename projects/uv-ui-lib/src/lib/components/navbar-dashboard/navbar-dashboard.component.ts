import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-navbar-dashboard',
  templateUrl: './navbar-dashboard.component.html',
  styleUrls: ['../../scss/_styles.scss']
})
export class NavbarDashboardComponent implements OnInit {

  @Input() navlinks: [Nav];

  @Input() userPic: string;
  @Input() userLink: string;

  constructor() { }

  ngOnInit(): void {
  }

}

interface Nav{
  icon: string;
  navlink: string;
  classes: [string];
}
