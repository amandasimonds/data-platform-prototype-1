import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'uvx-side-panel',
    templateUrl: './side-panel.component.html',
    styleUrls: ['./side-panel-component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidePanelComponent {

    @Input() public mode: 'menu' | 'scroll' | 'scroll-gradient' = 'menu';

    // for Storybook
    public leftContent = '';
    public rightContent = '';

    public get scroll(): boolean {
        return this.mode === 'scroll';
    }

    public get scrollGradient(): boolean {
        return this.mode === 'scroll-gradient';
    }
}
