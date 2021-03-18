import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  @Output() snippetEvent = new EventEmitter<any>();

  snippetClicked(event){
    this.snippetEvent.emit(event);
  };

  constructor() { }

  ngOnInit(): void {
  }

}
interface NavBarSub{
  icon: string;
  snippetHeading: string;
  snippetTxt: string;
}
