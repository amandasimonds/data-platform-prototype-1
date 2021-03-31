import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IGwuTab } from '../interfaces/app-side-bar.interfaces';

@Component({
    selector: 'lib-uv-ui-app-side-bar',
    templateUrl: './app-side-bar.component.html',
    styleUrls: ['../scss/_styles.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppSideBarComponent {
    @Input() public titleText = '';
    @Input() public descriptionText = '';
    @Input() public tabs: IGwuTab[] = [{icon: '', link: '', linkText: ''}];
}
