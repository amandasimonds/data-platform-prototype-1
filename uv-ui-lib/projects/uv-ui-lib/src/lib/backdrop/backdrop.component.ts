import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FadeInOutAnimation } from '../animations';

@Component({
    selector: 'uvx-backdrop',
    templateUrl: './backdrop.component.html',
    styleUrls: ['./backdrop.component.scss'],
    animations: [ FadeInOutAnimation ]
})
export class BackdropComponent {

    @Input() backdropState = 'visible';
    @Input() mode: '' | 'popup' | 'uv-light' = '';
    @Input() logo: 'uv-logo' | 'search' | '' = '';
    @Output() backdropClicked = new EventEmitter<Event>();

    public onBackdropClicked($event: Event): void {
        this.backdropClicked.emit($event);
    }

}
