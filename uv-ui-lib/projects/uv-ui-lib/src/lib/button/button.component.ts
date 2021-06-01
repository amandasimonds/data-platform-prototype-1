import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'lib-uv-ui-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {
    @Input() public buttonText = 'Button';
    @Input() public type: 'btn' | 'btn-login' | 'btn-chip' | 'btn-blue' | 'btn-round' = 'btn';

    public cssClasses = ['btn'];

    public getCssClasses(): void {
        this.cssClasses.push(this.type);
    }

    public ngOnInit(): void {
        this.getCssClasses();
    }
}
