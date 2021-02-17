import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-navbar-dashboard-sub',
  templateUrl: './navbar-dashboard-sub.component.html',
  styleUrls: ['../../scss/_styles.scss']
})
export class NavbarDashboardSubComponent implements OnInit {

  @Input() snippets: [NavBarSub];

  @Input() headingTxt : string;
  @Input() subHeadingTxt : string;
  @Input() snippetTxt : string;
  @Input() snippetHeading: string;

  constructor() { }

  ngOnInit(): void {
  }

}

interface NavBarSub{
  icon: string;
  snippetHeading: string;
  snippetTxt: string;
}
