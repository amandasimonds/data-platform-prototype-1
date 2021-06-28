import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'lib-uv-ui-app-side-bar',
    templateUrl: './app-side-bar.component.html',
    styleUrls: ['./app-side-bar-component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppSideBarComponent {

    @Input() public mode: 'menu' | 'scroll' = 'menu';

    // for Storybook
    public leftContent = '';
    public rightContent = '';

    public get scroll(): boolean {
        return this.mode === 'scroll';
    }
}
