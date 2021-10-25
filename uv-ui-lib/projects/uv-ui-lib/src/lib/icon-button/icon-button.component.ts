import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'uvx-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconButtonComponent {
    @Input() public icon = '';
    @Input() public mode: 'secondary' | '' = '';
    @Input() public color: 'gray' | 'gray-dark' | 'primary' | 'black' | 'help' = 'black';
    @Input() public size: 'xs' | 'sm' | 'md' | 'xl' | 'bg' | 'checkmark' = 'sm';
    @Input() public disabled = false;
    @Input() public active = false;

    public get cssClasses(): string[] {
        return [this.color];
    }
}
