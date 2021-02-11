import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'lib-badge',
    templateUrl: './badge.component.html',
    styleUrls: ['../../scss/_styles.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BadgeComponent {

    @Input() public badgeText: string;
    @Input() public badgeTitle: string;

    @Input() public badgeCSSClasses: string;
    @Input() public iconType: string | null;
    @Input() public iconTitle: string;
    @Input() public isDisabled$: Observable<boolean>;
    // @Input() public textDirection: TextDirection = TextDirection.LTR;

    @Output() public readonly iconClick = new EventEmitter<any>();
    @Output() public readonly mouseOver = new EventEmitter<any>();
    @Output() public readonly mouseLeave = new EventEmitter<any>();

    // public directionEnum = TextDirection;

    public onIconClick(event): void {
        this.iconClick.emit(event);
    }

    public onMouseOver(): void {
        this.mouseOver.emit();
    }

    public onMouseLeave(): void {
        this.mouseLeave.emit();
    }
}
