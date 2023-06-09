import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'uvx-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
    @Input() public headerText = '' ;
    @Input() public icon = '';
    @Input() public uvHighlight = false;
}
