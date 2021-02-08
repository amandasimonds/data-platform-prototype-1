import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-navbar-dashboard-sub',
  templateUrl: './navbar-dashboard-sub.component.html',
  styleUrls: ['../../scss/_styles.scss']
})
export class NavbarDashboardSubComponent implements OnInit {

  @Input() headingTxt : string;

  constructor() { }

  ngOnInit(): void {
  }

}
