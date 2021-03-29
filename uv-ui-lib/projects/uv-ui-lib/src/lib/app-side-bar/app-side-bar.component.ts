import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'lib-uv-ui-app-side-bar',
    templateUrl: './app-side-bar.component.html',
    styleUrls: ['../scss/_styles.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppSideBarComponent {
    @Input() public titleText = '';
    @Input() public descriptionText = '';
    @Input() public tabs: GwuTab[] = [{icon: '', link: '', linkText: ''}];
}

interface GwuTab{
    icon: string;
    link: string;
    linkText: string;
}
