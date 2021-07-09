import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'uv-side-panel',
    templateUrl: './side-panel.component.html',
    styleUrls: ['./side-panel-component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidePanelComponent {

    @Input() public mode: 'menu' | 'scroll' = 'menu';

    // for Storybook
    public leftContent = '';
    public rightContent = '';

    public get scroll(): boolean {
        return this.mode === 'scroll';
    }
}
