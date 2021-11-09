import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { fadeInOutAnimation } from '../animations';

@Component({
    selector: 'uvx-backdrop',
    templateUrl: './backdrop.component.html',
    styleUrls: ['./backdrop.component.scss'],
    animations: [fadeInOutAnimation],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackdropComponent {

    @Input() public backdropState = 'visible';
    @Input() public  mode = '';
    @Input() public logo: 'uv-logo' | 'search' | '' = '';
    @Input() public transparent = false;
    @Input() public blockContent = false;
    @Output() public readonly backdropClicked = new EventEmitter<Event>();

    public onBackdropClicked($event: Event): void {
        this.backdropClicked.emit($event);
    }

}
