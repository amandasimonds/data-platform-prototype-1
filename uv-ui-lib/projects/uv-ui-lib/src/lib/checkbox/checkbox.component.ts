import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'lib-uv-ui-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxComponent {

    @Input() public label = '';
    @Input() public disabled = false;
    @Input() public set value(isChecked: boolean) {
        if (!this.disabled) {
            this.isChecked = isChecked;
            this.onChange(isChecked);
        }
    }

    public isChecked = false;
    public onChange: any = () => {};

    public writeValue(checked: boolean): void {
        this.isChecked = checked;
    }

    public setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    public toggleChecked(isChecked: boolean): void {
        if (!this.disabled) {
            this.isChecked = !this.isChecked;
            this.onChange(this.isChecked);
        }
    }
}
