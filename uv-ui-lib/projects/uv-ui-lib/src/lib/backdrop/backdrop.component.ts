import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'uvx-backdrop',
    templateUrl: './backdrop.component.html',
    styleUrls: ['./backdrop.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackdropComponent {
    @Input() public zIndex = '';
    @Input() public height = '';
    @Input() public width = '';
    @Input() public isVisible = false;
    @Output() public readonly backdropClicked = new EventEmitter<Event>();

    public onBackdropClicked($event: Event): void {
        this.backdropClicked.emit($event);
    }
}

