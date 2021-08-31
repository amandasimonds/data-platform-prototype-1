import { Component, Input } from '@angular/core';
import { FadeInOutAnimation } from '../animations';

@Component({
    selector: 'uvx-backdrop',
    templateUrl: './backdrop.component.html',
    styleUrls: ['./backdrop.component.scss'],
    animations: [ FadeInOutAnimation ]
})
export class BackdropComponent {

    @Input() backdropState = 'visible';
    @Input() mode: '' | 'popup' = '';
    @Input() logo: 'uv-logo' | 'search' | '' = '';

}
