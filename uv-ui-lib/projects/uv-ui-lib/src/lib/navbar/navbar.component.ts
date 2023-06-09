import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'uvx-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: [ './navbar-component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {

    @Input() public navbarIsExpanded = false;

}
