import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-navbar-dashboard-sub',
  templateUrl: './navbar-dashboard-sub.component.html',
  styleUrls: ['../../scss/_styles.scss']
})
export class NavbarDashboardSubComponent {

  @Input() public snippets: NavBarSub[] = [{icon: '', snippetHeading: '', snippetTxt: ''}];
  @Input() public headingTxt = '';
  @Input() public subHeadingTxt = '';
  @Input() public snippetTxt = '';
  @Input() public snippetHeading = '';

  @Output() public readonly snippetEvent = new EventEmitter<Event>();

  public snippetClicked($event: Event): void{
      this.snippetEvent.emit($event);
  }
}

interface NavBarSub{
  icon: string;
  snippetHeading: string;
  snippetTxt: string;
}
