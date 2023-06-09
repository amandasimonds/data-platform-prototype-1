import { Component, ChangeDetectionStrategy, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'uvx-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxComponent implements ControlValueAccessor {

    @Input() public label = '';
    @Input() public disabled = false;
    @Input() public set checked(isChecked: boolean) {
        if (!this.disabled) {
            this.isChecked = isChecked;
            this.onChange(isChecked);
        }
    }
    @Input() public unselectEnabled = false;
    @Input() public isChecked = false;
    public onChange: any = () => {};
    public onTouch: any = () => {};

    public registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }

    public writeValue(checked: boolean): void {
        this.isChecked = checked;
    }

    public setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    public toggleChecked(): void {
        if (!this.disabled) {
            this.isChecked = !this.isChecked;
            this.onChange(this.isChecked);
        }
    }
}
