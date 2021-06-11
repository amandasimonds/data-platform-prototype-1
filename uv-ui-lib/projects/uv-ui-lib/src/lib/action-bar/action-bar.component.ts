import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'lib-uv-ui-action-bar',
    templateUrl: './action-bar.component.html',
    styleUrls: ['./action-bar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionBarComponent {

    public leftcontent = ''

}
