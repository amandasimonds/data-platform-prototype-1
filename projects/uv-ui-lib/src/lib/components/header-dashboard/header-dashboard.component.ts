import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-header-dashboard',
  templateUrl: './header-dashboard.component.html',
  styleUrls: ['../../scss/_styles.scss']
})
export class HeaderDashboardComponent implements OnInit {

  @Input() headerText : string;
  @Input() iconName : string;

  constructor() { }

  ngOnInit(): void {
  }

}
