import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { INavBarSub } from '../interfaces/navbar-sub.interfaces';

@Component({
  selector: 'lib-uv-ui-navbar-dashboard-sub',
  templateUrl: './navbar-dashboard-sub.component.html',
  styleUrls: ['../scss/_styles.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarDashboardSubComponent {

    @Input() public snippets: INavBarSub[] = [{icon: '', snippetHeading: '', snippetTxt: ''}];
    @Input() public headingTxt = '';
    @Input() public subHeadingTxt = '';
    @Input() public snippetTxt = '';
    @Input() public snippetHeading = '';

    @Output() public readonly snippetEvent = new EventEmitter<Event>();

    public snippetClicked($event: Event): void{
        this.snippetEvent.emit($event);
    }
}
