import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'uvx-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconButtonComponent {
    @Input() public icon = '';
    @Input() public color: 'gray' | 'primary' | 'black' = 'black';
    @Input() public size: 'md' | 'sm' | 'xs' | 'xxs' = 'sm';
    @Input() public disabled = false;
    @Input() public active = false;

    public get cssClasses(): string[] {
        return [this.color];
    }
}
