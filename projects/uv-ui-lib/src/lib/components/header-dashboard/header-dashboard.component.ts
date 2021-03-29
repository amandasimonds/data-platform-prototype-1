import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-header-dashboard',
  templateUrl: './header-dashboard.component.html',
  styleUrls: ['../../scss/_styles.scss']
})
export class HeaderDashboardComponent {

  @Input() public headerText = '';
  @Input() public iconName = '';

  @Output() public readonly helpBtnEvent = new EventEmitter<Event>();
  @Output() public readonly profileBtnEvent = new EventEmitter<Event>();

  public profileBtnClicked($event: Event): void{
    this.profileBtnEvent.emit($event);
  }

  public helpBtnClicked($event: Event): void{
    this.helpBtnEvent.emit($event);
  }

}
