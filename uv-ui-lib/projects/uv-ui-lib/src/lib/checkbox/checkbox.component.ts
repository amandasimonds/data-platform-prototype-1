import { Component, ChangeDetectionStrategy, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-uv-ui-checkbox',
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
    @Input() public set value(isChecked: boolean) {
        if (!this.disabled) {
            this.isChecked = isChecked;
            this.onChange(isChecked);
        }
    }

    public isChecked = false;
    public onChange: any = () => {};
    onTouch: any = () => {}

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
