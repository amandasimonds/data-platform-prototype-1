import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-header-dashboard',
  templateUrl: './header-dashboard.component.html',
  styleUrls: ['../../scss/_styles.scss']
})
export class HeaderDashboardComponent {

  @Input() headerText : string;
  @Input() iconName : string;

  @Output() helpBtnEvent = new EventEmitter<any>();
  @Output() profileBtnEvent = new EventEmitter<any>();


  profileBtnClicked(event){
    this.profileBtnEvent.emit(event);
  };

  helpBtnClicked(event){
    this.helpBtnEvent.emit(event);
  };

}
