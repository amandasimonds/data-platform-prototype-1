import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ITab } from '../interfaces/app-side-bar.interfaces';

@Component({
    selector: 'lib-uv-ui-app-side-bar',
    templateUrl: './app-side-bar.component.html',
    styleUrls: ['./app-side-bar-component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppSideBarComponent {
    @Input() public titleText = '';
    @Input() public descriptionText = '';
    @Input() public tabs: ITab[];

    constructor(){
        this.tabs = [];
    }

    public trackByFn(_: number, {link}: ITab): string {
        return link;
    }
}
