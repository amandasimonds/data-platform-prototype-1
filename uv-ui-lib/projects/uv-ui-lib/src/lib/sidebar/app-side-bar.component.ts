import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'lib-uv-ui-app-side-bar',
    templateUrl: './app-side-bar.component.html',
    styleUrls: ['./app-side-bar-component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppSideBarComponent {

    @Input() public type: 'menu' | 'scroll' = 'menu';

    public get scroll(): boolean {
        return this.type === 'scroll' ? true : false;
    }
}
